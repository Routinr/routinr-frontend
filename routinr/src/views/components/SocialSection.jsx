import React from 'react'
import Marquee from "react-fast-marquee";
import socialicon from "../../assets/icons/socialicon.png";
import socialicon1 from "../../assets/icons/socialicon1.png";

const SocialSection = () => {
  return (
    <div className="w-full  overflow-hidden">
      <Marquee speed={50}>
        <img className='lg:w-full md:w-[800px]  w-[500px]' src={socialicon} alt="logo" />
      </Marquee>
      <div className="mt-10">
        <Marquee speed={50}>
          <img className='lg:w-full md:w-[800px]  w-[500px]' src={socialicon1} alt="logo" />
        </Marquee>
      </div>
    </div>
  );
}

export default SocialSection
