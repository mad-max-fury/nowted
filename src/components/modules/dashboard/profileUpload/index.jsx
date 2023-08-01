import React, { useState } from "react";
import CButton from "../../../common/button";

const ProfileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewImage, setPreviewImage] = useState(
    "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
  );

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setSelectedFile(null);
      setPreviewImage(null);
    }
  };

  const handleUpload = () => {
    if (selectedFile) {
      console.log("File Name:", selectedFile.name);
      console.log("File Size:", selectedFile.size);
      console.log("File Type:", selectedFile.type);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto  py-6">
      {previewImage && (
        <img
          src={previewImage}
          alt="Profile Preview"
          className="w-40 h-40 object-cover rounded-full mx-auto mb-4"
        />
      )}
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
        id="fileInput"
      />
      <label
        htmlFor="fileInput"
        className="block w-full px-4 py-2 bg-blue-500 text-white rounded-full text-center cursor-pointer mb-4"
      >
        Choose Profile Picture
      </label>
      {selectedFile && (
        <div className="flex gap-4 ">
          <CButton type={"button"} callback={handleUpload} text={"Upload"} />
          <button
            onClick={handleUpload}
            className="px-4 py-2 w-full bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfileUpload;
