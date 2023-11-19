import React from 'react'
import Navbar from './Navbar'
import homepageicon from "../../assets/images/homepageicon.png";
import Ellipse from "../../assets/icons/Ellipse.png";
import maskcircle from "../../assets/icons/maskcircle.png";
import Ellipse4 from "../../assets/icons/Ellipse4.png";
import Ellipse6 from "../../assets/icons/Ellipse6.png";
import circlee from "../../assets/icons/circlee.png";
import { Link } from 'react-router-dom';

const MainSection = () => {
  return (
    <div>
      <div className="hidden md:absolute">
        <img src={Ellipse4} alt="logo" />
      </div>
      <div className="p-5 bg-white shadow-2xl rounded-2xl bg-clip-padding bg-opacity-5">
        <div className="z-10">
          <Navbar />
        </div>
        <div className="flex md:flex-row flex-col justify-between text-white mt-10 -z-10 ">
          <div className="md:pl-20 z-10">
            <div className="hidden md:absolute top-0 left-52">
              <img src={Ellipse6} alt="ellipse6" />
            </div>

            <div className="hidden md:block md:absolute md:left-11 -z-10">
              <img src={Ellipse} alt="ellipse" />
            </div>
            <h1 className="lg:text-5xl text-3xl font-semibold mt-5 leading-snug ">
              Productivity Has
              <br /> Never Been
              <br /> Easier
            </h1>
            <p className="mt-5 text-[15px] lg:text-[20px]">
              Discover The Easiest Way To Manage Your Time <br /> And Be
              Productive Alongside Collaborating With <br /> Your Teams
            </p>
            <button className="bg-[#386BD9] hover:bg-transparent hover:text-[#386BD9] border-[#386BD9] border-[1px] text-white font-bold py-2 px-4 rounded-tl-lg rounded-br-lg mt-10 mb-10 md:mb-0 md:mt-5">
              <Link to={"/signup"}>Get Started</Link>
            </button>
            <div className="hidden md:block absolute left-[550px] buttom-[50px]">
              <img src={circlee} alt="circle" />
            </div>
          </div>
          <div className="hidden md:block md:z-10">
            <div className="hidden md:block md:absolute md:right-5 lg:right-11 -z-10">
              <img
                className="md:w-[250px] lg:w-[340px] xl:w-full"
                src={maskcircle}
                alt="maskcirle"
              />
            </div>
            <img src={homepageicon} alt="logo" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainSection