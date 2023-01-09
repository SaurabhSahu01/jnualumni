import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const {loginwithemail, signupwithemail} = useUserAuthContext();
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email:"",
    password: "",
  });

  const validateEmail = (email) => {
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(email.match(mailformat)){
      return true;
    }
    else return false;
  }
  const handleEmail = (e) => {
    if(validateEmail(e.target.value)){
      setData({...data, email: e.target.value})
    }
    else{
      setData({...data, email: ""})
    }
  }
  const handlePass = (e) => {
    setData({...data, password: e.target.value});
  }
  const handleUsername = (e)=> {
    setData({...data, name: e.target.value});
  }
  const signupHandler =  async (e) => {
    e.preventDefault();
    if(data.name !== "" && data.email !== "" && data.password !== ""){
      await signupwithemail(data.email, data.password)
      .then(async () => {
         await loginwithemail(data.email, data.password)
         .then(() => {
            navigate("/");
         })
      })  
    }
  }

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
                onChange={handleUsername}
              />
            </div>
            <div className="flex flex-col gap-1">
              <h1 className="text-[#ddeddd] text-base">Email Address</h1>
              <input
                className=" rounded-lg py-1 px-2 outline-none"
                type="email"
                autoComplete="off"
                name="email"
                onChange={handleEmail}
              />
            </div>
            <div className="flex flex-col gap-1">
              <h1 className="text-[#ddeddd] text-base">Password </h1>
              <input
                className=" rounded-lg py-1 px-2 outline-none"
                type="password"
                autoComplete="off"
                name="password"
                onChange={handlePass}
              />
            </div>
            <button className="mt-4 text-[#ddeddd] rounded-lg py-2 bg-[#0b781d]" onClick={signupHandler}>
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
