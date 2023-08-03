import React from "react";

const CButton = ({ text, type, callback }) => {
  return (
    <button
      type={type || "button"}
      onClick={callback}
      className="rounded bg-tert px-8 py-2 text-base w-full leading-6  text-white transition-all duration-[0.2s] hover:scale-[0.95]"
    >
      {text}
    </button>
  );
};

export default CButton;
