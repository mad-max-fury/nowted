import React from "react";

const NotePrev = ({ active, callback }) => {
  return (
    <div
      onClick={callback}
      className={`flex h-fit w-full cursor-pointer flex-col items-start gap-[10px] rounded p-[20px] transition-all duration-300 ease-in-out ${
        active
          ? "bg-[rgba(255,_255,_255,_0.1)]"
          : "bg-[rgba(255,_255,_255,_0.03)]"
      } `}
    >
      <h3 className=" text-[18px] font-semibold leading-7 text-white">
        My Goals for the Next Year
      </h3>
      <div className="flex items-center justify-between gap-3 flex-wrap-reverse">
        <small className=" text-base font-normal text-[rgba(255,_255,_255,_0.4)] ">
          31/12/2022
        </small>
        <small className=" text-base font-normal text-[rgba(255,_255,_255,_0.4)]">
          As the year comes to a ...
        </small>
      </div>
    </div>
  );
};

export default NotePrev;
