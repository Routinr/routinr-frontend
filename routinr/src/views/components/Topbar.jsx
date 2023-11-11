import React from "react"
import avather from "../../assets/icons/avather.png";
import hi from "../../assets/icons/hi.png";


const Topbar= () => {
    return (
      <div className="flex items-center text-white gap-3">
        <img className="w-[50px] h-[50px]" src={avather} alt="task" />
        <h1>Hi Alex!</h1>
        <img className="w-[20px] h-[20px]" src={hi} alt="hi" />
      </div>
    );
}

export default Topbar