import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import img from '../../images/avatar.png'

function FormPage3() {
    const [profileImage, setProfileImage] = useState('');

    const handleProfileImageChange = (e) => {
        setProfileImage(e.target.value);
    }



    return (

        <div className='flex w-full bg-bgoffwhite items-start h-full mt-10'>
            <div className='bg-[#d2d2d4] self-center m-auto p-10 rounded-2xl w-1/2 mt-10'>
                <div className="App">
                    <h1 className='text-blue-800 text-2xl'>Profile Photo</h1>
                    <img src={img} alt="profile" className='rounded-full w-48 h-48 mx-auto'/>
                    <div className='w-full flex mt-4'>
                        <button className="ml-auto text-black rounded-lg p-2 bg-neutral-100 font-semibold transition duration-150 hover:scale-105" >Previous</button>
                        <button className="ml-2 text-white rounded-lg p-2 bg-[#4e299e] font-semibold transition duration-150 hover:scale-105" >Submit</button>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default FormPage3;
