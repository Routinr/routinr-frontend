import React from 'react'
import { Link } from 'react-router-dom';
import "../../css/App.css";
import SubmitBtn from "../../assets/icons/signup.png";
import DesktopAuth from "../../assets/images/auth/DesktopAuth.png"


const Login = () => {

  return (
    <div className="main w-full h-[100vh] grid place-items-center">
    <div className=" flex 
    md:pr-0 md:py-0 md:w-7/12 md:justify-between md:items-center
    bg-black shadow-2xl rounded-2xl p-5 bg-clip-padding bg-opacity-25">
      <div className="w-[50%] h-[60%] grid items-center">
        <h1 className="my-[20px] text-white text-3xl font-semibold text-center mb-[30px]">
        Welcome Back :)
        </h1>
        <form action="" className="flex flex-col">
          <input
            type="text"
            name=""
            id=""
            placeholder="Username"
            className="input px-3 mb-3 text-white bg-black shadow-xl rounded-md bg-clip-padding bg-opacity-25"
          />
          <input
            type="password"
            name=""
            id=""
            placeholder="Password"
            className="input px-3 mb-3 text-white bg-black shadow-xl rounded-md bg-clip-padding bg-opacity-25"
          />

          <button type="submit" className="">
            <img
              src={SubmitBtn}
              alt="Submit"
              className="w-[40px] h-[40px] float-right ml-2 my-2"
            />
          </button>
        </form>

        <div className="flex justify-between w-full">
          <Link
            to={"/signup"}
            className="text-white mx-2 mt-3 font-semibold underline text-[17px]"
          >
            Sign Up
          </Link>

          <Link to={"/forgotpassword"}>
              <h1 className="text-white mx-2 mt-3 font-semibold underline text-[17px]">Forgot Password?</h1>
            </Link>
        </div>
      </div>

      <img src={DesktopAuth} alt="" className='desktop-img h-[500px] ml-[35px]'/>
    </div>
  </div>
  );
}

export default Login
