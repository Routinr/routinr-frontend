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
  const [isLoading, setIsLoading] = useState(false);
  const [loginUser, setLoginUser] =  useState({
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

    // Show the preloader
    setIsLoading(true);

    try {
      // Simulate an asynchronous action (API call)
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Your actual API call would be here
      const response = await axios.post(
        "https://routinr-backend.onrender.com/auth/login",
        loginUser
      );

      const error = response.data?.error;
      if (error) {
        setLoginError(error);
        // Hide the preloader on error
        setIsLoading(false);
        return;
      }

      // Extract the token from the response object
      const token = response.data.token;
      console.log(token);

      // Store the token securely in the browser's localStorage
      localStorage.setItem("accessToken", token);

      // Reset the form fields
      setLoginUser({
        email: "",
        password: "",
      });

      // Hide the preloader on success
      setIsLoading(false);

      // navigate to dashboard
      navigate("/dashboard");
    } catch (err) {
      // Handle errors here
      console.error("Error during login:", err);

      // Hide the preloader on error
      setIsLoading(false);
    }
  };

  return (
    <div className="main w-full h-[100vh] grid place-items-center">
      <div
        className="auth-cont flex 
        w-2/3
        custom-sm:w-[90%]
       lg:py-0 lg:w-5/12 lg:justify-between lg:items-center
      bg-black shadow-2xl rounded-2xl p-5 bg-clip-padding bg-opacity-25"
      >
        <div className="w-full grid items-center p-4">
          <h1 className="my-[50px] text-white text-3xl font-semibold text-center custom-sm:text-2xl">
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
              className="input px-3 mb-3 text-white bg-black shadow-xl rounded-md bg-clip-padding bg-opacity-25 w-full"
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
                className="input px-3 text-white bg-black shadow-xl rounded-md bg-clip-padding bg-opacity-25 w-full"
              />
              <button
                type="button"
                onClick={togglePassword}
                className="w-[15%] text-white pb-3 ml-2"
              >
                {showPassword ? "show" : "hide"}
              </button>
            </div>

            {isLoading ? (
              <div className="text-white w-full flex justify-center items-center font-medium">Loading...</div>
            ) : (
              <button type="submit" className="text-white flex justify-between items-center pl-2 text-lg font-medium">
                Sign In
                <img
                  src={SubmitBtn}
                  alt="Submit"
                  className="w-[40px] h-[40px] float-right ml-2 my-2"
                />
              </button>
            )}
          </form>

          <div className="flex justify-between w-full mb-5 mt-5 custom-sm:flex-col">
            <Link
              to={"/signup"}
              className="text-white mx-2 mt-3 font-medium text-[17px] custom-sm:mt-3 custom-sm:text-[14px]"
            >
              Don't have an account?
            </Link>

            <Link to={"/forgotpassword"}>
              <h1 className="text-white mx-2 mt-3 font-medium text-[17px] custom-sm:text-[14px]">
                Forgot Password?
              </h1>
            </Link>
          </div>
        </div>

        {/* <img
          src={DesktopAuth}
          alt=""
          className="desktop-img h-[500px] ml-[35px]"
        /> */}
      </div>
    </div>
  );
};

export default Login;
