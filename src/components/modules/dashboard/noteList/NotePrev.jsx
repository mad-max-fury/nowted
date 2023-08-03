import React, { useRef } from "react";
import ViewNote from "../viewNote";

const NotePrev = ({ active, callback }) => {
  const viewNoteRef = useRef({});

  const handleOpenModal = () => {
    viewNoteRef.current.openModal();
  };
  return (
    <>
      <div
        onClick={() => {
          callback();
          handleOpenModal();
        }}
        className={`flex h-fit w-full cursor-pointer flex-col items-start gap-[10px] rounded p-[20px] transition-all duration-300 ease-in-out 
        hover:bg-[rgba(255,_255,_255,_0.1)]
        bg-[rgba(255,_255,_255,_0.03)]
        `}
      >
        <h3 className=" text-[18px] font-semibold leading-7 text-white">
          My Goals for the Next Year
        </h3>
        <div className="flex flex-wrap-reverse items-center justify-between gap-3">
          <small className=" text-base font-normal text-[rgba(255,_255,_255,_0.4)] ">
            31/12/2022
          </small>
          <small className=" text-base font-normal text-[rgba(255,_255,_255,_0.4)]">
            As the year comes to a ...
          </small>
        </div>
      </div>
      <ViewNote ref={viewNoteRef} />
    </>
  );
};

export default NotePrev;
