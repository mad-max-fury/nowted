import React from "react";
import CButton from "../../../../common/button";
import { restore } from "../../../../../assets";
const MiniEmptyState = () => {
  return (
    <div className="mx-auto flex min-h-[250px] w-full flex-col items-center justify-center bg-[#181818]">
      <div className="flex flex-col items-center justify-center m-auto">
        <picture className="h-[50px] w-[50px]">
          <img src={restore} />
        </picture>
        <p className=" trext-base mt-[10px] max-w-[460px] text-center font-normal leading-[26px] text-[rgba(255,_255,_255,_0.6)]">
          you haven't created any note yet
        </p>
        <span className="mx-auto mt-[10px]">
          <CButton text={"Restore"} />
        </span>
      </div>
    </div>
  );
};

export default MiniEmptyState;
