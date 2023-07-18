import React from "react";
import { logo } from "../assets";
import { Outlet } from "react-router-dom";

const AuthWrapper = () => {
  return (
    <div className="inline-flex flex-col-reverse items-center justify-start w-full min-h-screen h-fit xsm:flex-row">
      <div className="flex flex-col justify-start mb-auto mt-8 xsm:items-center w-full sm:w-2/4 px-6 max-w-[450px] xsm:m-auto h-fit py-8 ">
        <Outlet />
      </div>
      <div className="flex flex-col items-center justify-center w-full h-[110px] xsm:w-2/4 xsm:h-screen p-bg xsm:rounded-tl-[50px] xsm:rounded-bl-[50px] bg-gradient-to-b from-black to-black sticky xsm:static top-0 z-[2] ">
        <div className="min-w-[120px] w-[30%] mx-auto xsm:m-auto">
          <div className="curvy-underline">
            <img src={logo} alt="logo" className="w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthWrapper;
