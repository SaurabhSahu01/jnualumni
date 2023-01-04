import React, { useContext } from 'react'
import {createContext, useState, useEffect} from "react";
import {signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../firebase/firebase';

export const userContext = createContext();

export const UserContextProvider = ({children}) => {
    const [userData, setuserData] = useState();
    const [logInProgress, setlogInProgress] = useState(false);
    const loginwithemail = (email, pass) => {
        return signInWithEmailAndPassword(auth, email, pass);
    }
    const logout = () => {
        signOut(auth);
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
            setuserData(currentuser);
        });
        return unsubscribe;
    }, [])

    return <userContext.Provider value={{logInProgress, setlogInProgress, userData, loginwithemail, logout}}>{children}</userContext.Provider>
} 

export const useUserAuthContext = () => useContext(userContext);

