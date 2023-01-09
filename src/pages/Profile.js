// force user to complete his/her profile, now update the data into the firebase
import React from 'react'
import { useState } from 'react'
import userIcon from "../icons/userIcon.png"
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

    const [profileData, setprofileData] = useState({ image: null, });
    const { userData } = useUserAuthContext();

    const [role, setRole] = useState('');
    const [program, setProgram] = useState('');
    const [school, setSchool] = useState('');
    const [joinYear, setJoin] = useState('');
    const [gradYear, setGrad] = useState('');
    const [gender, setGender] = useState('');
    const [dob, setDob] = useState('');
    const [phone, setPhone] = useState('');
    const [location, setLocation] = useState('');
    const [currAdd, setCAdd] = useState('');
    const [currloc, setCLoc] = useState('');
    const [currZip, setCZip] = useState('');

    const handleGenderChange = (e) => {
        setGender(e.target.value);
    }
    const handleDobChange = (e) => {
        setDob(e.target.value);
    }
    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
    }
    const handleLocChange = (e) => {
        setLocation(e.target.value);
    }
    const handleCAddChange = (e) => {
        setCAdd(e.target.value);
    }
    const handleCLocChange = (e) => {
        setCLoc(e.target.value);
    }
    const handleCZipChange = (e) => {
        setCZip(e.target.value);
    }
    const handleRoleChange = (e) => {
        setRole(e.target.value);
    }

    const handleProgramChange = (e) => {
        setProgram(e.target.value);
    }

    const handleSchoolChange = (e) => {
        setSchool(e.target.value);
    }

    const handleJoinChange = (e) => {
        setJoin(e.target.value);
    }

    const handleGradChange = (e) => {
        setGrad(e.target.value);
    }

    function displayImage(e) {
        if (e.target.files) {
            setprofileData({ ...profileData, image: URL.createObjectURL(e.target.files[0]) })
        }
        else {
            // set from the database
        }
    }
    const handleName = (e) => {
        setprofileData({ ...profileData, name: e.target.value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (profileData.name !== "") {
            await setDoc(doc(db, "users", userData.uid), {
                name: profileData.name,
            })
            navigate("/");
        }
    }
    console.log(data)
    return (
        <>
            <FinalHeader></FinalHeader>
            <div className='rounded-[20px] w-11/12 mx-auto my-10 self-center bg-white grid place-items-center'>
                <div className='w-11/12 my-5 flex flex-wrap'>
                    <div className='w-1/3'>
                        <div className='mx-auto' style={{ position: "relative" }}>
                            <label for="image">{(profileData.image === null) ? (<img src={userIcon} alt="user" className='rounded-full border-gray-400 border-[1px] h-48 w-48 object-contain' />) : (<img src={profileData.image} alt="user" className='rounded-full border-gray-400 border-[1px] h-48 w-48 object-contain' />)}</label>
                            <input id="image" type="file" accept="image/*" style={{ display: "none" }} onChange={displayImage} />
                        </div>
                    </div>
                    <div className='w-2/3 my-auto mx-auto col-span-2'>
                        <input type="text" name="username" placeholder='Username*' className='my-2 text-3xl font-semibold w-[100%] text-center outline-none border-gray-400 border-b-2' onChange={handleName} />
                    </div>
                    <p className='w-full text-2xl mt-4 text-gray-700'>User Info*</p>
                    <hr />
                    <div className='w-1/3 p-6'>
                        <h1 className='text-blue-700'>Select Gender*</h1>
                        <InputSelect options={data.gender} onChange={handleGenderChange} />
                    </div>
                    <div className='w-1/3 p-6'>
                        <h1 className='text-blue-700'>Date of Birth*</h1>
                        <InputText name="Dob" placeholder="Date of Birth" onChange={handleDobChange} />
                    </div>
                    <div className='w-1/3 p-6'>
                        <h1 className='text-blue-700'>Phone Number*</h1>
                        <InputText name="phone" placeholder="Enter phone number" onChange={handlePhoneChange} />
                    </div>
                    <p className='w-full text-2xl mt-4 text-gray-700'>School Info*</p>
                    <hr />
                    <div className='w-1/3 p-6'>
                        <h1 className='text-blue-700'>Select Role*</h1>
                        <InputSelect options={data.roles} onChange={handleRoleChange} />
                    </div>
                    <div className='w-1/3 p-6'>
                        <h1 className='text-blue-700'>Select Program*</h1>
                        <InputSelect options={data.program} onChange={handleProgramChange} />
                    </div>
                    <div className='w-1/3 p-6'>
                        <h1 className='text-blue-700'>Select School*</h1>
                        <InputSelect options={data.school} onChange={handleSchoolChange} />
                    </div>
                    <div className='w-1/3 p-6'>
                        <h1 className='text-blue-700'>Select Year of Joining*</h1>
                        <InputSelect options={data.JoinYear} onChange={handleJoinChange} />
                    </div>
                    <div className='w-1/3 p-6'>
                        <h1 className='text-blue-700'>Select Year of Graduation*</h1>
                        <InputSelect options={data.GradYear} onChange={handleGradChange} />
                    </div>
                    <p className='w-full text-2xl mt-4 text-gray-700'>Address*</p>
                    <hr />
                    <div className='w-1/3 p-6'>
                        <h1 className='text-blue-700'>Current Address*</h1>
                        <InputText name="phone" placeholder="Enter Address" onChange={handlePhoneChange} />
                    </div>
                    <div className='w-1/3 p-6'>
                        <h1 className='text-blue-700'>Current Location*</h1>
                        <InputText name="phone" placeholder="Enter Location" onChange={handlePhoneChange} />
                    </div>
                    <div className='w-1/3 p-6'>
                        <h1 className='text-blue-700'>Current Pin Code*</h1>
                        <InputText name="phone" placeholder="Enter Pin Code" onChange={handlePhoneChange} />
                    </div>

                </div>
                
                <button type="button" className='btn btn-success bg-blue-600 my-5' onClick={handleSubmit}>Submit</button>
            </div>
        </>
    )
}

export default Profile