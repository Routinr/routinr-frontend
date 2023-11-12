import React from 'react'
import DashboardLayout from '../layout/DashboardLayout'
import Topbar from './Topbar';

const Tasks = () => {
  return (
    <DashboardLayout>
      <div className="h-[100vh] md:bg-white md:shadow-2xl md:rounded-2xl md:bg-opacity-5 w-full md:w-[80%] md:p-5 z-20 border-[0px] md:border-[1px] border-white border-opacity-10">
        <div className="hidden md:block">
          <Topbar />
        </div>
        <div className="text-white text-lg font-bold mt-2">
          Ready For Today’s Tasks?<br /> Let’s Do This!!!
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Tasks
