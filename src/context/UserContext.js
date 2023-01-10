import React, { useContext } from 'react'
import { createContext, useState, useEffect } from "react";
import { signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase/firebase';
import { useNavigate } from 'react-router-dom';

export const userContext = createContext();
const provider = new GoogleAuthProvider();
export const UserContextProvider = ({ children }) => {
    const navigate = useNavigate();
    const [userData, setuserData] = useState();
    const [logInProgress, setlogInProgress] = useState(false);
    const [currentPage, setcurrentPage] = useState()
    const [isProfileCompleted, setProfileCompleted] = useState(true);
    const loginwithemail = (email, pass) => {
        return signInWithEmailAndPassword(auth, email, pass);
    }
    const signupwithemail = (email, pass) => {
        setlogInProgress(true);
        setTimeout(async() => {
            await createUserWithEmailAndPassword(auth, email, pass)
            .then(()=>{
                loginwithemail(email, pass)
                .then(()=>{
                    setlogInProgress(false);
                    navigate("/")
                })   
            })
        }, 1500);
    }

    const logout = () => {
        setlogInProgress(true);
        setTimeout(async () => {
            await signOut(auth)
            .then(()=>{
                setlogInProgress(false);
            })    
        }, 1500);
    }

    const loginwithgoogle = () => {
        return signInWithPopup(auth, provider);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
            setuserData(currentuser);
        });
        return unsubscribe;
    }, [])

    return <userContext.Provider value={{ logInProgress, setlogInProgress, userData, loginwithemail, logout, loginwithgoogle, currentPage, setcurrentPage, signupwithemail, isProfileCompleted, setProfileCompleted}}>{children}</userContext.Provider>
}

export const useUserAuthContext = () => useContext(userContext);

