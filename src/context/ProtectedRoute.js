import { useUserAuthContext } from '../context/UserContext';
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Home from "../pages/Home";
export const ProtectedRoute = ({children})=> {
    const {userData} = useUserAuthContext();
    if(!userData && children.type.name === "Signup"){
      children = <Signup />;
    }
    else if(!userData){
      children = <Login />;
    }
    else if(userData !== null && (children.type.name === "Login" || children.type.name === "Signup")){
      children = <Home />;
    }
  return  children;    
}