// force user to complete his/her profile, now update the data into the firebase
import React from 'react'
import { useState } from 'react'
import userIcon from "../icons/userIcon.png"
function Profile() {

    const [profileimage, setProfileImage] = useState(null);

    function displayImage(e){
        setProfileImage(URL.createObjectURL(e.target.files[0]))
    }
    return (
        <>
            <div className='rounded w-11/12 mx-auto my-10 self-center bg-white grid grid-rows-5 place-items-center'>
                <div className='w-11/12 my-5 row-span-3 grid grid-cols-3 place-items-center'>
                    <div className='col-span-1'>
                        <div className='mx-auto' style={{position: "relative"}}>
                            <label for="image">{(profileimage !== null) ? (<img src={profileimage} alt="user" className='rounded-full border-gray-400 border-[1px] h-48 w-48 object-contain'/>) : (<img src={userIcon} alt="user" className='rounded-full border-gray-400 border-[1px] h-48 w-48 object-contain'/>)}</label>
                            <input id="image" type="file" accept="image/*" style={{display: "none"}} onChange={displayImage}/>   
                        </div>
                    </div>
                    <div className='w-[70%] mx-auto col-span-2'>
                        <input type="text" name="username" placeholder='Username*' className='my-2 text-3xl font-semibold w-[100%] text-center outline-none border-gray-400 border-b-2'/>
                        <input type="text" name="age" placeholder='School*' className='my-2 text-3xl font-semibold w-[100%] text-center outline-none border-gray-400 border-b-2'/>    
                    </div>
                </div>
                <div className='row-span-2'>
                    
                </div>
            </div>
        </>
    )
}

export default Profile