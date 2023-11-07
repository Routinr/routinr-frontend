import React from "react";
import DashboardLayout from "../layout/DashboardLayout";
import Topbar from "./Topbar";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="h-[90vh] bg-white shadow-2xl rounded-2xl bg-opacity-5 w-[80%] p-5 mt-5 ">
        <Topbar />
        <div className="">welcome to dashboard page</div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
