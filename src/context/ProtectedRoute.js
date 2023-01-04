import { useUserAuthContext } from '../context/UserContext';
import Login from "../pages/Login";

export const ProtectedRoute = ({children})=> {

    const {userData} = useUserAuthContext();

    if(!userData){
      children = <Login />;
    }
  return  children;    
}