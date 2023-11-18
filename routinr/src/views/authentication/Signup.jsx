import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../../css/App.css";
import SubmitBtn from "../../assets/icons/signup.png";
import DesktopAuth from "../../assets/images/auth/DesktopAuth.png";

const Signup = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [registerUser, setRegisterUser] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    number: "",
  });

  const handleUserRegister = (e) => {
    const { name, value } = e.target;
    setRegisterUser((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[-_!@#$%^&*])[A-Za-z\d-_!@#$%^&*]{8,}$/;
    ;

    if (!passwordRegex.test(registerUser.password)) {
      // Password doesn't meet the requirements
      console.error(
        "Password must be at least 8 characters long and include letters, numbers, and symbols."
      );
      return;
    }

    try {
      const response = await axios.post(
        "https://routinr-backend.onrender.com/auth/register",
        registerUser
      );

      if (response == 200) {
        console.log("signup successfull");
        navigate("/dashboard");
      } else {
        console.error("signup failed");
      }
    } catch (err) {
      console.error("error during signup:", err);
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
        <div className=" w-[95%] lg:w-[50%] lg:h-[60%] grid items-center">
          <h1 className="my-[20px] text-white text-3xl font-semibold text-center">
            Create account
          </h1>
          <form action="" className="flex flex-col" onSubmit={handleSignUp}>
            <input
              onChange={handleUserRegister}
              required
              id="firstname"
              value={registerUser.firstname}
              type="text"
              name="firstname"
              placeholder="First Name"
              className="input px-3 text-white bg-black shadow-xl rounded-md bg-clip-padding bg-opacity-25"
            />
            <input
              onChange={handleUserRegister}
              required
              id="lastname"
              value={registerUser.lastname}
              type="text"
              name="lastname"
              placeholder="Last Name"
              className="input px-3 text-white bg-black shadow-xl rounded-md bg-clip-padding bg-opacity-25"
            />
            <input
              onChange={handleUserRegister}
              required
              id="Username"
              value={registerUser.username}
              type="text"
              name="username"
              placeholder="Username"
              className="input px-3 text-white bg-black shadow-xl rounded-md bg-clip-padding bg-opacity-25"
            />
            <input
              onChange={handleUserRegister}
              required
              id="Email"
              value={registerUser.email}
              type="email"
              name="email"
              placeholder="Email"
              className="input px-3 text-white bg-black shadow-xl rounded-md bg-clip-padding bg-opacity-25"
            />
            <input
              onChange={handleUserRegister}
              required
              id="number"
              value={registerUser.number}
              type="text"
              name="number"
              placeholder="Phone number"
              className="input px-3 text-white bg-black shadow-xl rounded-md bg-clip-padding bg-opacity-25"
            />
            <div className="flex w-full">
              <input
                onChange={handleUserRegister}
                required
                id="Password"
                value={registerUser.password}
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

          <div className="flex flex-start w-full mb-5">
            <Link
              to="/login"
              className="text-white mx-2 mt-3 font-semibold underline text-[17px]"
            >
              Sign in
            </Link>
          </div>
        </div>

        <img
          src={DesktopAuth}
          alt=""
          className="desktop-img flex h-[545px] ml-[35px]"
        />
      </div>
    </div>
  );
};

export default Signup;
