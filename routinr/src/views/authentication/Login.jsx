import React from 'react'
import { Link } from 'react-router-dom';
import SubmitBtn from "../../assets/icons/signup.png";


const Login = () => {

  return (
    <div className="main w-full h-[100vh] grid place-items-center">
      <div className="md:w-1/3 custom-sm:w-11/12 bg-black shadow-2xl rounded-2xl p-5 bg-clip-padding bg-opacity-25">
        <div className="p-5">
          <h1 className="my-[20px] text-white text-3xl font-semibold">
            Welcome Back Kiane
          </h1>
          <form action="" className="flex flex-col">
            <input
              type="text"
              name=""
              id=""
              placeholder="Email"
              className="input px-3 text-white bg-black shadow-xl rounded-md bg-clip-padding bg-opacity-25"
            />
            <input
              type="password"
              name=""
              id=""
              placeholder="Password"
              className="input px-3 text-white bg-black shadow-xl rounded-md bg-clip-padding bg-opacity-25"
            />
          </form>
          <div className="flex justify-between text-white mt-20">
            <h1 className="text-[30px]">Sign In</h1>
            <button type="submit" className="">
              <img
                src={SubmitBtn}
                alt="Submit"
                className="w-[40px] h-[40px] float-right ml-2"
              />
            </button>
          </div>
          <div className="flex justify-between text-white mt-10">
            <Link to={"/signup"}>
              <h1 className="text-md underline">Sign Up</h1>
            </Link>
            <Link to={"/forgotpassword"}>
              <h1 className="text-md underline">Forgot Password?</h1>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login
