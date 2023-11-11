import React from "react";
import avather from "../../assets/icons/avather.png";
import hi from "../../assets/icons/hi.png";
import { GiHamburgerMenu } from "react-icons/gi";

const MobileTopbar = ({ toggleSidebar }) => {
  return (
    <div className="flex flex-row justify-between items-center text-white gap-5">
      <div className="flex items-center text-white gap-3">
        <img className="w-[50px] h-[50px]" src={avather} alt="task" />
        <h1>Hi Alex!</h1>
        <img className="w-[20px] h-[20px]" src={hi} alt="hi" />
      </div>
      <div>
        <GiHamburgerMenu
          size={25}
          className="hover:text-blue-500 text-white cursor-pointer"
          onClick={toggleSidebar}
        />
      </div>
    </div>
  );
};

export default MobileTopbar;
