import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import FormInput from "../../../common/input/FormInput";
import { useGetMe } from "../../../../react-query/settings/useGetUserProfile";
import SettingsSchemas from "../../../../utils/schemas/settings"; // Make sure to have
import { useUpdateUserInfo } from "../../../../react-query/settings/useUpdateUserInfo";

const UpdateInfo = ({ onClose }) => {
  const { data } = useGetMe();
  const updateUserInfoMutation = useUpdateUserInfo();

  const methods = useForm({
    mode: "onChange",
    resolver: yupResolver(SettingsSchemas.updateUserInfo),
    defaultValues: {
      username: data?.me?.userName || "",
      firstName: data?.me?.firstName || "dhdddg",
      middleName: data?.me?.middleName || "dgdggd",
      lastName: data?.me?.lastName || "errere",
      age: data?.me?.age || 21,
    },
  });

  const onSubmit = async (data) => {
    await updateUserInfoMutation.mutateAsync(data);
    onClose();
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="w-full bg-inherit"
      >
        <FormInput
          type="text"
          name="username"
          label="Username"
          placeholder="endeecodes"
        />
        <FormInput
          type="text"
          name="firstName"
          label="First Name"
          placeholder="chris"
        />
        <FormInput
          type="text"
          name="middleName"
          label="Middle Name"
          placeholder="Anthony"
        />
        <FormInput
          type="text"
          name="lastName"
          label="Last Name"
          placeholder="Ndubuisi"
        />
        <FormInput type="number" name="age" label="Age" placeholder="21" />

        <div className="w-full mt-6 h-fit">
          <button
            type={methods.formState.isValid ? "submit" : "button"}
            disabled={
              !methods.formState.isValid || updateUserInfoMutation.isLoading
            }
            className={`rounded cursor-pointer ${
              !methods.formState.isValid
                ? "bg-blue-600 opacity-25 hover:cursor-not-allowed"
                : "bg-tert hover:scale-[1.01]"
            } px-8 py-2 text-base leading-6 w-full text-white transition-all duration-[0.2s] `}
          >
            {updateUserInfoMutation.isLoading
              ? "Updating..."
              : "Update Information"}
          </button>
        </div>
      </form>
    </FormProvider>
  );
};

export default UpdateInfo;
