import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Signup from "./Signup";
import GoogleButton from "react-google-button";
import { FacebookProvider, LoginButton } from 'react-facebook';

import { useUserAuth } from "../reactHooks/UseAuthContext";


function Login() {
  const navigate = useNavigate();
  const {logIn,GoogleAuth,FacebookAuth}= useUserAuth()

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const [err,seterr] = useState("");

  const inputEvent = (e) => {
    const { name, value } = e.target;
    setLogin((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmission = async(e)=>{
    e.preventDefault();
    if(!login.email || !login.password){
      alert("invalid details");
    }
    let result = login.email.slice(-10, -1)+"m";
    if(result == "@gmail.com"){
      

      try{
        await logIn(login.email,login.password)
        navigate("/");
    }catch(err){
      seterr(err.message);
      alert(err);
    }
    }else{
      alert("invalid email");
    }


  }
  const handleGoogleLogin = async(e)=>{
  e.preventDefault();
  try{
    await GoogleAuth();
    navigate("/");
  }catch(err){
    alert(err.message)
  }


  }
  const handleFacebookLogin = async(e)=>{
    e.preventDefault();
    try{
      await FacebookAuth();
      navigate("/");
    }catch(err){
      alert(err.message)
    }
  
  
    }




  const handleSuccess = (response) => {
    console.log(response.status);
  }

  const handleError = (error) => {
    console.log(error);
  }

  return (
    <>
      {/* <Header></Header> */}
      <div className="w-full h-[86vh] grid place-items-center ">
        <div className="w-1/3 rounded-2xl py-8 bg-[#d2d2d4] flex flex-col justify-center items-center gap-4">
          <h1 className="text-3xl text-[#0b0b0d]">Sign In With</h1>
          <div className="flex w-4/5 flex-col gap-2">
            <div className="flex flex-col gap-1">
              <h1 className="text-[#0b0b0d] text-base">email :</h1>
              <input
                className="rounded-lg py-1 px-2 outline-none"
                placeholder="enter you email"
                autoComplete="off"
                type="text"
                name="email"
                value={login.email}
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
            <div><GoogleButton className="g-btn" type="dark" onClick={handleGoogleLogin} />
              <FacebookProvider >
                <LoginButton scope="email" onError={handleError} onClick={handleFacebookLogin}>Login via Facebook</LoginButton></FacebookProvider>
                
            </div>
            <button className="mt-4 text-[#fff] rounded-lg py-2 bg-[#4e299e]" onClick={handleSubmission}>
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
