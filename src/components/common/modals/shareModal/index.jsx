import React, { useState } from "react";
import FormInput from "../../../common/input/FormInput";
import { FormProvider, useForm } from "react-hook-form";

const ShareNoteModal = ({ fileName, onConfirm, onClose }) => {
  const [selectedUser, setSelectedUser] = useState("");
  const [userRole, setUserRole] = useState("Editor");
  const methods = useForm();
  const handleUserChange = (event) => {
    setSelectedUser(event.target.value);
  };

  const handleRoleChange = (event) => {
    setUserRole(event.target.value);
  };

  const handleShare = () => {
    // You can implement the share logic here
    // For simplicity, we'll just log the selected user and role
    console.log("Selected User:", selectedUser);
    console.log("User Role:", userRole);
    onConfirm();
  };
  const onSubmit = (data) => {
    handleShare();
  };

  return (
    <FormProvider {...methods}>
      <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 w-full">
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className="shadow-md w-full max-w-[350px] flex items-center flex-col"
        >
          <div className="bg-[#2B2A2A] p-3 w-full flex flex-col items-center rounded-t-md">
            <p className="text-lg font-semibold text-white">Share Note</p>
            <p className="text-[#bebdbd] text-center">
              send note to a friend by providing{" "}
              <b className="text-[#dbdbdb]">Nowted username</b> below
            </p>
            <div className="mt-4 w-full">
              <FormInput
                type={"text"}
                name={"username"}
                label={"Enter Username"}
                placeholder={"chimay123"}
              />
            </div>
          </div>
          <div className="flex justify-end bg-[#1E1E1F] w-full p-3 rounded-b-md">
            <button
              className="px-4 py-2 w-full mr-2 bg-blue-500 text-[#f5f5f5] rounded hover:bg-blue-600"
              type="submit"
            >
              Share
            </button>
            <button
              className="px-4 py-2 w-full bg-[#272626] text-[#f5f5f5] rounded hover:bg-[#181818]"
              type="button"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </FormProvider>
  );
};

export default ShareNoteModal;
