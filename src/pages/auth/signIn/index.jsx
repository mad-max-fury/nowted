import React from "react";
import { AiFillApple, AiFillFacebook, AiOutlineGoogle } from "react-icons/ai";
import { FormProvider, useForm } from "react-hook-form";
import FormInput from "../../../components/common/input/FormInput";
import CustomCheckbox from "../../../components/common/customCheckbox";
import { Link } from "react-router-dom";
import { useSignIn } from "../../../react-query/auth/useSignIn";
import { yupResolver } from "@hookform/resolvers/yup";
import Auth from "../../../utils/schemas/auth";
const SignIn = () => {
  const methods = useForm({
    mode: "onChange",
    resolver: yupResolver(Auth.authLoginSchema),
  });
  const signIn = useSignIn();
  const onSubmit = (data) => {
    if (
      typeof data.password === "string" &&
      typeof data.username === "string"
    ) {
      signIn.mutate({
        password: data.password,
        userName: data.username,
      });
      if (signIn.isSuccess) methods.reset();
    }
  };

  return (
    <FormProvider {...methods}>
      <>
        <div className="flex flex-col w-full gap-4 mb-4">
          <h1 className="text-center text-[#f5f5f5]  text-[clamp(26px,5vw,32px)] font-bold leading-9">
            Login to your <span className="text-tert">account</span>
          </h1>
          <div className="max-w-[89%] mx-auto text-center text-gray-300 text-[16px] font-normal leading-normal">
            Welcome back, please enter your details
          </div>
        </div>
        <form onSubmit={methods.handleSubmit(onSubmit)} className="w-full">
          <FormInput
            type="text"
            name="username"
            label="Username/Email*"
            placeholder="Enter your username  or email"
          />
          <FormInput
            type="password"
            name="password"
            label="Password*"
            placeholder="Enter your password"
          />
          <div className="flex items-center justify-between w-full">
            <CustomCheckbox name="RememberMe" label="Remember Me" />
            <div className="inline-flex items-center justify-center gap-1">
              <Link
                to="/forgot-password"
                className="flex items-center justify-center font-medium leading-tight underline hover:text-white text-[clamp(14px,5vw,18px)] text-tert"
              >
                Forgot Password
              </Link>
            </div>
          </div>
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
              Sign In
            </button>
          </div>
        </form>

        <div className="inline-flex items-center justify-start w-full h-5 gap-2 mt-8 mb-4">
          <div className="grow shrink basis-0 h-[1px] bg-gray-500" />
          <div className="text-center text-slate-100 text-[14px] font-medium leading-tight">
            OR
          </div>
          <div className="grow shrink basis-0 h-[1px] bg-gray-500" />
        </div>
        <div className="flex flex-col justify-center w-full gap-4">
          <button className="w-full px-4 py-2 text-white transition-colors duration-200 border-2 border-white border-solid rounded">
            <AiOutlineGoogle className="inline-block w-6 h-6 mr-2" />
            Sign in with Google
          </button>
          <button className="w-full px-4 py-2 text-white transition-colors duration-200 border-2 border-white border-solid rounded">
            <AiFillApple className="inline-block w-6 h-6 mr-2" />
            Sign in with Apple
          </button>
          <button className="w-full px-4 py-2 text-white transition-colors duration-200 border-2 border-white border-solid rounded">
            <AiFillFacebook className="inline-block w-6 h-6 mr-2" />
            Sign in with Facebook
          </button>
        </div>
        <div className="inline-flex items-start justify-center gap-1 mt-6 ">
          <Link
            to="/create-account"
            className="flex items-center justify-center font-medium leading-tight text-slate-100 text-[clamp(14px,5vw,20px)]"
          >
            Don't have an account?
            <span className="items-center ml-[8px] justify-center text-tert underline font-bold">
              Sign up
            </span>
          </Link>
        </div>
      </>
    </FormProvider>
  );
};

export default SignIn;
