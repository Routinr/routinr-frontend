import React from 'react'
import DashboardLayout from '../layout/DashboardLayout';
import Topbar from './Topbar';

const HelpCenter = () => {
  return (
    <DashboardLayout>
      <div className="dashboard-cont h-[90vh] md:bg-white md:shadow-2xl md:rounded-2xl md:bg-opacity-5 w-full md:w-[80%] md:p-5  z-20 border-[0px] md:border-[1px] border-white border-opacity-10 overflow-scroll">
        <div className="hidden md:block">
          <Topbar />
        </div>
        <div className="text-white text-2xl w-full h-[89%] flex justify-center items-center">Page Under Construction</div>
      </div>
    </DashboardLayout>
  );
}

export default HelpCenter