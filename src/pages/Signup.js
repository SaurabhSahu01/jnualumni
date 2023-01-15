import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserAuthContext } from "../context/UserContext"
import EmailVerificationSent from "../components/Loader/EmailVerificationSent";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { sendEmailVerification } from "firebase/auth";
import { auth } from "../firebase/firebase"
function Signup() {
  const { loginwithemail, signupwithemail, logInProgress, logout, setlogInProgress } = useUserAuthContext();
  const [validEmail, setvalidemail] = useState(false)
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
    showPassword: false
  });

  const validateEmail = (email) => {
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.match(mailformat)) {
      return true;
    }
    else return false;
  }
  const handleEmail = (e) => {
    if (validateEmail(e.target.value)) {
      setvalidemail(true);
      setData({ ...data, email: e.target.value })
    }
    else {
      setData({ ...data, email: "" })
    }
  }
  const handlePass = (e) => {
    setData({ ...data, password: e.target.value });
  }
  const handleShowPassword = (e) => {
    setData({ ...data, showPassword: !data.showPassword })
  }
  const signupHandler = (e) => {
    e.preventDefault();
    setlogInProgress(true);
    setTimeout(async () => {
      await signupwithemail(data.email, data.password)
        .then(() => {
          loginwithemail(data.email, data.password)
            .then(() => {
              sendEmailVerification(auth.currentUser)
                .then(() => {
                  setlogInProgress(false);
                  logout();
                  navigate("/");
                })
            })
        })
    }, 2500);
  }
  return (
    <>
      {logInProgress ? <EmailVerificationSent></EmailVerificationSent> : <></>}
      <div className="w-full h-[86vh] grid place-items-center ">
        <div className="w-[350px] rounded-2xl py-8 bg-[#89c1fd8e] flex flex-col justify-center items-center gap-4">
          <h1 className="text-3xl">Create Your Account</h1>
          <div className="flex w-4/5 flex-col gap-2">
            <div className="flex flex-col gap-1">
              <h1 className="text-base">Email Address</h1>
              <input
                className={validEmail ? "text-green-600 rounded-lg py-1 px-2 outline-none" : "text-red-500 rounded-lg py-1 px-2 outline-none"}
                type="email"
                autoComplete="off"
                name="email"
                onChange={handleEmail}
              />
            </div>
            <div className="flex flex-col gap-1">
              <h1 className="text-base">Password </h1>
              <div className="rounded-lg outline-none bg-white flex justify-end place-items-center">
                <input
                  className="rounded-lg py-1 px-2 outline-none w-[100%]"
                  type={data.showPassword ? "text" : "password"}
                  autoComplete="off"
                  name="password"
                  onChange={handlePass}
                />
                {data.showPassword ? (<VisibilityIcon className="mx-2" onClick={handleShowPassword}></VisibilityIcon>) : (<VisibilityOffIcon onClick={handleShowPassword} className="mx-2"></VisibilityOffIcon>)}
              </div>
            </div>
            {(validEmail && data.password !== "") ? (<button className="text-white mt-4 rounded-lg py-2 bg-[#0b781d]" onClick={signupHandler}>
              Sign Up
            </button>) : (<button className="text-white mt-4 rounded-lg py-2 bg-[#0b781d57] cursor-not-allowed" disabled>
              Sign Up
            </button>)}
            <button
              className="text-blue-800 text-md mt-6 bg-transparent"
              onClick={() => navigate("/login")}
            >
              Already have an account? Log In
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
