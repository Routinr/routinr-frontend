import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import Sidebar from "../components/Sidebar";
import MobileTopbar from "../components/MobileTopbar";
const DashboardLayout = ({children }) => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
   const [isSidebarVisible, setIsSidebarVisible] = useState(true);
   const toggleSidebar = () => {
     if (isMobile) {
       setIsSidebarVisible(!isSidebarVisible);
     }
   };
  return (
    <div>
      {isMobile && (
        <div className="bg-[#031A3E] md:hidden p-5">
          <MobileTopbar toggleSidebar={toggleSidebar} />
        </div>
      )}
      {isSidebarVisible && isMobile && (
        <div className=" w-[20%] h-screen fixed left-0 bg-[#031A3E] z-20">
          <Sidebar />
        </div>
      )}
      <div className="hidden md:block w-[20%] h-screen fixed left-0 bg-[#031A3E] z-20">
          <Sidebar />
        </div>
      <div className="w-full md:w-[80%] fixed md:ml-[20%] bg-[#031A3E] z-10 ">
        <div className="h-screen">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
