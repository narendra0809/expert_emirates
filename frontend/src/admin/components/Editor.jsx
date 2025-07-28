import { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default function Editor() {
  const [editorData, setEditorData] = useState("");

  return (
    <div className="w-full h-full bg-[#1D1B25] shadow-lg rounded-xl p-6 space-y-6">
      <h4 className="text-2xl font-semibold text-gray-50">Content</h4>

      <div className="editor-wrapper">
        <CKEditor
          editor={ClassicEditor}
          data={editorData}
          onChange={(event, editor) => {
            const data = editor.getData();
            setEditorData(data);
          }}
          config={{
            placeholder: "Start typing your content here...",
          }}
          onReady={(editor) => {
            // Make editor border transparent
            editor.ui.view.editable.element.style.border = "none";
            editor.ui.view.editable.element.style.backgroundColor = "#1D1B25";
            editor.ui.view.editable.element.style.color = "#FFFFFF";

            // Style toolbar buttons white
            const toolbar = editor.ui.view.toolbar.element;
            toolbar.style.backgroundColor = "transparent";
            toolbar.style.border = "none";

            // Style all buttons white
            const buttons = toolbar.querySelectorAll(".ck-button");
            buttons.forEach((button) => {
              button.style.color = "#FFFFFF";
            });
          }}
        />
      </div>

      <style jsx global>{`
        .ck.ck-editor {
          border: none !important;
        }
        .ck.ck-toolbar {
          background-color: transparent !important;
          border: none !important;
        }
        .ck.ck-editor__main > .ck-editor__editable {
          background-color: #1d1b25 !important;
          color: #ffffff !important;
          border: none !important;
          min-height: 200px;
        }
        /* White toolbar icons */
        .ck.ck-toolbar .ck-icon,
        .ck.ck-toolbar .ck-button .ck-button__label {
          color: white !important;
          fill: white !important;
        }
        /* White dropdown arrows */
        .ck.ck-toolbar .ck-dropdown__arrow {
          color: white !important;
        }
        /* White button hover states */
        .ck.ck-button:not(.ck-disabled):hover {
          background-color: rgba(255, 255, 255, 0.1) !important;
        }
        /* White active button states */
        .ck.ck-button.ck-on {
          background-color: rgba(255, 255, 255, 0.2) !important;
        }
        /* White dropdown panel */
        .ck.ck-dropdown__panel {
          background-color: #1d1b25 !important;
          border: 1px solid rgba(255, 255, 255, 0.1) !important;
        }
        /* White panel items */
        .ck.ck-list__item .ck-button .ck-button__label {
          color: white !important;
        }
      `}</style>
    </div>
  );
}
