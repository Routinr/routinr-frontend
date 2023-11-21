import React from 'react'
import DashboardLayout from '../layout/DashboardLayout'
import Topbar from './Topbar';
import {Link} from 'react-router-dom';
// import avather from "../../assets/icons/avather.png";

// css styling
import "../../css/App.css"

function NewTaskPage() {
  return (
    <DashboardLayout>
      <div className="dashboard-cont h-[90vh] md:bg-white md:shadow-2xl md:rounded-2xl md:bg-opacity-5 w-full md:w-[80%] md:p-5 z-20 border-[0px] md:border-[1px] border-white border-opacity-10 overflow-scroll">
        <div className="w-full flex justify-center flex-col border-b-[1px] border-solid border-b-blue-400">
        <Topbar/>

        <div className='block my-4 mx-auto w-[70%] border-[1px] border-solid rounded-md'>
               <Link></Link> 
               <Link></Link> 
               <Link></Link> 
        </div>
        </div>

        <div className='w-full p-3'>
            
        </div>
      </div>
    </DashboardLayout>
  )
}

export default NewTaskPage
