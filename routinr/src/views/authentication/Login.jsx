import React from 'react'
import { Link } from 'react-router-dom';

const Login = () => {

  return (
    <div className="w-[100%] h-screen bg-cover bg-center bg-mobilebg bg-black flex justify-center pt-10">
      <div className="w-[90%] md:w-[40%] h-fit  bg-opacity-20 bg-blur-lg bg-white rounded-lg shadow-lg">
        <div className="p-5">
          <h1 className="text-white text-4xl ">
            Welcome <br /> Back Kiane
          </h1>
          <div className="mt-20">
            <input
              type="text"
              placeholder="Email"
              className="bg-white bg-opacity-40 bg-blur-lg  rounded-md py-3 px-4 block w-full mt-3 text-white placeholder:text-white"
            />
            <input
              type="password"
              placeholder="Password"
              className="bg-white bg-opacity-40 bg-blur-lg  rounded-md py-3 px-4 block w-full mt-3 text-white placeholder:text-white"
            />
          </div>
          <div className="flex justify-between text-white mt-20">
            <h1 className="text-[30px]">Sign In</h1>
            <img src="../../assets/rou.png" alt="arrow" />
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
