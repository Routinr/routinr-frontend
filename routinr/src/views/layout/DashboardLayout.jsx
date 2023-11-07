import React from "react";
import Sidebar from "../components/Sidebar";
const DashboardLayout = ({children }) => {
  return (
    <div>
      <div className="w-[20%] h-screen fixed left-0 bg-[#031A3E]">
        <Sidebar />
      </div>
      <div className="w-[80%] fixed ml-[20%] bg-[#031A3E] ">
        <div className="h-screen">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
