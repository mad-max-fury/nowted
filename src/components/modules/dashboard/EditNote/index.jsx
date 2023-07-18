import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "../../../../assets/editorStyles.css";
import { formats, modules } from "../../../../utils/configs";

const EditNote = () => {
  const [value, setValue] = useState("");
  return (
    <div className="mx-auto mt-[28px] flex   w-[100%] flex-col items-center justify-center bg-[#181818] ">
      <ReactQuill
        theme="snow"
        value={value}
        onChange={setValue}
        className="h-fit min-h-[70vh] w-[100%]  "
        modules={modules}
        formats={formats}
      />
    </div>
  );
};
export default EditNote;
