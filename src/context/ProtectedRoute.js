import { useUserAuthContext } from '../context/UserContext';
import Login from "../pages/Login";

export const ProtectedRoute = ({children})=> {

    const {userData} = useUserAuthContext();
    console.log("userdatawhen login to restricted",userData)

    if(!userData){
      children = <Login />;
    }
  return  children;    
}