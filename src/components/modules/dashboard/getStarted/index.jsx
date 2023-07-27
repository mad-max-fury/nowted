import React from "react";
import { HiSparkles } from "react-icons/hi";
import { TbTableImport } from "react-icons/tb";
import { FaPlay } from "react-icons/fa";
import SnowEffect from "../../../common/animations/snowflakes";
const GetStarted = ({ handleOpenModal }) => {
  return (
    <div className="flex flex-col gap-4  mt-[15%]">
      <h1 className="text-white text-[clamp(1rem,4vw,1.5rem)] font-bold">
        Get Started
      </h1>
      <div className="flex gap-4">
        <GetStartedComponent
          gradientColorFrom="from-[#3ca0fd]"
          gradientColorTo="to-[#b765fa]"
          heading={"Create New Note"}
          subHeading={"don't keep it on your mind"}
          showSnowEffect
          fn={handleOpenModal}
        >
          <HiSparkles size={24} />
        </GetStartedComponent>
        <GetStartedComponent
          gradientColorFrom="from-[#8741f7]"
          gradientColorTo="to-[#fc7a7a]"
          heading={"Import Note"}
          subHeading={"import your local notes"}
        >
          <TbTableImport size={24} />
        </GetStartedComponent>
        <GetStartedComponent
          gradientColorFrom="from-[#fa9fc6]"
          gradientColorTo="to-[#f7b51e]"
          heading={"Turn on tune"}
          subHeading={"turn on tune compassion"}
        >
          <FaPlay size={24} />
        </GetStartedComponent>
      </div>
    </div>
  );
};

export default GetStarted;

const GetStartedComponent = ({
  gradientColorFrom,
  gradientColorTo,
  heading,
  subHeading,
  children,
  showSnowEffect,
  fn,
}) => {
  const gradientStyle = `bg-gradient-to-br ${gradientColorFrom} ${gradientColorTo}`;
  return (
    <div
      className={`h-[200px] overflow-hidden relative  rounded-[16px] w-[33%] flex flex-col justify-between transition-all duration-400 cursor-pointer p-4 ${gradientStyle} hover:-translate-y-2 hover:scale-[1.03]`}
      onClick={fn ? () => fn() : () => null}
    >
      {showSnowEffect && (
        <div className="absolute top-[-0%] right-[-90%] z-[1] w-full h-full pointer-events-none">
          <SnowEffect />
        </div>
      )}
      <div className="z-20 flex flex-col justify-between w-full h-full bg-transparent">
        <div className="relative rounded-xl  h-[50px] w-[50px] shadow-lg bg-[rgba(255,255,255,0.2)] text-white flex items-center justify-center">
          {children}
        </div>
        <div>
          <h4 className="text-xl font-semibold text-white leading-0 text-shadow-lg">
            {heading}
          </h4>
          <small className="text-sm font-medium text-[rgba(255,255,255,0.7)] text-shadow-md">
            {subHeading}
          </small>
        </div>
      </div>
    </div>
  );
};
