import React, { useRef } from "react";
import { IoFolderOutline } from "react-icons/io5";

const FolderPrev = ({ active, callback }) => {
  return (
    <>
      <div
        onClick={() => {
          callback();
        }}
        className={`flex h-fit w-full cursor-pointer flex-col items-start gap-[10px] rounded p-[20px] transition-all duration-300 ease-in-out 
        hover:bg-[rgba(255,_255,_255,_0.1)]
        bg-[rgba(255,_255,_255,_0.03)]
        `}
      >
        <div className="flex items-center gap-3">
          <IoFolderOutline size={24} color="white" />{" "}
          {/* Replace this with your folder icon */}
          <h3 className="text-[18px] font-semibold leading-7 text-white">
            Personal
          </h3>
        </div>
        <div className="flex flex-wrap-reverse items-center justify-between gap-3">
          <small className="text-base font-normal text-[rgba(255,_255,_255,_0.4)]">
            31/12/2022
          </small>
          <small className="text-base font-normal text-[rgba(255,_255,_255,_0.4)]">
            As the year comes to a ...
          </small>
        </div>
      </div>
    </>
  );
};

export default FolderPrev;
