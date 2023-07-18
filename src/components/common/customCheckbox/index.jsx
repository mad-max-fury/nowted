import React from "react";
import { useFormContext } from "react-hook-form";

const CustomCheckbox = ({ name, label }) => {
  const { register } = useFormContext();
  return (
    <>
      <label
        htmlFor={name}
        className="flex items-center space-x-2 cursor-pointer"
      >
        <input
          name={name}
          id={name}
          type="checkbox"
          {...register(name)}
          className="rounded-md h-[15px] w-[15px] form-checkbox text-tert focus:ring-tert"
        />
        <span className="text-slate-100">{label}</span>
      </label>
    </>
  );
};

export default CustomCheckbox;
