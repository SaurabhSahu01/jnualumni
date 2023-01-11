import React, { useContext } from 'react'
import { createContext, useState, useEffect } from "react";
import { signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from '../firebase/firebase';
import {doc, getDoc } from "firebase/firestore"
import { useNavigate } from 'react-router-dom';

export const userContext = createContext();
const provider = new GoogleAuthProvider();
export const UserContextProvider = ({ children }) => {
    const navigate = useNavigate();
    const [userData, setuserData] = useState();
    const [logInProgress, setlogInProgress] = useState(false);
    const [currentPage, setcurrentPage] = useState("")
    const [profileData, setProfileData] = useState({
        profileCompleted: false,
        data : null
    });
    const loginwithemail = (email, pass) => {
        return signInWithEmailAndPassword(auth, email, pass);
    }
    
    const signupwithemail = (email, pass) => {
        return createUserWithEmailAndPassword(auth, email, pass);
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
    
    useEffect(()=>{
        const getUserProfileData = async() => {
            const docRef = doc(db, "users", userData.uid);
            const docSnap = await getDoc(docRef);
            if(docSnap.exists()){
                return docSnap.data();
            }
            else{
                return null;
            }
        }
        getUserProfileData().then((res) => {
            if(res){
                setProfileData({...profileData, profileCompleted: true, data: res});
            }
            else console.log("some error");
        })
    },[userData])
    return <userContext.Provider value={{ logInProgress, setlogInProgress, userData, loginwithemail, logout, loginwithgoogle, currentPage, setcurrentPage, signupwithemail, profileData, setProfileData}}>{children}</userContext.Provider>
}

export const useUserAuthContext = () => useContext(userContext);

