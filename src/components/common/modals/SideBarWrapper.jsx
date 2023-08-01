import React from "react";
import { IoCloseOutline } from "react-icons/io5";

const SidebarModalWrapper = ({ isOpen, onClose, children, label }) => {
  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className={`fixed inset-0 z-50 bg-black bg-opacity-50 ${
        isOpen ? "block" : "hidden"
      }`}
      onClick={handleOverlayClick}
    >
      <div className="fixed right-0 h-full w-64 bg-[#201f1f] shadow-lg transform transition-transform ease-in-out duration-300 translate-x-full sm:translate-x-0 sm:w-full sm:max-w-md p-6">
        <div className="flex items-center mb-8 justify-between w-full ">
          <h3 className="text-[clamp(15px,_5vw,_25px)] font-semibold text-white">
            {label}
          </h3>
          <span className="flex items-center justify-center gap-4">
            <button
              onClick={onClose}
              className="text-[rgba(255,_255,_255,_0.6)] p-2 shadow-lg bg-[rgba(255,255,255,0.1)] rounded-md  transition-all duration-[0.2s] hover:text-white"
            >
              <IoCloseOutline size={25} />
            </button>
          </span>
        </div>
        {children}
      </div>
    </div>
  );
};

export default SidebarModalWrapper;
