import React from "react";
import { Link } from "react-router-dom";
import "../../css/App.css";
import SubmitBtn from "../../assets/icons/signup.png";
import DesktopAuth from "../../assets/images/auth/DesktopAuth.png";

const ForgetPassword = () => {
  return (
    <div className="main w-full h-[100vh] grid place-items-center">
      <div
        className="auth-cont flex 
        w-2/3
        custom-sm:w-[90%]
        lg:pr-0 lg:py-0 lg:w-7/12 lg:justify-between lg:items-center
      bg-black shadow-2xl rounded-2xl p-5 bg-clip-padding bg-opacity-25"
      >
        <div className="w-[95%] lg:w-[50%] lg:h-[60%] grid items-center">
          <h1 className="my-[20px] text-white text-3xl font-semibold text-center mb-[30px] custom-sm:text-2xl">
            Welcome Back :)
          </h1>
          <form action="" className="flex flex-col">
            <input
              type="email"
              name=""
              id=""
              placeholder="Your email address"
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

          <div className="flex justify-between w-full mb-5 custom-sm:flex-col">
            <Link
              to={"/signup"}
              className="text-white mx-2 mt-3 font-semibold underline text-[17px] custom-sm:mt-3 custom-sm:text-[14px]" 
            >
              Create an Account
            </Link>

            <Link to={"/login"}>
              <h1 className="text-white mx-2 mt-3 font-semibold underline text-[17px] custom-sm:text-[14px]">
                Have an account?
              </h1>
            </Link>
          </div>
        </div>

        <img
          src={DesktopAuth}
          alt=""
          className="desktop-img h-[500px] ml-[35px]"
        />
      </div>
    </div>
  );
};

export default ForgetPassword;
