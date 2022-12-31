import { useState,createContext,useContext,useEffect} from 'react';
import {  signInWithEmailAndPassword,createUserWithEmailAndPassword,signOut,onAuthStateChanged,GoogleAuthProvider,FacebookAuthProvider,signInWithPopup,sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebaseConfig";


const userAuthContext = createContext();

export const UserAuthContextProvider = ({children})=>{

    
    const [userdata,setuserdata] = useState({});
   
    const SignUp = (email,password)=> createUserWithEmailAndPassword(auth,email,password);
    const logIn = (email,password)=> signInWithEmailAndPassword(auth,email,password);
    const logOut = ()=> signOut(auth);
    const GoogleAuth = ()=>{
        const googleAuthProvider = new GoogleAuthProvider();
        return signInWithPopup(auth,googleAuthProvider);
    }
    // const Forgetpswd = ()=>{
    //     s
    // }
    const FacebookAuth = ()=>{
        const facebookAuthProvider = new FacebookAuthProvider();
        return signInWithPopup(auth,facebookAuthProvider);
    }

    useEffect(() => {
         const islogin = onAuthStateChanged(auth, (currentuserdata) => setuserdata(currentuserdata));
         return () => islogin();
    },[])

   

    return <userAuthContext.Provider value = {{userdata, logIn, SignUp,logOut,GoogleAuth,FacebookAuth}}> {children} </userAuthContext.Provider>
}

export const useUserAuth = ()=> useContext(userAuthContext);
console.log(useUserAuth);




