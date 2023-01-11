// force user to complete his/her profile, now update the data into the firebase
import React from 'react'
import { useState } from 'react'
import userIcon from "../icons/profileIcon.png"
import { db } from "../firebase/firebase"
import { doc, setDoc } from "firebase/firestore"
import { useUserAuthContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'
import FinalHeader from '../components/FinalHeader'
import data from '../data/ProfileData.json'
import InputSelect from '../components/ProfileFormComponents/inputSelect'
import InputText from '../components/ProfileFormComponents/inputText'
function Profile() {
    const navigate = useNavigate();
    const { userData, setProfileCompleted } = useUserAuthContext();
    const [userProfile, setuserProfile] = useState({
        image: null,
        name: null,
        gender: null,
        DOB: null,
        phone: null,
        role: null,
        program: null, 
        school: null,
        yearOfJoin: null,
        yearOfGrad: null,
        currAdd: null,
        currLoc: null,
        PIN: null
    })
    const {image, name, gender, DOB, phone, role, program, school, yearOfJoin, yearOfGrad, currAdd, currLoc, PIN} = userProfile;
    function displayImage(e) {
        if (e.target.files) {
            setuserProfile({ ...userProfile, image: URL.createObjectURL(e.target.files[0]) })
        }
        else {
            // set from the database
        }
    }
    const handleChange = (e) => {
        const {name, value} = e.target;
        setuserProfile({ ...userProfile, [name]: value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();    
        await setDoc(doc(db, "users", userData.uid), userProfile)
        .then(()=>{
            setProfileCompleted(true);
            navigate("/");
        })
    }
    console.log(userProfile);
    return (
        <>
            <FinalHeader></FinalHeader>
            <div className='rounded-[20px] w-11/12 mx-auto my-10 self-center bg-white grid place-items-center'>
                <div className='w-11/12 my-5 flex flex-wrap'>
                    <div className='w-1/3'>
                        <div className='mx-auto' style={{ position: "relative" }}>
                            <label for="image">{(userProfile.image === null) ? (<img src={userIcon} alt="user" className='rounded-full border-gray-400 border-[1px] h-48 w-48 object-contain' />) : (<img src={userProfile.image} alt="user" className='rounded-full border-gray-400 border-[1px] h-48 w-48 object-contain' />)}</label>
                            <input id="image" type="file" accept="image/*" style={{ display: "none" }} onChange={displayImage} />
                        </div>
                    </div>
                    <div className='w-2/3 my-auto mx-auto col-span-2'>
                        <InputText type="text" name="name" placeholder="Full Name*" onChange={handleChange}></InputText>
                    </div>
                    <p className='w-full text-2xl mt-4 text-gray-700'>User Info*</p>
                    <hr />
                    <div className='w-1/3 p-6'>
                        <h1 className='text-blue-700'>Select Gender*</h1>
                        <InputSelect options={data.gender} name="gender" onChange={handleChange} />
                    </div>
                    <div className='w-1/3 p-6'>
                        <h1 className='text-blue-700'>Date of Birth*</h1>
                        <InputText type="date" name="DOB" placeholder="Date of Birth" onChange={handleChange} />
                    </div>
                    <div className='w-1/3 p-6'>
                        <h1 className='text-blue-700'>Phone Number*</h1>
                        <InputText name="phone" type="tel" placeholder="Enter phone number" onChange={handleChange} />
                    </div>
                    <p className='w-full text-2xl mt-4 text-gray-700'>School Info*</p>
                    <hr />
                    <div className='w-1/3 p-6'>
                        <h1 className='text-blue-700'>Select Role*</h1>
                        <InputSelect options={data.roles} onChange={handleChange} name="role"/>
                    </div>
                    <div className='w-1/3 p-6'>
                        <h1 className='text-blue-700'>Select Program*</h1>
                        <InputSelect options={data.program} onChange={handleChange} name="program"/>
                    </div>
                    <div className='w-1/3 p-6'>
                        <h1 className='text-blue-700'>Select School*</h1>
                        <InputSelect options={data.school} onChange={handleChange} name="school"/>
                    </div>
                    <div className='w-1/3 p-6'>
                        <h1 className='text-blue-700'>Select Year of Joining*</h1>
                        <InputSelect options={data.JoinYear} onChange={handleChange} name="yearOfJoin"/>
                    </div>
                    <div className='w-1/3 p-6'>
                        <h1 className='text-blue-700'>Select Year of Graduation*</h1>
                        <InputSelect options={data.GradYear} onChange={handleChange} name="yearOfGrad"/>
                    </div>
                    <p className='w-full text-2xl mt-4 text-gray-700'>Address*</p>
                    <hr />
                    <div className='w-1/3 p-6'>
                        <h1 className='text-blue-700'>Current Address*</h1>
                        <InputText name="currAdd" placeholder="Enter Address" onChange={handleChange}/>
                    </div>
                    <div className='w-1/3 p-6'>
                        <h1 className='text-blue-700'>Current Location*</h1>
                        <InputText name="currLoc" placeholder="Enter Location" onChange={handleChange} />
                    </div>
                    <div className='w-1/3 p-6'>
                        <h1 className='text-blue-700'>Current Pin Code*</h1>
                        <InputText name="PIN" type="number" placeholder="Enter Pin Code" onChange={handleChange} />
                    </div>

                </div>
                {((image && name && gender && DOB && phone && role && program && school && yearOfJoin && yearOfGrad && currAdd && currLoc && PIN) === null) ? (<button type="button" className='m-4 text-white rounded-lg p-2 bg-[#4e299e6e] font-semibold cursor-not-allowed' disabled>Submit</button>) : (<button type="button" className='m-4 text-white rounded-lg p-2 bg-[#4e299e] font-semibold transition duration-150 hover:scale-105'  onClick={handleSubmit}>Submit</button>)}    
            </div>
        </>
    )
}

export default Profile