import React from 'react'
import bubble from "../../assets/icons/bubble.png";
import shape from "../../assets/icons/shape.png";
import left from "../../assets/icons/left.png";
import right from "../../assets/icons/right.png";
const CardsSection = () => {
  return (
    <div className="flex justify-between items-center md:flex-row flex-col">
      <img
        className="absolute hidden md:block lg:w-[300px] md:w-[250px] left-0 lg:top-[1500px] top[500px] z-20"
        src={left}
        alt="left_shape"
      />
      <div className="flex flex-col md:bg-[#031A3E] justify-center items-center text-center border-[1px] border-[rgb(189,106,247)] text-white md:p-5 lg:p-8 rounded-lg z-30 md:w-[400px] w-[250px]">
        <img className="w-[100px] mt-5 md:mt-0" src={shape} alt="shape" />
        <h2 className="mt-6 font-bold text-2xl">My Tasks</h2>
        <p className="mt-5 text-md font-semibold text-[14px] md:text-[20px]">
          Easily Balance Your Work, Life And
          <br /> Everything In Between
        </p>
      </div>

      <div className="flex flex-col md:bg-[#031A3E] justify-center mt-10 md:mt-0 items-center text-center border-[1px] border-[#BD6AF7] text-white md:p-5 lg:p-8 rounded-lg z-30 md:w-[400px] w-[250px]">
        <img
          className="w-[100px] mt-5 md:mt-0 "
          src={bubble}
          alt="bubble shape"
        />
        <h2 className="mt-6 font-bold text-2xl">My Team Tasks</h2>
        <p className="mt-5 text-md font-semibold text-[14px] md:text-[20px]">
          Where You And Your Team Can
          <br /> Chat And Still Get The Job Done
        </p>
      </div>
      <img
        className="absolute hidden md:block lg:w-[280px] md:w-[250px]  right-0 lg:top-[1600px] z-20"
        src={right}
        alt="right_shape"
      />
    </div>
  );
}

export default CardsSection