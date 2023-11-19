import React from "react";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../css/App.css";
import SubmitBtn from "../../assets/icons/signup.png";
import DesktopAuth from "../../assets/images/auth/DesktopAuth.png";

const ForgetPassword = () => {
  const navigate = useNavigate();
  const [forgotPassword, setForgotPassword] = useState({
    email: "",
  });

  const handleForgetPassword = (e) => {
    const { name, value } = e.target;
    setForgotPassword((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  const formForgetPassword = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://routinr-backend.onrender.com/auth/forgot-password", forgotPassword)

      if (response.ok) {
        alert ("a message has been sent to your email")

        navigate("/recoverpassword")
      } else {
        console.log(err)
      }
    } catch (err){
      console.error(err)
    }
  }
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
            Forgot Password ?
          </h1>
          <form className="flex flex-col" onSubmit={formForgetPassword}>
            <input
              type="email"
              name="email"
              id="email"
              value={forgotPassword.email}
              onChange={handleForgetPassword}
              placeholder="Your email address"
              className="input px-3 mb-3 text-white bg-black shadow-xl rounded-md bg-clip-padding bg-opacity-25"
            />

            <Link type="submit" className="">
              <img
                src={SubmitBtn}
                alt="Submit"
                className="w-[40px] h-[40px] float-right ml-2 my-2"
              />
            </Link>
          </form>

          <div className="flex justify-between flex-row w-full mt-7 ">
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
