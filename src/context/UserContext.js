import React, { useContext } from 'react'
import { createContext, useState, useEffect } from "react";
import { signInWithEmailAndPassword,getAuth, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup,createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase/firebase';
import {db} from '../firebase/firebase';
import { collection, doc,getDoc,setDoc } from "firebase/firestore";



export const userContext = createContext();
const provider = new GoogleAuthProvider();

export const UserContextProvider = ({ children }) => {
   
    const [userData, setuserData] = useState();
    
    const [logInProgress, setlogInProgress] = useState(false);
    const [currentPage, setcurrentPage] = useState()
    var userid = ""
    const loginwithemail = (email, pass) => {
        return signInWithEmailAndPassword(auth, email, pass);
    }

    const SignUp = (email,password)=> { 
        console.log("email - ", email)
         createUserWithEmailAndPassword(auth,email,password)
      

    };
    

   

    const logout = () => {
        setTimeout(() => {
            signOut(auth);    
        }, 2000);
    }


    const loginwithgoogle = () => {
        return signInWithPopup(auth, provider);
    }

      
    const getProfile = async(userid)=>{
        try {
           
            const docRef = await doc(db, "userdata", userid);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                console.log("Document data:",docSnap.data() );
                

            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }

           
       
 
        }catch(err){
            alert(err)
        }
    
       

    }



    
    
    
    const setProfile = async(user)=>{
        try {
            const citiesRef = await collection(db, "userdata");
           
            await console.log("useridset",user.uid)


            await setDoc(doc(citiesRef,user.uid),{
                id:user.uid,
                email:user.email
            });
             userid = user.uid
            
            console.log("data", userid)
            // await getProfile(user.uid);
          
           
        
 
        }catch(err){
            alert(err)
        }
       

    }
 

    useEffect(() => {
       
        
        const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
            setuserData(currentuser)
            
        });
        return unsubscribe;
    }, [])

    return <userContext.Provider value={{ logInProgress, setlogInProgress, loginwithemail, logout, loginwithgoogle, currentPage, setcurrentPage , setuserData,SignUp,setProfile, userData}}>{children}</userContext.Provider>
}

export const useUserAuthContext = () => useContext(userContext);

