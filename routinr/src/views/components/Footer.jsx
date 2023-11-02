import React from 'react'
import { Link } from 'react-router-dom';
import techtitans from "../../assets/icons/techtitans.png";
import xx from "../../assets/icons/xx.png";
import inst from "../../assets/icons/inst.png";
import face from "../../assets/icons/face.png";
import tiktok from "../../assets/icons/tiktok.png";
import linked from "../../assets/icons/link.png";
import rec from "../../assets/icons/rec.png";

const Footer = () => {
  return (
    <div className='pb-[50px] md:pb-[0px]'>
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
          <h1 className="text-2xl  font-bold mt-8 md:mt-0">Subscribe To Our Newsletter</h1>
          <div className="flex mt-7 md:mt-12 justify-between border-white border-2 w-[250px]  md:w-[320px] py-1 px-1 md:px-3 rounded-tl-xl rounded-br-xl">
            <input type="text" placeholder="Email" className="bg-transparent w-[150px] md:w-full" />
            <button className="bg-[#386BD9] text-[15px] md:text-[20px] font-bold py-1 px-2 rounded-tl-lg rounded-br-lg">
              Subscribe
            </button>
          </div>
        </div>
        <div className='mt-8 md:mt-0'>
          <img src={techtitans} alt="made with love by tech titans" />
          <div className="flex items-center gap-5">
            <a href="" target="_blank">
              <img src={xx} alt="twitter" />
            </a>
            <a href="" target="_blank">
              <img src={inst} alt="instagram" />
            </a>
            <a href="" target="_blank">
              <img src={face} alt="facebook" />
            </a>
            <a href="" target="_blank">
              <img src={tiktok} alt="tiktok" />
            </a>
            <a href="" target="_blank">
              <img src={linked} alt="linkedin" />
            </a>
          </div>
        </div>
      </div>
      <div className="text-white flex mt-10 md:mt-0  justify-between px-2">
        <h1 className='text-[15px]'>2023 copyright reserved</h1>
        <h1 className='text-[15px]'>PrivacyPolicy</h1>
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