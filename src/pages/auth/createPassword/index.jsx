import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import FormInput from "../../../components/common/input/FormInput";
import { Link, useParams } from "react-router-dom";
import Auth from "../../../utils/schemas/auth";
import { yupResolver } from "@hookform/resolvers/yup";
import { useResetPassword } from "../../../react-query/auth/useResetPassword";
const CreatePassword = () => {
  const { secret } = useParams();
  const methods = useForm({
    mode: "onChange",
    resolver: yupResolver(Auth.authResetPassword),
  });
  const resetPasswordMutation = useResetPassword();
  const onSubmit = (data) => {
    if (typeof data.password === "string") {
      resetPasswordMutation.mutate({
        creds: { password: data.password },
        resetToken: secret,
      });
    }
  };

  return (
    <FormProvider {...methods}>
      <>
        <div className="flex flex-col w-full gap-4 mb-4">
          <h1 className="text-center text-[#f5f5f5] text-[clamp(18px,5vw,32px)] font-bold leading-9">
            Set new <span className="text-tert">password</span>
          </h1>
          <div className="max-w-[89%] mx-auto text-center text-gray-300 text-[16px] font-normal leading-normal">
            Your new password must be different from previously used passwords.
          </div>
        </div>
        <form onSubmit={methods.handleSubmit(onSubmit)} className="w-full">
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
        <div className="inline-flex items-start justify-center gap-1 mt-6 ">
          <Link
            to={"/"}
            className="flex items-center justify-center font-medium leading-tight text-slate-100 text-[clamp(14px,5vw,20px)]"
          >
            Back to
            <span className="items-center ml-[8px] justify-center text-tert underline font-bold">
              Login
            </span>
          </Link>
        </div>
      </>
    </FormProvider>
  );
};

export default CreatePassword;
