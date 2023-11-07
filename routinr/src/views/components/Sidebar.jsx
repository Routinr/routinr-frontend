import React from "react";
import dashboadlogo from "../../assets/icons/dashboardlogo.png";
import task from "../../assets/icons/task.png";
import noote from "../../assets/icons/noote.png";
import settings from "../../assets/icons/setting.png";
import heelp from "../../assets/icons/heelp.png";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="mt-5 ml-5 h-[600px] text-white p-5 bg-white shadow-2xl rounded-2xl bg-opacity-5 w-[200px]">
      <div>
        <img className="md:w-[120px]" src={dashboadlogo} alt="dashboard_logo" />
      </div>
      <div className="mt-7 flex gap-3 items-center py-2 px-4 border-white border-[1px] rounded-lg cursor-pointer hover:bg-[#A0C4E2]">
        <img className="w-[20px] h-[20px]" src={task} alt="task" />
        <Link to={"/dashboard"}>
          <h1 className="text-md">Dashboard</h1>
        </Link>
      </div>
      <div className="mt-5 flex gap-3 items-center py-2 px-4 border-white border-[1px] rounded-lg cursor-pointer hover:bg-[#A0C4E2]">
        <img className="w-[20px] h-[20px]" src={task} alt="task" />
        <Link to={"/tasks"}>
          <h1 className="text-md">Tasks</h1>
        </Link>
      </div>
      <div className="mt-5 flex gap-3 items-center py-2 px-4 border-white border-[1px] rounded-lg cursor-pointer hover:bg-[#A0C4E2]">
        <img className="w-[20px] h-[20px]" src={noote} alt="task" />
        <Link to={"/notes"}>
          <h1 className="text-md">Notes</h1>
        </Link>
      </div>
      <div className="flex gap-3 items-center py-2 px-4 border-white border-[1px] rounded-lg cursor-pointer hover:bg-[#A0C4E2] mt-20">
        <img className="w-[20px] h-[20px]" src={settings} alt="task" />
        <Link to={"/sethings"}>
          <h1 className="text-md">Sethings</h1>
        </Link>
      </div>
      <div className="mt-5 flex gap-3 items-center py-2 px-4 border-white border-[1px] rounded-lg cursor-pointer hover:bg-[#A0C4E2]">
        <img className="w-[20px] h-[20px]" src={heelp} alt="task" />
        <Link to={"/helpcenter"}>
          <h1 className="text-md">Help Center</h1>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
