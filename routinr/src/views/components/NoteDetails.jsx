import React from "react";
import { IoIosArrowBack } from "react-icons/io";

const NoteDetails = ({ note, onClose }) => {
  return (
    <div className="text-white fixed top-0 h-[100vh] md:h-[200vh] lg:h-[120vh] xl:h-[200vh] bg-[#031A3E] md:shadow-2xl md:rounded-2xl  w-full md:w-[80%] md:p-5 z-20 border-[0px] md:border-[1px] border-white border-opacity-10 p-0 z-30 ">
      <div className="flex items-center mb-4">
        <IoIosArrowBack
          className=" text-[30px] cursor-pointer"
          onClick={onClose}
        />
      </div>

      <h2 className="text-[18px] font-bold">{note.heading}</h2>
      <p className="text-[15px]">{note.description}</p>
    </div>
  );
};

export default NoteDetails;
