import React from "react";
import CButton from "../button";
import { restore } from "../../../assets";
const EmptyState = () => {
  return (
    <div className="mx-auto flex h-screen w-full max-w-[790px] flex-col items-center justify-center bg-[#181818]">
      <div className="flex flex-col items-center justify-center m-auto">
        <picture className="h-[80px] w-[80px]">
          <img src={restore} />
        </picture>
        <h3 className=" mt-[10px] text-[clamp(20px,_5vw,_28px)] font-semibold leading-9 text-white">
          Restore “Reflection on the Month of June”
        </h3>
        <p className=" trext-base mt-[10px] max-w-[460px] text-center font-normal leading-[26px] text-[rgba(255,_255,_255,_0.6)]">
          Choose a note from the list on the left to view its contents, or
          create a new note to add to your collection.
        </p>
        <span className="mx-auto mt-[10px]">
          <CButton text={"Restore"} />
        </span>
      </div>
    </div>
  );
};

export default EmptyState;
