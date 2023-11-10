import React from 'react'
import { Link } from 'react-router-dom';
import techtitans from "../../assets/icons/techtitans.png";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="pb-[50px] md:pb-[0px]">
      <div className="flex flex-col md:flex-row justify-between text-white p-2 md:p-10">
        <div>
          <h1 className="text-2xl  font-bold">Routinr</h1>
          <h1 className="pt-7 md:pt-10 text-[20px]">
            <Link to={"/"}>Home</Link>
          </h1>
          <h1 className="text-[20px] pt-2 ">
            <Link to={"/"}>Resources</Link>
          </h1>
          <h1 className="text-[20px] pt-2  ">
            <Link to={"/"}>About</Link>
          </h1>
        </div>
        <div className=" ">
          <h1 className="text-2xl  font-bold mt-8 md:mt-0">
            Subscribe To Our Newsletter
          </h1>
          <div className="flex mt-7 md:mt-12 justify-between border-white border-2 w-[250px]  md:w-[320px] py-1 px-1 md:px-3 rounded-tl-xl rounded-br-xl">
            <input
              type="text"
              placeholder="Email"
              className="bg-transparent w-[150px] md:w-full"
            />
            <button className="bg-[#386BD9] text-[15px] md:text-[20px] font-bold py-1 px-2 rounded-tl-lg rounded-br-lg">
              Subscribe
            </button>
          </div>
        </div>
        <div className="mt-8 md:mt-0">
          <img src={techtitans} alt="made with love by tech titans" />
          
          <div className="flex items-center gap-5">
            <a href="" target="_blank">
              <FaXTwitter
                size={25}
                className="hover:text-blue-500 text-white cursor-pointer"
              />
            </a>
            <a href="" target="_blank">
              <FaInstagram
                size={25}
                className="hover:text-blue-500 text-white cursor-pointer"
              />
            </a>
            <a href="" target="_blank">
              <FaFacebook
                size={25}
                className="hover:text-blue-500 text-white cursor-pointer"
              />
            </a>
            <a href="" target="_blank">
              <FaTiktok
                size={25}
                className="hover:text-blue-500 text-white cursor-pointer"
              />
            </a>
            <a href="" target="_blank">
              <BsLinkedin
                size={25}
                className="hover:text-blue-500 text-white cursor-pointer"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="text-white flex mt-10 md:mt-0  justify-between px-2">
        <h1 className="text-[15px]">2023 copyright reserved</h1>
        <h1 className="text-[15px]">PrivacyPolicy</h1>
      </div>
      <div className="bg-white w-full h-[1px]">
        {/* <div className='flex justify-center'>
          <img src={rec} alt="made with love by tech titans" />
        </div> */}
      </div>
    </div>
  );
}

export default Footer