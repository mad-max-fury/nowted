import React from "react";

const InputField = ({ placeholder }) => {
  return (
    <div class="input-wrapper relative w-[100%] group" tabIndex={0}>
      <input
        class="input-box"
        type="text"
        placeholder={placeholder}
        className="w-full bg-transparent fowhitent-base p-[10px_0] border-b-[1px] border-solid border-[#333] outline-none text-[#f5f5f5]"
      />
      <span class="underline absolute bottom-0 left-0 w-full h-[1px] bg-[#f5f5f5] scale-x-[0] transition-[all_0.3s_ease-in-out] group-focus-within:scale-x-[1]"></span>
    </div>
  );
};

export default InputField;
