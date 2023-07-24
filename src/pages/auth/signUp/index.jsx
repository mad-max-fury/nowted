import React from "react";
import { AiFillApple, AiFillFacebook, AiOutlineGoogle } from "react-icons/ai";
import { FormProvider, useForm } from "react-hook-form";
import FormInput from "../../../components/common/input/FormInput";
import { Link } from "react-router-dom";
import { useSignUp } from "../../../react-query/auth/useSignUp";
import Auth from "../../../utils/schemas/auth";
import { yupResolver } from "@hookform/resolvers/yup";

const SignUp = () => {
  const methods = useForm({
    mode: "onChange",
    resolver: yupResolver(Auth.authSignUpSchema),
  });
  const signUp = useSignUp();
  const onSubmit = (data) => {
    if (
      typeof data.email === "string" &&
      typeof data.password === "string" &&
      typeof data.username === "string"
    ) {
      signUp.mutate({
        password: data.password,
        email: data.email,
        userName: data.username,
      });
    }
    if (signUp.isSuccess) methods.reset();
  };

  return (
    <FormProvider {...methods}>
      <div className="flex flex-col w-full gap-4 mb-4">
        <h1 className="text-center text-[#f5f5f5] text-[clamp(26px,5vw,32px)] font-bold leading-9">
          Create an <span className="text-tert hover:text-white ">Account</span>
        </h1>
        <div className="max-w-[89%] mx-auto text-center text-gray-300 text-[16px] font-normal leading-normal">
          Join us today, and together we'll unleash your creativity, one note at
          a time!
        </div>
      </div>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="w-full">
        <FormInput
          type="text"
          name="username"
          label="Username*"
          placeholder="Enter your username"
        />
        <FormInput
          type="email"
          name="email"
          label="Email*"
          placeholder="Enter your email"
        />
        <FormInput
          type="password"
          name="password"
          label="Password"
          placeholder="Enter your password"
        />

        <div className="w-full mt-6 h-fit">
          <button
            type={methods.formState.isValid ? "submit" : "button"}
            disabled={!methods.formState.isValid}
            className={`rounded cursor-pointer ${
              !methods.formState.isValid
                ? " bg-blue-600 opacity-25 hover:cursor-not-allowed"
                : "bg-tert hover:scale-[1.01]"
            } px-8 py-2 text-base leading-6 w-full text-white transition-all duration-[0.2s] `}
          >
            Create an account
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
          Sign up with Google
        </button>
        <button className="w-full px-4 py-2 text-white transition-colors duration-200 border-2 border-white border-solid rounded">
          <AiFillApple className="inline-block w-6 h-6 mr-2" />
          Sign up with Apple
        </button>
        <button className="w-full px-4 py-2 text-white transition-colors duration-200 border-2 border-white border-solid rounded">
          <AiFillFacebook className="inline-block w-6 h-6 mr-2" />
          Sign up with Facebook
        </button>
      </div>
      <div className="inline-flex items-start justify-center gap-1 mt-6 ">
        <Link
          to="/"
          className="flex items-center justify-center font-medium leading-tight text-slate-100 text-[clamp(14px,5vw,20px)]"
        >
          Already have an account?
          <span className="items-center ml-[8px] justify-center text-tert underline font-bold">
            Log in
          </span>
        </Link>
      </div>
    </FormProvider>
  );
};

export default SignUp;
