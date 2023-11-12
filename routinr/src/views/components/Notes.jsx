import React from 'react'
import DashboardLayout from '../layout/DashboardLayout';
import Topbar from './Topbar';
import { AiOutlineSearch } from "react-icons/ai";
import { IoIosArrowBack } from "react-icons/io";
import { BsPlusCircle } from 'react-icons/bs';
import { useState } from 'react';
import NoteDetails from './NoteDetails';

const Notes = () => {
  const [selectedNote, setSelectedNote] = useState(null);

  const data = [
    {
      id: 1,
      heading: "Funny Day At The Mall",
      description:
        "Lorem ipsum dolor sit amet consectetur. Sapien est adipiscing odio ullamcorper faucibus aliquam. Hac urna nibh mi vitae",
    },
    {
      id: 2,
      heading: "Bucket List For New Year",
      description:
        "Lorem ipsum dolor sit amet consectetur. Sapien est adipiscing odio ullamcorper faucibus aliquam. Hac urna nibh mi vitae",
    },
    {
      id: 3,
      heading: "Birthday Wishlist",
      description:
        "Lorem ipsum dolor sit amet consectetur. Sapien est adipiscing odio ullamcorper faucibus aliquam. Hac urna nibh mi vitae",
    },
    {
      id: 4,
      heading: "1st Day At Therapy",
      description:
        "Lorem ipsum dolor sit amet consectetur. Sapien est adipiscing odio ullamcorper faucibus aliquam. Hac urna nibh mi vitae",
    },
    {
      id: 5,
      heading: "Date With Yarden",
      description:
        "Lorem ipsum dolor sit amet consectetur. Sapien est adipiscing odio ullamcorper faucibus aliquam. Hac urna nibh mi vitae",
    },
    {
      id: 6,
      heading: "Terax’s vet. Appointment",
      description:
        "Lorem ipsum dolor sit amet consectetur. Sapien est adipiscing odio ullamcorper faucibus aliquam. Hac urna nibh mi vitae",
    },
   
  ];

  const handleNoteClick = (id) => {
    setSelectedNote(id);
  };
   const handleBackClick = () => {
     setSelectedNote(null);
   };

  return (
    <DashboardLayout>
      <div className="h-[100vh] md:h-[200vh] lg:h-[120vh] xl:h-[200vh] md:bg-white md:shadow-2xl md:rounded-2xl md:bg-opacity-5 w-full md:w-[80%] md:p-5 z-20 border-[0px] md:border-[1px] border-white border-opacity-10 z-20 ">
        <div className="hidden md:block">
          <Topbar />
        </div>
        <div className="flex justify-between">
          <div className="text-white text-lg font-bold mt-2">
            Notes Are Reminders,
            <br /> Check Them Out.
          </div>
          <div>
            <div>
              <h1 className="text-[#56CFE1] text-[13px]">New Notes</h1>
              <div className="w-[80px] h-[40px] md:w-[100px] md:h-[40px] border-[1px] border-[#56CFE1] border-dashed flex justify-center items-center cursor-pointer md:mt-2">
                <BsPlusCircle className="text-[#56CFE1]" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-5 w-full border-[1px] border-white p-2 rounded-md mt-10">
          <div>
            <AiOutlineSearch className="text-white text-[20px]" />
          </div>
          <input
            className="w-full bg-transparent"
            type="text"
            placeholder="Search Notes"
          />
        </div>
        <div className="flex flex-wrap gap-3  md:gap-5 justify-between text-white mt-20 ">
          {data.map((item) => (
            <div
              className={`border-[1px] border-white p-2 w-[150px] md:w-[300px] lg:w-[200px] rounded-md cursor-pointer ${
                selectedNote === item.id ? "bg-gray-500" : ""
              }`}
              key={item.id}
              onClick={() => handleNoteClick(item.id)}
            >
              <h2 className="text-[14px] md:text-[18px]">{item.heading}</h2>
              <p className="text-[13px] md:text-[15px] mt-2">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        {selectedNote && (
          <NoteDetails
            note={data.find((item) => item.id === selectedNote)}
            onClose={handleBackClick}
          />
        )}
      </div>
    </DashboardLayout>
  );
}

export default Notes