import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../../css/App.css";
import SubmitBtn from "../../assets/icons/signup.png";
import DesktopAuth from "../../assets/images/auth/DesktopAuth.png";

const Login = () => {
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const [loginUser, setLoginUser] = useState({
    email: "",
    password: "",
  });

  const handleUserLogin = (e) => {
    const { name, value } = e.target;
    setLoginUser((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://routinr-backend.onrender.com/auth/login",
        loginUser
      )

      if (response.data.error) {
        setLoginError(response.data.error);
        return;
      }
      const token = response.data.token; // Extract the token from the response object
      console.log(token); // Check if you're getting the token correctly
  
      // Store the token securely in the browser's localStorage
      localStorage.setItem('accessToken', token);

      navigate("/dashboard")
    } catch (err) {
      console.error("error during login", err);
    }
  };

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
          <form action="" className="flex flex-col" onSubmit={handleLogin}>
            <h1>{loginError}</h1>
            <input
              onChange={handleUserLogin}
              type="text"
              name="email"
              id=""
              value={loginUser.email}
              placeholder="Email"
              className="input px-3 mb-3 text-white bg-black shadow-xl rounded-md bg-clip-padding bg-opacity-25"
            />
            <div className="flex w-full">
              <input
                onChange={handleUserLogin}
                required
                id="Password"
                value={loginUser.password}
                type={showPassword ? "password" : "text"}
                name="password"
                placeholder="Password"
                className="input px-3 text-white bg-black shadow-xl rounded-md bg-clip-padding bg-opacity-25 w-[85%]"
              />
              <button
                type="button"
                onClick={togglePassword}
                className="w-[15%] text-white pb-3"
              >
                {showPassword ? "Show" : "Hide"}
              </button>
            </div>

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
              Sign Up
            </Link>

            <Link to={"/forgotpassword"}>
              <h1 className="text-white mx-2 mt-3 font-semibold underline text-[17px] custom-sm:text-[14px]">
                Forgot Password?
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

export default Login;
