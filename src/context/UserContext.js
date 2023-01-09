import React, { useContext } from 'react'
import { createContext, useState, useEffect } from "react";
import { signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup,createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase/firebase';

export const userContext = createContext();
const provider = new GoogleAuthProvider();

export const UserContextProvider = ({ children }) => {
    const [userData, setuserData] = useState();
    const [logInProgress, setlogInProgress] = useState(false);
    const [currentPage, setcurrentPage] = useState()

    const loginwithemail = (email, pass) => {
        return signInWithEmailAndPassword(auth, email, pass);
    }

    const signupwithemail = (email, pass) => {
        return createUserWithEmailAndPassword(auth,email, pass);
    }
    const logout = () => {
        setTimeout(() => {
            signOut(auth);    
        }, 2000);
    }

    const loginwithgoogle = () => {
        return signInWithPopup(auth, provider);
    }

    const loginwithfacebook = () => {
        
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
            setuserData(currentuser);
        });
        return unsubscribe;
    }, [])

    return <userContext.Provider value={{ logInProgress, setlogInProgress, userData, loginwithemail, logout, loginwithgoogle, currentPage, setcurrentPage, signupwithemail }}>{children}</userContext.Provider>
}

export const useUserAuthContext = () => useContext(userContext);

