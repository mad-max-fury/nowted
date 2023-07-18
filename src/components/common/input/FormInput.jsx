import React from "react";
import { useFormContext } from "react-hook-form";
import { validateInput } from "../../../utils/helpers";

const FormInput = ({
  type,
  name,
  label,
  placeholder,
  val,
  setChange = () => null,
}) => {
  const {
    register,
    formState: { errors },
    setValue,
    clearErrors,
  } = useFormContext();

  const handleInputChange = (e) => {
    const { value } = e.target;
    setValue(name, value, { shouldValidate: true });
    setChange(e);
  };

  const handleInputFocus = () => {
    clearErrors(name);
  };

  return (
    <div
      className={`relative flex flex-col items-start justify-start w-full ${
        errors[name] ? "mb-8" : "mb-4"
      } h-fit bg-primary isolate`}
    >
      <label htmlFor={name} className="text-white ">
        {label}
      </label>
      <input
        type={type}
        id={name}
        value={val}
        name={name}
        placeholder={placeholder}
        {...register(name, { validate: () => validateInput(val, label, type) })}
        onChange={handleInputChange}
        onFocus={handleInputFocus}
        className={`w-full p-2 mt-1 z-1 text-white bg-primary ring-1 outline-none rounded  ${
          errors[name] ? " ring-red-500" : "ring-white"
        }`}
      />

      <span
        className={`text-red-500 z-[-1] absolute w-full left-0 transition-all ease-in-out duration-[0.3s] ${
          errors[name] ? "-bottom-8" : "bottom-[.5rem]"
        } `}
      >
        {errors[name] && errors[name].message}
      </span>
    </div>
  );
};

export default FormInput;
