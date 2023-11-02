import React from "react"
import harmbugger from "../../assets/icons/menu.png";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
    return (
      <div className="flex justify-between">
        <div>
          <img className="w-[70px] md:w-full" src={logo} alt="logo" />
        </div>
        <div className="flex gap-[30px]">
          {menuOpen ? (
            <div className="flex flex-col absolute top-44 right-10 w-[200px] p-5 bg-[#386BD9] gap-2 z-30">
              <button className="bg-transparent text-white font-bold py-1 px-4 rounded-tl-lg rounded-br-lg">
                <Link to={"/"}>Home</Link>
              </button>
              <button className="bg-transparent text-white font-bold py-1 px-4 rounded-tl-lg rounded-br-lg">
                <Link to={"/"}>Resources</Link>
              </button>
              <button className="bg-transparent text-white font-bold py-1 px-4 rounded-tl-lg rounded-br-lg">
                <Link to={"/"}>About</Link>
              </button>
              <button className="bg-transparent border-[#386BD9] border text-white font-bold py-1 px-4 rounded-tl-lg rounded-br-lg">
                <Link to={"/login"}>Login</Link>
              </button>
              <button className="bg-[#386BD9] text-white font-bold py-1 px-4 rounded-tl-lg rounded-br-lg">
                <Link to={"/signup"}>Sign Up</Link>
              </button>
            </div>
          ) : (
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
              <button className="bg-transparent border-[#386BD9] border text-white font-bold py-1 px-4 rounded-tl-lg rounded-br-lg">
                <Link to={"/login"}>Login</Link>
              </button>
              <button className="bg-[#386BD9] text-white font-bold py-1 px-4 rounded-tl-lg rounded-br-lg">
                <Link to={"/signup"}>Sign Up</Link>
              </button>
            </div>
          )}
        </div>
        <div className="md:hidden">
          <img
            className="w-[35px]"
            src={harmbugger}
            width={40}
            alt="menu-icon"
            onClick={() => setMenuOpen(!menuOpen)}
          />
        </div>
      </div>
    );
}

export default Navbar