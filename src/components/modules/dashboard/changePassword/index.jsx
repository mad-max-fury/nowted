import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import Auth from "../../../../utils/schemas/auth";
import FormInput from "../../../common/input/FormInput";

const ChangePassword = () => {
  const methods = useForm({
    mode: "onChange",
    resolver: yupResolver(Auth.changePassword),
  });
  const onSubmit = (data) => {
    if (typeof data.password === "string") {
      // resetPasswordMutation.mutate({
      //   creds: { password: data.password },
      //   resetToken: secret,
      // });
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
            disabled={!methods.formState.isValid}
            className={`rounded cursor-pointer ${
              !methods.formState.isValid
                ? " bg-blue-600 opacity-25 hover:cursor-not-allowed"
                : "bg-tert hover:scale-[1.01] "
            } px-8 py-2 text-base leading-6 w-full text-white transition-all duration-[0.2s] `}
          >
            Change Password
          </button>
        </div>
      </form>
    </FormProvider>
  );
};

export default ChangePassword;
