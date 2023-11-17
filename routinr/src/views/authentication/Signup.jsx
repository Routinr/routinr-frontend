import React,{useState} from "react";
import axios from 'axios'
import { Link } from "react-router-dom";
import "../../css/App.css";
import SubmitBtn from "../../assets/icons/signup.png";
import DesktopAuth from "../../assets/images/auth/DesktopAuth.png";

const Signup = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [conPass, setConPass] = useState('')

  const handleSignUp = async () => {
    try {
      const response = await fetch('http://localhost:3000/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          email: email,
          password: password,
          conPass: conPass,
        }),
      });

      if (response.ok) {
        console.log('signup successfull')
      } else{
        console.error('signup failed')
      }
    } catch (err) {
      console.error('error during signup:', error)
    }
  }

  return (
    <div className="main w-full h-[100vh] grid place-items-center" >
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
          <form action="" className="flex flex-col">
            <input
              onchange={(e)=>setUsername(e.target.value)}
              id="Username"
              value={username}
              type="text"
              name=""
              className="input px-3 text-white bg-black shadow-xl rounded-md bg-clip-padding bg-opacity-25"
            />
            <input
              onchange={(e)=>setEmail(e.target.value)}
              id="Email"
              value={email}
              type="email"
              name=""
              className="input px-3 text-white bg-black shadow-xl rounded-md bg-clip-padding bg-opacity-25"
            />
            <input
              onchange={(e)=>setPassword(e.target.value)}
              id="Password"
              value={password}
              type="password"
              name=""
              className="input px-3 text-white bg-black shadow-xl rounded-md bg-clip-padding bg-opacity-25"
            />
            <input
              onchange={(e)=>setConPass(e.target.value)}
              id="confirmPassword"
              value={conPass}
              type="password"
              name=""
              className="input px-3 text-white bg-black shadow-xl rounded-md bg-clip-padding bg-opacity-25"
            />

            <button type="submit" onClick={handleSignUp} className="">
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
          className="desktop-img flex h-[500px] ml-[35px]"
        />
      </div>
    </div>
  );
};

export default Signup;
