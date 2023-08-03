import React, { useState } from "react";
import CButton from "../../../common/button";
import { useSnackbar } from "notistack";
import { useUploadPhoto } from "../../../../react-query/settings/useUploadPhoto";
import { useGetMe } from "../../../../react-query/settings/useGetUserProfile";

const ProfileUpload = ({ onClose }) => {
  const { data } = useGetMe();
  const uploadPhotoMutation = useUploadPhoto();
  const { enqueueSnackbar } = useSnackbar();
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewImage, setPreviewImage] = useState(
    data?.me?.profileIcon ||
      "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
  );

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (
      file.type.startsWith("image/png") ||
      file.type.startsWith("image/jpeg")
    ) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      return enqueueSnackbar("Unsupported file formats, use Jpeg or png", {
        variant: "error",
      });
    }
  };

  const handleUpload = async () => {
    if (selectedFile) {
      try {
        // Call the uploadPhotoMutation function with the selected file
        await uploadPhotoMutation.mutateAsync({ image: selectedFile });
        onClose();
      } catch (error) {
        console.log(error);
      }
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
          <CButton
            type={uploadPhotoMutation.isLoading ? "Uploading..." : "button"}
            callback={uploadPhotoMutation.isLoading ? null : handleUpload}
            text={"Upload"}
          />
          <button
            onClick={uploadPhotoMutation.isLoading ? null : onClose}
            className="px-4 py-2 w-full bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            {uploadPhotoMutation.isLoading ? "..." : "Cancel"}
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfileUpload;
