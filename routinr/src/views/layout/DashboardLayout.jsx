import React from "react";
import Topbar from "../components/Topbar";
import Sidebar from "../components/Sidebar";
const DashboardLayout = ({children }) => {
  return (
    <div>
      <div className="w-[20%] h-screen fixed left-0 bg-black">
        <Sidebar />
      </div>
      <div className="w-[80%] ml-[20%] bg-red-700">
        <Topbar />
        <div className="h-[100vh]">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
