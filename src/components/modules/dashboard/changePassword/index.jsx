import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import Auth from "../../../../utils/schemas/auth";
import FormInput from "../../../common/input/FormInput";
import { useUpdateUserPassword } from "../../../../react-query/settings/useChangePassword";

const ChangePassword = ({ onClose }) => {
  const updateUserPasswordMutation = useUpdateUserPassword();
  const methods = useForm({
    mode: "onChange",
    resolver: yupResolver(Auth.changePassword),
  });
  const onSubmit = async (data) => {
    try {
      await updateUserPasswordMutation.mutateAsync({
        newPassword: data.password,
        oldPassword: data.oldpassword,
      });
      onClose();
    } catch (error) {
      console.log(error); // Handle the error or display an error message
    }
  };
  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="w-full bg-inherit"
      >
        <FormInput
          type="password"
          name="oldpassword"
          label="Old Password"
          placeholder="enter old password"
        />
        <FormInput
          type="password"
          name="password"
          label="Password"
          placeholder="create new password"
        />
        <FormInput
          type="password"
          name="confirmPassword"
          label="Confirm Password"
          placeholder="confirm password"
        />
        <div className="w-full mt-6 h-fit">
          <button
            type={methods.formState.isValid ? "submit" : "button"}
            disabled={
              !methods.formState.isValid || updateUserPasswordMutation.isLoading
            }
            className={`rounded cursor-pointer ${
              !methods.formState.isValid
                ? " bg-blue-600 opacity-25 hover:cursor-not-allowed"
                : "bg-tert hover:scale-[1.01] "
            } px-8 py-2 text-base leading-6 w-full text-white transition-all duration-[0.2s] `}
          >
            {updateUserPasswordMutation.isLoading
              ? "Changing Password..."
              : "Change password"}
          </button>
        </div>
      </form>
    </FormProvider>
  );
};

export default ChangePassword;
