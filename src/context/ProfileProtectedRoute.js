import { useUserAuthContext } from '../context/UserContext';
import Profile from "../pages/Profile"

export const ProfileProtectedRoute = ({children})=> {
    
    const {isProfileCompleted, userData} = useUserAuthContext();

    if(userData !== null && !isProfileCompleted){
        children = <Profile/>
    }
  return  children;    
}