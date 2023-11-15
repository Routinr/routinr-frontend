import React from 'react'
import DashboardLayout from '../layout/DashboardLayout'
import Topbar from './Topbar';
import { BsPlusCircle } from 'react-icons/bs';
import { CiClock1 } from "react-icons/ci";

const Tasks = () => {
  return (
    <DashboardLayout>
      <div className="h-fit md:bg-white md:shadow-2xl md:rounded-2xl md:bg-opacity-5 w-full md:w-[80%] md:p-5 z-20 border-[0px] md:border-[1px] border-white border-opacity-10">
        <div className="hidden md:block">
          <Topbar />
        </div>
        <div className="text-white text-lg font-bold mt-2">
          Ready For Today’s Tasks?
          <br /> Let’s Do This!!!
        </div>
        <div className="flex gap-[20px] mt-10">
          <div>
            <h1 className="text-[#56CFE1] text-[13px]">Todo</h1>
            <div className="w-[100px]  md:w-[150px] h-[50px] border-[1px] border-[#56CFE1] border-dashed flex justify-center items-center cursor-pointer md:mt-2 rounded-md">
              <BsPlusCircle className="text-[#56CFE1]" />
            </div>
          </div>
          <div>
            <h1 className="text-[#56CFE1] text-[13px]">In Progress</h1>
            <div className="w-[100px]  md:w-[150px] h-[50px] border-[1px] border-[#56CFE1] border-dashed flex justify-center items-center cursor-pointer md:mt-2 rounded-md">
              <BsPlusCircle className="text-[#56CFE1]" />
            </div>
          </div>
          <div>
            <h1 className="text-[#56CFE1] text-[13px]">Completed</h1>
            <div className="w-[100px]  md:w-[150px] h-[50px] border-[1px] border-[#56CFE1] border-dashed flex justify-center items-center cursor-pointer md:mt-2 rounded-md">
              <BsPlusCircle className="text-[#56CFE1]" />
            </div>
          </div>
        </div>
        <div className="flex gap-[20px] mt-10">
          <div className="w-[100px]  md:w-[150px] h-fit p-2 md:mt-2 rounded-md bg-gray-600 ">
            <div className="flex justify-between items-center">
              <h1 className="text-black">12 Tasks</h1>
              <div className="h-[10px] w-[10px] rounded-full bg-[#BD6AF7]"></div>
            </div>
            <h1 className="font-bold">Personal</h1>
            <div className="w-full h-[5px] bg-white rounded-md">
              <div className="bg-[#052659] h-[5px] w-[80px]"></div>
            </div>
          </div>
          <div className="w-[100px]  md:w-[150px] h-fit p-2 md:mt-2 rounded-md bg-gray-600 ">
            <div className="flex justify-between items-center">
              <h1 className="text-black">4 Tasks</h1>
              <div className="h-[10px] w-[10px] rounded-full bg-[#FBC02D]"></div>
            </div>
            <h1 className="font-bold">Work</h1>
            <div className="w-full h-[5px] bg-white rounded-md">
              <div className="bg-[#052659] h-[5px] w-[80px]"></div>
            </div>
          </div>
          <div className="w-[100px]  md:w-[150px] h-fit p-2 md:mt-2 rounded-md bg-gray-600 ">
            <div className="flex justify-between items-center">
              <h1 className="text-black">17 Tasks</h1>
              <div className="h-[10px] w-[10px] rounded-full bg-[#7CB342]"></div>
            </div>
            <h1 className="font-bold">Family</h1>
            <div className="w-full h-[5px] bg-white rounded-md">
              <div className="bg-[#052659] h-[5px] w-[80px]"></div>
            </div>
          </div>
        </div>
        <div className="mt-5 ">
          <h1 className="text-white text-lg font-semibold">TODAY'S TASKS</h1>
          <div className="flex justify-between">
            <div className="text-white">
              <h1 className="mt-5">Priority</h1>
              <div className="w-[100px]  md:w-[150px] h-fit  border-white border-[1px] mt-2 text-center rounded-tl-lg rounded-tr-lg">
                <div className="p-1">
                  <h1>Design For Routinr</h1>
                  <div className="flex items-center justify-center gap-2">
                    <CiClock1 />
                    <p>11:15AM</p>
                  </div>
                </div>

                <div className="h-[2px] w-full bg-[#FBC02D]"></div>
              </div>
              <div className="w-[100px]  md:w-[150px] h-fit  border-white border-[1px] mt-2 text-center rounded-tl-lg rounded-tr-lg">
                <div className="p-1">
                  <h1>Call The Mech</h1>
                  <div className="flex items-center justify-center gap-2">
                    <CiClock1 />
                    <p>11:15AM</p>
                  </div>
                </div>

                <div className="h-[2px] w-full bg-[#6AA139]"></div>
              </div>
              <div className="w-[100px]  md:w-[150px] h-fit  border-white border-[1px] mt-2 text-center rounded-tl-lg rounded-tr-lg">
                <div className="p-1">
                  <h1>Zoom Meeting</h1>
                  <div className="flex items-center justify-center gap-2">
                    <CiClock1 />
                    <p>11:15AM</p>
                  </div>
                </div>
                <div className="h-[2px] w-full bg-[#BD6AF7]"></div>
              </div>
            </div>
            <div className="text-white">
              <h1 className="mt-5">In Progress</h1>
              <div className="w-[100px]  md:w-[150px] h-fit  border-white border-[1px] mt-2 text-center rounded-tl-lg rounded-tr-lg">
                <div className="p-1">
                  <h1>Design For Routinr</h1>
                  <div className="flex items-center justify-center gap-2">
                    <CiClock1 />
                    <p>11:15AM</p>
                  </div>
                </div>
                <div className="h-[2px] w-full bg-[#FBC02D]"></div>
              </div>
              <div className="w-[100px]  md:w-[150px] h-fit  border-white border-[1px] mt-2 text-center rounded-tl-lg rounded-tr-lg">
                <div className="p-1">
                  <h1>Do the Laundry</h1>
                  <div className="flex items-center justify-center gap-2">
                    <CiClock1 />
                    <p>11:15AM</p>
                  </div>
                </div>
                <div className="h-[2px] w-full bg-[#BD6AF7]"></div>
              </div>
            </div>
            <div className="text-white">
              <h1 className="mt-5">Completed</h1>
              <div className="w-[100px]  md:w-[150px] h-fit  border-white border-[1px] mt-2 text-center rounded-tl-lg rounded-tr-lg">
                <div className="p-1">
                  <h1>Design For Routinr</h1>
                  <div className="flex items-center justify-center gap-2">
                    <CiClock1 />
                    <p>11:15AM</p>
                  </div>
                </div>
                <div className="h-[2px] w-full bg-[#FBC02D]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Tasks
