import React from "react";
import dashboadlogo from "../../assets/icons/dashboardlogo.png";
import task from "../../assets/icons/task.png";
import tak from "../../assets/icons/tak.png";
import noote from "../../assets/icons/noote.png";
import settings from "../../assets/icons/setting.png";
import heelp from "../../assets/icons/heelp.png";
import { Link } from "react-router-dom";
import { MdSpaceDashboard } from "react-icons/md";
import { BiTask } from "react-icons/bi";
import { CgNotes } from "react-icons/cg";
import { AiOutlineSetting } from "react-icons/ai";
import { BiHelpCircle } from "react-icons/bi";


const Sidebar = () => {
  return (
    <div className="mt-5 ml-5 h-[600px] text-white p-5 bg-white shadow-2xl rounded-2xl bg-opacity-5 w-[200px]">
      <div>
        <img className="md:w-[120px]" src={dashboadlogo} alt="dashboard_logo" />
      </div>
      <div className="mt-7 flex gap-3 items-center py-2 px-4 border-white border-[1px] rounded-lg cursor-pointer hover:bg-[#386BD9] hover:border-[#386BD9]">
        <MdSpaceDashboard
          size={25}
          className="hover:text-blue-500 text-white cursor-pointer hover:text-white "
        />
        <Link to={"/dashboard"}>
          <h1 className="text-md">Dashboard</h1>
        </Link>
      </div>
      <div className="mt-5 flex gap-3 items-center py-2 px-4 border-white border-[1px] rounded-lg cursor-pointer hover:bg-[#386BD9] hover:border-[#386BD9]">
        <BiTask
          size={25}
          className="hover:text-blue-500 text-white cursor-pointer hover:text-white "
        />
        <Link to={"/tasks"}>
          <h1 className="text-md">Tasks</h1>
        </Link>
      </div>
      <div className="mt-5 flex gap-3 items-center py-2 px-4 border-white border-[1px] rounded-lg cursor-pointer hover:bg-[#386BD9] hover:border-[#386BD9]">
        <CgNotes
          size={25}
          className="hover:text-blue-500 text-white cursor-pointer hover:text-white "
        />
        <Link to={"/notes"}>
          <h1 className="text-md">Notes</h1>
        </Link>
      </div>
      <div className="flex gap-3 items-center py-2 px-4 border-white border-[1px] rounded-lg cursor-pointer hover:bg-[#386BD9] hover:border-[#386BD9] mt-20">
        <AiOutlineSetting
          size={25}
          className="hover:text-blue-500 text-white cursor-pointer hover:text-white "
        />
        <Link to={"/settings"}>
          <h1 className="text-md">Settings</h1>
        </Link>
      </div>
      <div className="mt-5 flex gap-3 items-center py-2 px-4 border-white border-[1px] rounded-lg cursor-pointer hover:bg-[#386BD9] hover:border-[#386BD9]">
        <BiHelpCircle
          size={25}
          className="hover:text-blue-500 text-white cursor-pointer hover:text-white "
        />
        <Link to={"/helpcenter"}>
          <h1 className="text-md">Help Center</h1>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
