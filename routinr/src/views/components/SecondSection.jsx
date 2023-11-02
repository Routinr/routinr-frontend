import React from 'react'
import finegirl from "../../assets/images/finegirl.png";

const SecondSection = () => {
  return (
    <div>
      <div className="flex md:flex-row flex-col justify-between items-center md:w-[700px] lg:w-[900px] border-[1px] border-[#BD6AF7] text-white p-5 rounded-lg">
        <div>
          <img className="md:w-[120px] lg:w-full" src={finegirl} alt="finegirl" />
        </div>
        <div className="pt-10 md:pt-0">
          <h1 className="lg:text-3xl text-2xl font-bold">
            “The Key To Productivity Is To Rotate Your
            <br /> Avoidance Techniques”
          </h1>
          <p className="mt-3 text-[20px]">Shannon Wheeler</p>
        </div>
      </div>
      
    </div>
  );
}

export default SecondSection
