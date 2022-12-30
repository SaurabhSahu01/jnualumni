import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Signup from "./Signup";

function Login() {
  const navigate = useNavigate();
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });

  const inputEvent = (e) => {
    const { name, value } = e.target;
    setLogin((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  return (
    <>
      {/* <Header></Header> */}
      <div className="w-full h-[86vh] grid place-items-center ">
        <div className="w-1/3 rounded-2xl py-8 bg-[#d2d2d4] flex flex-col justify-center items-center gap-4">
          <h1 className="text-3xl text-[#0b0b0d]">Sign In With</h1>
          <div className="flex w-4/5 flex-col gap-2">
            <div className="flex flex-col gap-1">
              <h1 className="text-[#0b0b0d] text-base">UserName :</h1>
              <input
                className="rounded-lg py-1 px-2 outline-none"
                name="username"
                placeholder="enter you username"
                autoComplete="off"
                type="text"
                name="username"
                value={login.username}
                onChange={inputEvent}
              />
            </div>
            <div className="flex flex-col gap-1">
              <h1 className="text-[#0b0b0d] text-base">Password :</h1>
              <input
                className=" rounded-lg py-1 px-2 outline-none"
                type="password"
                autoComplete="off"
                placeholder=""
                name="password"
                value={login.password}
                onChange={inputEvent}
              />
            </div>
            <button className="mt-4 text-[#fff] rounded-lg py-2 bg-[#4e299e]">
              Sign In
            </button>
            <button
              className="text-xs mt-6 text-[#0b0b0d] bg-transparent hover:text-sky-700"
              onClick={() => navigate("/signup")}
            >
              Don't have account? sign up now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
