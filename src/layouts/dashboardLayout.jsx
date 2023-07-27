import React, { useRef } from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../components/modules/dashboard/sideBar";
import GetStarted from "../components/modules/dashboard/getStarted";
import SecondarySearch from "../components/modules/dashboard/search/secondarySearch";
const DashboardLayout = () => {
  const createNoteRef = useRef({});

  const handleOpenModal = () => {
    createNoteRef.current.openModal();
  };
  return (
    <div className="flex w-full">
      <SideBar
        handleOpenModal={handleOpenModal}
        createNoteRef={createNoteRef}
      />

      <div className=" w-full  max-w-[768px] mx-auto ">
        <GetStarted handleOpenModal={handleOpenModal} />
        <div className="w-full min-h-screen mt-[80px]">
          <div className="sticky top-0 w-full pb-8 pt-4 h-[160px] bg-primary">
            <SecondarySearch handleOpenModal={handleOpenModal} />
          </div>
          <div className="w-full h-fit ">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
