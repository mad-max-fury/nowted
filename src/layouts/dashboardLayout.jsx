import React, { useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import SideBar from "../components/modules/dashboard/sideBar";
import GetStarted from "../components/modules/dashboard/getStarted";
import SecondarySearch from "../components/modules/dashboard/search/secondarySearch";
const DashboardLayout = () => {
  const createNoteRef = useRef({});
  const loc = useLocation();
  const secHeading = loc.pathname.split("/")[3];
  const result =
    loc.pathname.split("/")[2] === undefined
      ? "Recents"
      : loc.pathname.split("/")[2];
  const heading = result.charAt(0).toUpperCase() + result.slice(1);
  const handleOpenModal = () => {
    createNoteRef.current.openModal();
  };
  return (
    <div className="flex w-full ">
      <SideBar
        handleOpenModal={handleOpenModal}
        createNoteRef={createNoteRef}
      />

      <div className=" w-full  max-w-[768px] mx-auto ">
        {heading !== "Settings" && (
          <GetStarted handleOpenModal={handleOpenModal} />
        )}
        <div className="w-full min-h-screen mt-[80px]">
          {heading !== "Settings" && (
            <div className="sticky top-0 w-full pb-8 pt-4 h-[160px]  bg-primary">
              <SecondarySearch
                heading={heading}
                secHeading={secHeading}
                handleOpenModal={handleOpenModal}
              />
            </div>
          )}
          <div className="w-full h-fit ">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
