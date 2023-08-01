import React from "react";
import { useFormContext } from "react-hook-form";

const FormInput = ({ type, name, label, placeholder }) => {
  const { formState, register } = useFormContext();

  return (
    <div
      className={`relative flex flex-col items-start justify-start w-full ${
        formState.errors[name] ? "mb-8" : "mb-4"
      } h-fit  bg-inherit isolate`}
    >
      <label htmlFor={name} className="text-white">
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        {...register(name)}
        className={`w-full p-2 mt-1 z-1   bg-inherit ring-1 outline-none rounded  transition-all duration-[0.3s] ease-out  ${
          formState.errors[name]
            ? " ring-red-500 text-red-500"
            : "ring-[#f5f5f5] text-[#f5f5f5]"
        }`}
      />

      {/* Adjusted class name and condition */}
      <span
        className={`text-red-500 bg-primary bg-inherit absolute w-full left-0 transition-all ease-in-out duration-[0.3s] ${
          formState.errors[name]
            ? "top-[calc(100%_+_0.3rem)]"
            : "top-[50%]  z-[-1]"
        } `}
      >
        {formState.errors[name]?.message}
      </span>
    </div>
  );
};

export default FormInput;
