import React, { useState, useEffect } from "react";
import { EditorState, ContentState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import htmlToDraft from "html-to-draftjs";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const RichEditor = ({ initialValue = "", onChange }) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [initialized, setInitialized] = useState(false);

  // Initialize with content
  useEffect(() => {
    if (!initialized && initialValue) {
      try {
        const blocksFromHtml = htmlToDraft(initialValue);
        const { contentBlocks, entityMap } = blocksFromHtml;
        const contentState = ContentState.createFromBlockArray(
          contentBlocks,
          entityMap
        );
        setEditorState(EditorState.createWithContent(contentState));
      } catch (e) {
        console.log(e);
        const contentState = ContentState.createFromText(initialValue);
        setEditorState(EditorState.createWithContent(contentState));
      }
      setInitialized(true);
    }
  }, [initialValue, initialized]);

  const handleEditorChange = (newEditorState) => {
    setEditorState(newEditorState);
    if (onChange) {
      const contentState = newEditorState.getCurrentContent();
      const plainText = contentState.getPlainText();
      onChange(plainText);
    }
  };

  return (
    <div className="editor-wrapper border border-gray-700 rounded-lg bg-[#121117] min-h-[300px]">
      <Editor
        editorState={editorState}
        onEditorStateChange={handleEditorChange}
        toolbar={{
          options: [
            "inline",
            "blockType",
            "fontSize",
            "fontFamily",
            "list",
            "textAlign",
            "colorPicker",
            "link",
            "embedded",
            "emoji",
            "image",
            "remove",
            "history",
          ],
          inline: { inDropdown: true },
          list: { inDropdown: true },
          textAlign: { inDropdown: true },
          link: { inDropdown: true },
          history: { inDropdown: true },
          image: {
            uploadCallback: uploadImageCallBack,
            alt: { present: true, mandatory: true },
            previewImage: true,
          },
        }}
        wrapperClassName="wrapper-class"
        editorClassName="editor-class px-4 py-2 text-white min-h-[250px]"
        toolbarClassName="toolbar-class bg-[#1d1b25] border-b border-gray-700"
        toolbarCustomButtons={[]}
      />
    </div>
  );
};

// Image upload handler
const uploadImageCallBack = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      resolve({ data: { link: e.target.result } });
    };
    reader.onerror = (e) => {
      reject(e);
    };
    reader.readAsDataURL(file);
  });
};

// Add custom CSS for dark theme
const styles = `
  /* Base editor styles */
  .editor-class {
    color: white !important;
    background-color: #121117 !important;
  }
  .wrapper-class {
    border: 1px solid #374151 !important;
    border-radius: 0.5rem !important;
  }
  .toolbar-class {
    border-bottom: 1px solid #374151 !important;
    background-color: #1d1b25 !important;
    color: white !important;
  }

  /* Toolbar buttons */
  .rdw-option-wrapper {
    background-color: #1d1b25 !important;
    border: 1px solid #374151 !important;
    color: white !important;
  }
  .rdw-option-wrapper:hover {
    background-color: #2d2b35 !important;
    box-shadow: none !important;
  }
  .rdw-option-active {
    background-color: #3d3b45 !important;
  }

  /* Dropdowns */
  .rdw-dropdown-wrapper {
    background-color: #1d1b25 !important;
    border: 1px solid #374151 !important;
    color: white !important;
  }
  .rdw-dropdown-wrapper:hover {
    background-color: #2d2b35 !important;
    box-shadow: none !important;
  }
  .rdw-dropdown-optionwrapper {
    background-color: #1d1b25 !important;
    border: 1px solid #374151 !important;
    color: white !important;
  }
  .rdw-dropdown-optionwrapper:hover {
    background-color: #2d2b35 !important;
  }
  .rdw-dropdownoption-highlighted {
    background-color: #3d3b45 !important;
  }
  .rdw-dropdownoption-active {
    background-color: #3d3b45 !important;
  }

  /* Modal dialogs */
  .rdw-colorpicker-modal,
  .rdw-link-modal,
  .rdw-embedded-modal,
  .rdw-emoji-modal,
  .rdw-image-modal {
    background-color: #1d1b25 !important;
    border: 1px solid #374151 !important;
    color: white !important;
  }

  /* Input fields in modals */
  .rdw-link-modal-input,
  .rdw-embedded-modal-input,
  .rdw-image-modal-url-input {
    background-color: #121117 !important;
    border: 1px solid #374151 !important;
    color: white !important;
  }

  /* Toolbar labels and text */
  .rdw-dropdown-selectedtext,
  .rdw-colorpicker-option,
  .rdw-emoji-label,
  .rdw-link-modal-label,
  .rdw-embedded-modal-label,
  .rdw-image-modal-label {
    color: white !important;
  }

  /* Hover states */
  .rdw-colorpicker-option:hover,
  .rdw-emoji-option:hover,
  .rdw-link-modal-btn:hover,
  .rdw-embedded-modal-btn:hover,
  .rdw-image-modal-btn:hover {
    background-color: #2d2b35 !important;
  }

  /* Active states */
  .rdw-colorpicker-option-active,
  .rdw-emoji-option-active {
    background-color: #3d3b45 !important;
  }
`;

// Inject styles
const addStyles = () => {
  if (document.getElementById("rich-editor-styles")) return;

  const styleElement = document.createElement("style");
  styleElement.id = "rich-editor-styles";
  styleElement.innerHTML = styles;
  document.head.appendChild(styleElement);
};

addStyles();

export default RichEditor;
