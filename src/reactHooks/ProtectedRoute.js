import React from 'react';
import { Navigate } from "react-router-dom";
import { useUserAuth } from "./UseAuthContext";

 export const ProtectedRoute = ({children})=> {
    
    const {userdata} = useUserAuth()
    console.log(userdata)

    if(!userdata){
        return <Navigate to="/login" />;
    }

  return  children;
}

