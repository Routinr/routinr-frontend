import React from "react";
import harmbugger from "../../assets/icons/menu.png";
// import logo from "../../assets/images/logo.png";
import dashboardlogo from "../../assets/icons/dashboardlogo.png";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isNavbarNotVisible, setIsNavbarNotVisible] = useState(true);

  const toggleNavbar = () => {
    setIsNavbarNotVisible(!isNavbarNotVisible);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 760);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  return (
    <div className="flex justify-between">
      <div>
        <img
          className="md:hidden w-[70px] md:w-full"
          src={dashboardlogo}
          alt="logo"
        />
        <img
          className="hidden md:block w-[70px] md:w-full"
          src={dashboardlogo}
          alt="logo"
        />
      </div>
      <div className="flex gap-[30px]">
        {isMobile && (
          <div
            className={`flex flex-col absolute top-44 right-10 w-[200px] p-5 bg-[#386BD9] gap-2 z-30  rounded-2xl ${
              isNavbarNotVisible ? "hidden" : ""
            }`}
          >
            <button className="bg-transparent text-white font-bold py-1 px-4 rounded-tl-lg rounded-br-lg">
              <Link to={"/"}>Home</Link>
            </button>
            <button className="bg-transparent text-white font-bold py-1 px-4 rounded-tl-lg rounded-br-lg">
              <Link to={"/"}>Resources</Link>
            </button>
            <button className="bg-transparent text-white font-bold py-1 px-4 rounded-tl-lg rounded-br-lg">
              <Link to={"/"}>About</Link>
            </button>
            <button className="bg-transparent underline text-white hover:text-purple-500 font-bold py-1 px-4 rounded-tl-lg rounded-br-lg">
              <Link to={"/login"}>Login</Link>
            </button>
            <button className="bg-[#386BD9] hover:bg-transparent border-[1px] border-[#386BD9] cursor-pointer text-white font-bold py-1 px-4 rounded-tl-lg rounded-br-lg">
              <Link to={"/signup"}>Sign Up</Link>
            </button>
          </div>
        )}
        {!isMobile && (
          <div className="hidden md:flex gap-[30px]">
            <button className="bg-transparent text-white font-bold py-1 px-4 rounded-tl-lg rounded-br-lg">
              <Link to={"/"}>Home</Link>
            </button>
            <button className="bg-transparent text-white font-bold py-1 px-4 rounded-tl-lg rounded-br-lg">
              <Link to={"/"}>Resources</Link>
            </button>
            <button className="bg-transparent text-white font-bold py-1 px-4 rounded-tl-lg rounded-br-lg">
              <Link to={"/"}>About</Link>
            </button>
            <button className="bg-transparent underline text-[#386BD9] hover:text-purple-500  font-bold py-1 px-4 rounded-tl-lg rounded-br-lg">
              <Link to={"/login"}>Login</Link>
            </button>
            <button>
              <Link
                className="bg-[#386BD9] hover:bg-transparent border-[1px] border-[#386BD9] hover:text-[#386BD9] cursor-pointer text-white font-bold py-1 px-4 rounded-tl-lg rounded-br-lg"
                to={"/signup"}
              >
                Sign Up
              </Link>
            </button>
          </div>
        )}
      </div>
      <div className="md:hidden cursor-pointer" onClick={toggleNavbar}>
        <img className="w-[35px]" src={harmbugger} width={40} alt="menu-icon" />
      </div>
    </div>
  );
};

export default Navbar;
