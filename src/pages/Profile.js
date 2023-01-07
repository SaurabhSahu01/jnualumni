// force user to complete his/her profile, now update the data into the firebase
import React from 'react'
import { useState } from 'react'
import userIcon from "../icons/userIcon.png"
import {db} from "../firebase/firebase"
import {doc, setDoc} from "firebase/firestore"
import { useUserAuthContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'

function Profile() {
    const navigate = useNavigate();

    const [profileData, setprofileData] = useState({});
    const {userData} = useUserAuthContext();
    function displayImage(e){
        if(e.target.files){
            setprofileData({...profileData, image: URL.createObjectURL(e.target.files[0])})
        }
        else{
            // set from the database
        }
    }
    const handleName = (e) => {
        setprofileData({...profileData, name: e.target.value})
    }
    const handleSubmit = async(e) => {
        e.preventDefault();
        if(profileData.name !== ""){
            await setDoc(doc(db, "users", userData.uid), {
                name: profileData.name,
            })
            navigate("/");
        }
    }
    return (
        <>
            <div className='rounded w-11/12 mx-auto my-10 self-center bg-white grid grid-rows-5 place-items-center'>
                <div className='w-11/12 my-5 row-span-3 grid grid-cols-3 place-items-center'>
                    <div className='col-span-1'>
                        <div className='mx-auto' style={{position: "relative"}}>
                            <label for="image">{(profileData.image !== null) ? (<img src={profileData.image} alt="user" className='rounded-full border-gray-400 border-[1px] h-48 w-48 object-contain'/>) : (<img src={userIcon} alt="user" className='rounded-full border-gray-400 border-[1px] h-48 w-48 object-contain'/>)}</label>
                            <input id="image" type="file" accept="image/*" style={{display: "none"}} onChange={displayImage}/>   
                        </div>
                    </div>
                    <div className='w-[70%] mx-auto col-span-2'>
                        <input type="text" name="username" placeholder='Username*' className='my-2 text-3xl font-semibold w-[100%] text-center outline-none border-gray-400 border-b-2'onChange={handleName}/>
                    </div>
                </div>
                <div className='row-span-2'>
                    
                </div>
                <button type="button" className='btn btn-success bg-blue-600 my-5' onClick={handleSubmit}>Submit</button>
            </div>
        </>
    )
}

export default Profile