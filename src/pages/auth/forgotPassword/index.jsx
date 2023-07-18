import React, { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import FormInput from "../../../components/common/input/FormInput";
import CButton from "../../../components/common/button";
import { Link } from "react-router-dom";

const ResetPassword = () => {
  const methods = useForm();
  const [toggleCheckMail, setToggleCheckMail] = useState(false);
  const [values, setValues] = useState({ email: "" });
  const onSubmit = (data) => {
    console.log(data);
    setToggleCheckMail(true);
  };

  return (
    <>
      {!toggleCheckMail ? (
        <>
          <div className="flex flex-col w-full gap-4 mb-4">
            <h1 className="text-center text-[#f5f5f5] text-[clamp(18px,5vw,32px)] font-bold leading-9">
              Forgot <span className="text-tert">Password</span>
            </h1>
            <div className="max-w-[89%] mx-auto text-center text-gray-300 text-[16px] font-normal leading-normal">
              No worries, we'll send you reset instructions
            </div>
          </div>
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)} className="w-full">
              <FormInput
                type="email"
                name="email"
                label="Email*"
                val={values.email}
                setChange={(e) =>
                  setValues((prev) => ({
                    ...prev,
                    [e.target.name]: e.target.value,
                  }))
                }
                placeholder="Enter your email address"
              />
              <div className="w-full mt-6 h-fit">
                <button
                  type="submit"
                  disabled={!methods.formState.isValid}
                  className="rounded cursor-pointer bg-tert px-8 py-2 text-base leading-6 w-full text-white transition-all duration-[0.2s] hover:scale-[1.01]"
                >
                  Get Password reset link
                </button>
              </div>
            </form>
          </FormProvider>
          <div className="inline-flex items-start justify-center gap-1 mt-6 ">
            <Link
              to="/"
              className="flex items-center justify-center font-medium leading-tight text-slate-100 text-[clamp(14px,5vw,20px)]"
            >
              Back to
              <span className="items-center ml-[8px] justify-center text-tert underline font-bold">
                Login
              </span>
            </Link>
          </div>
        </>
      ) : (
        <CheckMailBox userEmail={values.email} />
      )}
    </>
  );
};

export default ResetPassword;

const CheckMailBox = ({ userEmail }) => {
  const [resending, setResending] = useState(false);
  const [seconds, setSeconds] = useState(60);

  useEffect(() => {
    if (resending) {
      const interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [resending]);
  useEffect(() => {
    if (seconds === 0) {
      setResending(false);
      setSeconds(60);
    }
  }, [seconds]);
  const handleOpenEmailApp = () => {
    window.location.href = `mailto:${userEmail}`;
  };
  const handleResendMail = async () => {
    try {
      setResending(true);
    } catch (error) {}
  };
  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="flex flex-col w-full gap-4 mb-4">
        <h1 className="text-center text-[#f5f5f5] text-[clamp(18px,5vw,32px)] font-bold leading-9">
          Check your <span className="text-tert">email</span>
        </h1>
        <p
          className={
            "max-w-[89%] mx-auto text-center text-gray-300 text-[16px] font-normal leading-norma"
          }
        >
          We have sent a reset password link to <b>{userEmail}</b>
        </p>
      </div>
      <CButton
        text={"Open email app"}
        callback={resending ? null : handleOpenEmailApp}
      />
      {resending && seconds > 0 ? (
        <p className="flex mt-2 items-center gap-2 justify-center font-medium leading-tight text-slate-100 text-[clamp(14px,5vw,20px)]">
          Resending link in{" "}
          <button>
            {Math.floor(seconds / 60)}min:
            {(seconds % 60).toString().padStart(2, "0")}s
          </button>
        </p>
      ) : (
        <p className="flex items-center justify-center gap-2 mt-6 text-base font-medium leading-tight text-slate-100">
          Didn't recieve the mail?{" "}
          <button onClick={handleResendMail}>Click to resend</button>
        </p>
      )}
      <div className="inline-flex items-start justify-center gap-1 mt-6 ">
        <Link
          to="/"
          className="flex items-center justify-center font-medium leading-tight text-slate-100 text-[clamp(14px,5vw,20px)]"
        >
          Back to
          <span className="items-center ml-[8px] justify-center text-tert underline font-bold">
            Login
          </span>
        </Link>
      </div>
    </div>
  );
};
