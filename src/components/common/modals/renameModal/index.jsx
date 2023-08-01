import React, { useState } from "react";

const RenameModal = ({ isOpen, initialName, onSave, onClose, renameType }) => {
  const [newName, setNewName] = useState(initialName);

  const handleChange = (event) => {
    setNewName(event.target.value);
  };

  const handleSave = () => {
    return onSave(newName);
  };

  const handleCancel = () => {
    onClose();
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-[150] bg-black bg-opacity-50 ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <div className="bg-[#2B2A2A] w-[280px] p-3 rounded-lg shadow-lg">
        <h2 className="text-lg font-semibold text-[#f5f5f5] mb-4">
          Rename {renameType}
        </h2>
        <input
          type="text"
          value={newName}
          onChange={handleChange}
          className="w-full px-4 py-2 mb-4 outline-none border-none text-gray-700 rounded"
        />
        <div className="flex justify-end">
          <button
            className="px-4 py-2 mr-2 w-full bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={handleSave}
          >
            Save
          </button>
          <button
            className="px-4 py-2 bg-gray-500 w-full text-white rounded hover:bg-gray-600"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default RenameModal;
