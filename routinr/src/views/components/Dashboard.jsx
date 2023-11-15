import React from "react";
import DashboardLayout from "../layout/DashboardLayout";
import water from "../../assets/icons/water.png";
import "../../css/App.css"
import Topbar from "./Topbar";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="dashboard-cont h-[90vh] md:bg-white md:shadow-2xl md:rounded-2xl md:bg-opacity-5 w-full md:w-[80%] md:p-5  z-20 border-[0px] md:border-[1px] border-white border-opacity-10 overflow-scroll">
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
        <h1 className="mt-5 text-white font-bold">Morning Routine</h1>
        <div className="md:w-[400px] lg:w-[500px] w-full h-[300px] border-white border-[1px] rounded-md p-5 mt-5">
          <div className="flex justify-between items-center">
            <div className="rounded-md w-[200px] md:w-[400px] bg-gray-600 text-white p-2">
              <li>Go For A 10 Mins Jog</li>
            </div>
            <div className="w-[40px] h-[40px] bg-gray-600 rounded-md"></div>
          </div>
          <div className="flex justify-between items-center pt-3">
            <div className="rounded-md w-[200px] md:w-[400px] bg-gray-600 text-white p-2">
              <li>Use Your Sunscreen</li>
            </div>
            <div className="w-[40px] h-[40px] bg-gray-600 rounded-md"></div>
          </div>
          <div className="flex justify-between items-center pt-3">
            <div className="rounded-md w-[200px] md:w-[400px] bg-gray-600 text-white p-2">
              <li>Your Slim Waist Pilates</li>
            </div>
            <div className="w-[40px] h-[40px] bg-gray-600 rounded-md"></div>
          </div>
          <div className="flex justify-between items-center pt-3">
            <div className="rounded-md w-[200px] md:w-[400px] bg-gray-600 text-white p-2">
              <li>Cook Your Breakfast</li>
            </div>
            <div className="w-[40px] h-[40px] bg-gray-600 rounded-md"></div>
          </div>
          <div className="flex justify-between items-center pt-3">
            <div className="rounded-md w-[200px] md:w-[400px] bg-gray-600 text-white p-2">
              <li>Feed Your Pet</li>
            </div>
            <div className="w-[40px] h-[40px] bg-gray-600 rounded-md"></div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
