import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import FormInput from "../../../components/common/input/FormInput";
import { Link } from "react-router-dom";

const CreatePassword = () => {
  const methods = useForm();
  const [values, setValues] = useState({ password: "", confirmPassword: "" });
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <div className="flex flex-col w-full gap-4 mb-4">
        <h1 className="text-center text-[#f5f5f5] text-[clamp(18px,5vw,32px)] font-bold leading-9">
          Set new <span className="text-tert">password</span>
        </h1>
        <div className="max-w-[89%] mx-auto text-center text-gray-300 text-[16px] font-normal leading-normal">
          Your new password must be different from previously used passwords.
        </div>
      </div>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} className="w-full">
          <FormInput
            type="password"
            name="password"
            label="Password"
            val={values.password}
            setChange={(e) =>
              setValues((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
            placeholder="create new password"
          />
          <FormInput
            type="password"
            name="confirmPassword"
            label="Password"
            val={values.confirmPassword}
            setChange={(e) =>
              setValues((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
            placeholder="confirm password"
          />
          <div className="w-full mt-6 h-fit">
            <button
              type="submit"
              disabled={!methods.formState.isValid}
              className="rounded cursor-pointer bg-tert px-8 py-2 text-base leading-6 w-full text-white transition-all duration-[0.2s] hover:scale-[1.01]"
            >
              Reset password
            </button>
          </div>
        </form>
      </FormProvider>
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
  );
};

export default CreatePassword;
