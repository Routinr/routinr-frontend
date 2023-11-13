import React from "react";
import { IoIosArrowBack } from "react-icons/io";

const NoteDetails = ({ note, onClose }) => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="text-white  bg-[#031A3E] md:shadow-2xl md:rounded-2xl w-full md:w-[70%] md:ml-[30%] h-screen md:p-5 z-20 border-[0px] md:border-[1px] border-white border-opacity-10 p-8 z-60 ">
        <div className="">
          <div className="flex items-center mb-4">
            <IoIosArrowBack
              className=" text-[30px] cursor-pointer"
              onClick={onClose}
            />
          </div>

          <h2 className="text-[18px] font-bold">{note.heading}</h2>
          <p className="text-[15px] mt-5">{note.description}</p>
        </div>
      </div>
    </div>
  );
};

export default NoteDetails;
