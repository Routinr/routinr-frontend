import React from "react";
import DashboardLayout from "../layout/DashboardLayout";
import water from "../../assets/icons/water.png";
import Topbar from "./Topbar";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="h-[100vh] md:bg-white md:shadow-2xl md:rounded-2xl md:bg-opacity-5 w-full md:w-[80%] md:p-5  z-20 border-[0px] md:border-[1px] border-white border-opacity-10">
        <div className="hidden md:block">
          <Topbar />
        </div>
        <div className="flex items-center gap-3 ">
          <h1 className="text-white text-md md:text-lg font-bold mt-2">
            It’s A Beautiful Morning, Taken
            <br /> Your Glass Of Water Today?
          </h1>
          <img
            className="w-[50px] h-[50px]"
            src={water}
            alt="water glass cup"
          />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
