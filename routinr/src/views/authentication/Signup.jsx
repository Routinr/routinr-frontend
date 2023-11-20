import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../../css/App.css";
import SubmitBtn from "../../assets/icons/signup.png";
import DesktopAuth from "../../assets/images/auth/DesktopAuth.png";

const Signup = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [registerUser, setRegisterUser] = useState({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password: "",
    phone_number: "",
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

    // Show the preloader
    setIsLoading(true);

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[-_!@#$%^&*])[A-Za-z\d-_!@#$%^&*]{8,}$/;
    if (!passwordRegex.test(registerUser.password)) {
      // Password doesn't meet the requirements
      alert("Password must be at least 8 characters long and include letters, numbers, and symbols.");
      // Hide the preloader on validation failure
      setIsLoading(false);
      return;
    }

    try {
      // Simulate an asynchronous action (API call)
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Actual API call
      const response = await axios.post(
        "https://routinr-backend.onrender.com/auth/register",
        registerUser
      );

      if (response.status >= 200 && response.status < 300) {
        console.log("signup successful");

        // Reset the form fields
        setRegisterUser({
          first_name: "",
          last_name: "",
          username: "",
          email: "",
          password: "",
          phone_number: "",
        });

        // Hide the preloader on success
        setIsLoading(false);

        // Navigate to the dashboard
        navigate("/dashboard");
      } else {
        console.error("signup failed:", response.data?.error);

        // Hide the preloader on API failure
        setIsLoading(false);
      }
    } catch (err) {
      console.error("error during signup:", err);

      // Hide the preloader on error
      setIsLoading(false);
    }
  };

  return (
    <div className="main w-full h-[100vh] overflow-scroll grid place-items-center">
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
              value={registerUser.first_name}
              type="text"
              name="first_name"
              placeholder="First Name"
              className="input px-3 text-white bg-black shadow-xl rounded-md bg-clip-padding bg-opacity-25"
            />
            <input
              onChange={handleUserRegister}
              required
              id="lastname"
              value={registerUser.last_name}
              type="text"
              name="last_name"
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
              value={registerUser.phone_number}
              type="text"
              name="phone_number"
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
                className="w-[15%] text-white pb-3 ml-2"
              >
                {showPassword ? "Show" : "Hide"}
              </button>
            </div>

            {isLoading ? (
              <div className="text-white w-full flex justify-center items-center font-medium">Loading...</div>
            ) : (
              <button type="submit" className="">
                <img
                  src={SubmitBtn}
                  alt="Submit"
                  className="w-[40px] h-[40px] float-right ml-2 my-2"
                />
              </button>
            )}
          </form>

          <div className="flex flex-start w-full mb-5">
            <Link
              to="/login"
              className="text-white mx-2 mt-3 font-semibold underline text-[17px]"
            >
              Have an Account?
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
