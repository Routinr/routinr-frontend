import React from "react";
import { Link } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import "../../css/App.css";
import avatar from "../../assets/icons/avather.png";

const Settings = () => {
  return (
    <DashboardLayout>
      <div className="dashboard-cont h-[91vh] md:bg-white md:shadow-2xl md:rounded-2xl md:bg-opacity-5 w-full md:w-[80%] md:p-5 z-20 border-[0px] md:border-[1px] border-white border-opacity-10 overflow-scroll">
        <div className="hidden md:block">
          <h2 className="text-white text-xl font-semibold py-5">Settings</h2>
        </div>
        <div className="w-full flex items-center justify-between flex-col lg:flex-row">
          <div className="flex items-center justify-center flex-col w-[90%] mb-3 md:mt-3 lg:w-[30%] border-none md:border-[2px] lg:border-[2px] md:border-solid lg:border-solid border-blue-400 p-5 rounded-md shadow-sm shadow-blue-100">
            <img 
            src={avatar} 
            alt="" 
            className="w-[50%] h-[50%]" 
            />

            <p className="text-white font-semibold text-lg mt-">
              Alex BlurryFace
            </p>
            <p className="text-[#994141] font-medium text-base mt-1">
              profile
            </p>
          </div>
          <div className="w-full mt-7 lg:mt-0 lg:w-[65%] border-[1px] border-solid border-blue-400 p-3 rounded-md">
            <ul className="flex justify-center items-start flex-col p-3 w-full">
            <li className="p-3 border-solid border-b-blue-400 border-b-[1px] w-full text-white font-medium text-lg hover:text-blue-500">
                  About
              </li>

              <li className="p-3 border-solid border-b-blue-400 border-b-[1px] w-full text-white font-medium text-lg hover:text-blue-500">
                  <Link to={"/dashboard"}>Routines</Link>
              </li>
              <li className="p-3 border-solid border-b-blue-400 border-b-[1px] w-full text-white font-medium text-lg hover:text-blue-500">
                  Contact Support
              </li>
              
              <li className="p-3 border-solid w-full text-white font-medium text-lg hover:text-blue-500">
                  <Link to={"/signup"}>Log Out</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Settings;
