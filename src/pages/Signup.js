import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useUserAuth } from "../reactHooks/UseAuthContext";


function Signup() {
  // const {userdata, logIn, SignUp }= useUserAuth()
  const {SignUp }= useUserAuth()
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email:"",
    password: "",
  });
  const [err,seterr] = useState("");

  const inputEvent = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmission = async(e)=>{
    e.preventDefault();
    if(!data.email || !data.password || !data.name){
      alert("invalid details");
      return;
    }
    let result = data.email.slice(-10, -1)+"m";
    if(result === "@gmail.com"){
      
      
      try{
          await SignUp(data.email,data.password)
          navigate("/");
      }catch(err){
        seterr(err.message);
        alert(err);
      }


    }else{
      alert("invalid email");
    };
  };
  return (
    <>
      <div className="w-full h-[86vh] grid place-items-center ">
        <div className="w-1/3 rounded-2xl py-8 bg-[#030503] flex flex-col justify-center items-center gap-4">
          <h1 className="text-3xl text-[#ddeddd]">Create Your Account</h1>
          <div className="flex w-4/5 flex-col gap-2">
            <div className="flex flex-col gap-1">
              <h1 className="text-[#ddeddd] text-base">Full Name </h1>
              <input
                className="rounded-lg py-1 px-2 outline-none"
                autoComplete="off"
                type="text"
                name="name"
                value={data.name}
                onChange={inputEvent}
              />
            </div>
            <div className="flex flex-col gap-1">
              <h1 className="text-[#ddeddd] text-base">Email Address</h1>
              <input
                className=" rounded-lg py-1 px-2 outline-none"
                type="email"
                autoComplete="off"
                name="email"
                value={data.email}
                onChange={inputEvent}
              />
            </div>
            <div className="flex flex-col gap-1">
              <h1 className="text-[#ddeddd] text-base">Password </h1>
              <input
                className=" rounded-lg py-1 px-2 outline-none"
                type="password"
                autoComplete="off"
                name="password"
                value={data.password}
                onChange={inputEvent}
              />
            </div>
            <button className="mt-4 text-[#ddeddd] rounded-lg py-2 bg-[#0b781d]" onClick={handleSubmission}>
              Sign Up
            </button>
            <button
              className="text-xs mt-6 text-[#ddeddd] bg-transparent hover:text-sky-700"
              onClick={() => navigate("/login")}
            >
              Already have account! log in
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
