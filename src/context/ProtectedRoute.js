import { useUserAuthContext } from '../context/UserContext';
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Home from "../pages/Home";
export const ProtectedRoute = ({children})=> {
    const {userData, profileData} = useUserAuthContext();
  // two cases  arise -> userData == null(not loggedin) and userData != null(logged in)
  // we have to protect our routes in both the cases
  // stop the non-logged in user 
  // stop the non-verified user

  // case of not logged in
  if(!userData){
    if(window.location.pathname === "/signup"){
      children = <Signup />
    }
    else{
      children = <Login />
    }
  }

  // case when user is logged in(via email) but not verified
  else if(userData !== null){
    // check if user's email is verified and profile is complete
    if(!userData.emailVerified || !profileData.profileCompleted){
      children = <Home />
    }
  }

  return  children;    
}