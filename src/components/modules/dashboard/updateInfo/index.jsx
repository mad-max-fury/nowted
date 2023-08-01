import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import Auth from "../../../../utils/schemas/auth";
import FormInput from "../../../common/input/FormInput";

const UpdateInfo = () => {
  const methods = useForm({
    mode: "onChange",
    resolver: yupResolver(Auth.changePassword),
  });
  const onSubmit = (data) => {
    if (typeof data.password === "string") {
    }
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

export default UpdateInfo;
