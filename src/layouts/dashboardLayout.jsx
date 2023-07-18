import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../components/modules/dashboard/sideBar";
const DashboardLayout = () => {
  return (
    <div className="flex w-full">
      <SideBar />
      <div className="flex w-full min-h-screen">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
