import React from "react"
import avather from "../../assets/icons/avather.png";

const Topbar= () => {
    return (
      <div className="flex items-center text-white gap-5">
        <img className="w-[50px] h-[50px]" src={avather} alt="task" />
        <h1>Hi Alex!</h1>
      </div>
    );
}

export default Topbar