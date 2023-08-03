import React from "react";

const ConfirmationModal = ({ heading, message, onConfirm, onCancel }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 w-full">
      <div className=" shadow-md w-full max-w-[300px] flex items-center  flex-col">
        <div className="bg-[#2B2A2A] p-3 flex flex-col items-center rounded-t-md">
          <h3 className="text-lg font-semibold text-[#f5f5f5]">{heading}</h3>
          <p className="text-[#c4bebe] mb-4 text-center w-full">{message}</p>
        </div>
        <div className="flex justify-end bg-[#1E1E1F] w-full p-3 rounded-b-md">
          <button
            className="px-4 py-2 w-full mr-2 bg-blue-500 text-[#f5f5f5] rounded hover:bg-blue-600"
            onClick={onConfirm}
          >
            Confirm
          </button>
          <button
            className="px-4 py-2 w-full bg-[#272626] text-[#f5f5f5] rounded hover:bg-[#181818]"
            onClick={onCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
