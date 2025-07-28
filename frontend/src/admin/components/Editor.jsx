import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default function Editor() {
  const [editorData, setEditorData] = useState("");

  return (
    <div className="w-full max-w-4xl bg-[#1D1B25] shadow-lg rounded-xl p-6 space-y-6">
      <h4 className="text-2xl font-semibold text-gray-50">Content</h4>

      {/* CKEditor Wrapper Styled with #1D1B25 */}
      <div
        className="editor-wrapper border rounded-md overflow-hidden"
        style={{
          backgroundColor: "#1D1B25",
          borderColor: "#1D1B25",
        }}
      >
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
          className="editor ck-editor__editable_inline"
        />
      </div>

      {/* Preview Output */}
      <div>
        <div
          className="border border-gray-700 rounded-md p-4 bg-#1D1B25 max-h-80 overflow-auto prose prose-sm text-white"
          dangerouslySetInnerHTML={{ __html: editorData }}
        />
      </div>
    </div>
  );
}
