import { useUserAuthContext } from '../context/UserContext';
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Home from "../pages/Home";
import Profile from "../pages/Profile"
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
export const ProtectedRoute = ({ children }) => {
  const { userData, profileData } = useUserAuthContext();
  // two cases  arise -> userData == null(not loggedin) and userData != null(logged in)
  // we have to protect our routes in both the cases
  // stop the non-logged in user 
  // stop the non-verified user


  // case of not logged in
  if (!userData) {
    if (window.location.pathname === "/signup") {
      children = <Signup />
    }
    else if(window.location.pathname === "/login"){
      children = <Login/>
    }
    else {
      children = <>
        <Login />
        {toast.warn("Please Sign In First!", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "colored",
        })}
        <ToastContainer /> 
      </>
    }
  }

  // case when user is logged in(via email) but not verified
  else if (userData !== null) {
    // check if user's email is verified and profile is complete
    if (!userData.emailVerified || !profileData.profileCompleted) {
      if (window.location.pathname === "/profile") {
        children = <Profile />
      }
      else children = <Home />
    }
  }

  return children;
}