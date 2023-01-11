import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import GoogleButton from "react-google-button";
import FacebookButton from "../components/FacebookButton";
import TwitterButton from "../components/TwitterButton";
import { useUserAuthContext } from "../context/UserContext";
import {GoogleAuthProvider} from "firebase/auth";

function Login() {
  const [loginerr, setloginerr] = useState(false);
  const [mailerr, setmailerr] = useState(false);
  const { logInProgress, setlogInProgress, loginwithemail, loginwithgoogle } = useUserAuthContext();
  const navigate = useNavigate();
  const [values, setValues] = useState({
    username: "",
    password: "",
    showPassword: false
  });

  const validateEmail = (email) => {
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(email.match(mailformat)){
      return true;
    }
    else return false;
  }
  const handleUsername = (e) => {
    setloginerr(false);
    if(validateEmail(e.target.value)){
      setmailerr(false);
      setValues({ ...values, username: e.target.value })
    }
    else{
      setmailerr(true);
    }
  }
  const handlePassword = (e) => {
    setloginerr(false);
    e.target.value = e.target.value.replaceAll(" ", "");
    setValues({ ...values, password: e.target.value.replaceAll(" ", "") });
  }
  const handleShowPassword = (e) => {
    setValues({ ...values, showPassword: !values.showPassword })
  }
  const handleClick = async (e) => {
    e.preventDefault();
    setlogInProgress(true);
    await loginwithemail(values.username, values.password)
      .then(() => {
        setlogInProgress(false);
        navigate("/profile");
      })
      .catch((err) => {
        setlogInProgress(false);
        setloginerr(true);
      })
  }

  return (
    <>
      {/* <Header></Header> */}
      <div className="w-full h-[100vh] grid place-items-center ">
        <div className="w-1/3 rounded-2xl py-8 bg-[#89c1fd8e] flex flex-col justify-center items-center gap-4">
          <h1 className="text-3xl text-black font-semibold">Sign In</h1>
          <div className="flex w-4/5 flex-col gap-2">
            <div className="flex flex-col gap-1">
              <h1 className="text-black text-base font-semibold">Email :</h1>
              <input
                className=" rounded-lg py-2 px-2 outline-none font-mono"
                type="email"
                autoComplete="off"
                placeholder="email"
                name="email"
                onChange={handleUsername}
              />
            </div>
            <div className="flex flex-col gap-1">
              <h1 className="text-black text-base font-semibold">Password :</h1>
              <div className="rounded-lg py-2 outline-none bg-white flex justify-end">
                <input
                  className="outline-none px-2 w-full font-mono"
                  placeholder="password"
                  autoComplete="off"
                  type={values.showPassword ? "text" : "password"}
                  name="password"
                  onChange={handlePassword}
                />
                {values.showPassword ? (<VisibilityIcon className="mx-2" onClick={handleShowPassword}></VisibilityIcon>) : (<VisibilityOffIcon onClick={handleShowPassword} className="mx-2"></VisibilityOffIcon>)}
              </div>
            </div>
            {mailerr ? (<span className="text-red-500">Invalid email!</span>) : (<></>)}
            {loginerr ? (<span className="text-red-500">Incorrect email or password!</span>) : (<></>)}
            {logInProgress ? (<button className="mt-4 text-white rounded-lg py-2 bg-[#4e299e] font-semibold" disabled>
              <span className="spinner-border spinner-border-sm mx-2" role="status" aria-hidden="true"></span>
              Loading...
            </button>) : ((!mailerr && values.username !== "" && values.password !== "") ? (<button type="submit" className="mt-4 text-white rounded-lg py-2 bg-[#4e299e] font-semibold transition duration-150 hover:scale-105" onClick={handleClick}>
              Sign In
            </button>) : (<button className="mt-4 text-white rounded-lg py-2 bg-[#4e299e6e] font-semibold cursor-not-allowed" disabled>
              Sign In
            </button>))}
            <span className="mx-auto  font-semibold cursor-default">OR</span>
            <GoogleButton className="mx-auto m-2" onClick={()=>{
                loginwithgoogle()
                .then((result) => {
                  // This gives you a Google Access Token. You can use it to access the Google API.
                  const credential = GoogleAuthProvider.credentialFromResult(result);
                  const token = credential.accessToken;
                  // The signed-in user info.
                  const user = result.user;
                  navigate("/profile");
                  // ...
                }).catch((error) => {
                  // Handle Errors here.
                  const errorCode = error.code;
                  const errorMessage = error.message;
                  // The email of the user's account used.
                  const email = error.customData.email;
                  // The AuthCredential type that was used.
                  const credential = GoogleAuthProvider.credentialFromError(error);
                  // ...
                });

            }}/>
            <FacebookButton></FacebookButton>
            <TwitterButton></TwitterButton>
            <span className="text-center my-3 cursor-default">
              Don't have an account? <button
                className=" text-blue-600 cursor-pointer"
                onClick={() => navigate("/signup")}
              >
                sign up now
              </button>
            </span>

          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
