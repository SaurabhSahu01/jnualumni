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
import EditIcon from '@mui/icons-material/Edit';
import Loader from "../components/Loader/Loader";
function Profile() {
    const navigate = useNavigate();
    const { userData, setProfileData, profileData } = useUserAuthContext();
    const [loader, setloader] = useState(false)
    const [editmode, seteditmode] = useState(false);
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
        PIN: null,
        about: null
    })
    const { image, name, gender, DOB, phone, role, program, school, yearOfJoin, yearOfGrad, currAdd, currLoc, PIN, about } = userProfile;
    function displayImage(e) {
        if (e.target.files) {
            setuserProfile({ ...userProfile, image: URL.createObjectURL(e.target.files[0]) })
        }
        else {
            // set from the database
        }
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setuserProfile({ ...userProfile, [name]: value })
    }
    const handleSubmit = (e) => {
        setloader(true);
        e.preventDefault();
        console.log("hello")
        setTimeout(async()=>{
            await setDoc(doc(db, "users", userData.uid), userProfile)
                .then(() => {
                    setProfileData({ ...profileData, profileCompleted: true });
                    seteditmode(false);
                    setloader(false);
                    navigate("/");
                })
        },1000)
    }
    return (
        <>
            {loader ? (<Loader></Loader>) : (<></>)}
            <FinalHeader></FinalHeader>
            {((profileData.data !== null) ^ (editmode)) ? (<section className="pt-10 bg-blueGray-50">
                <div className="w-full lg:w-9/12 px-4 mx-auto">
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
                        <div className="px-6">
                            <div className="flex flex-wrap justify-center">
                                <div className="w-full px-4 flex justify-center">
                                    <div className='relative flex justify-center'>
                                        <img src={userIcon} alt="#" className='shadow-xl rounded-full h-auto align-middle border-none absolute top-[-60px] max-w-[150px]' />
                                    </div>
                                </div>
                                <div className='w-full flex flex-row justify-end place-items-center my-3 cursor-pointer gap-2' onClick={()=>seteditmode(true)}>
                                    <EditIcon></EditIcon>    
                                    <span className="font-semibold">Edit</span>
                                </div>
                            </div>
                            <div className="text-center mt-28">
                                <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700">
                                    {profileData.data.name} <span className='text-sm'>({profileData.data.gender})</span>
                                </h3>
                                <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                                    <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                                    {profileData.data.currAdd}, {profileData.data.PIN}
                                </div>
                                <div className="mb-2 text-blueGray-600 mt-10">
                                    <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                                    {profileData.data.role}
                                </div>
                                <div className="mb-2 text-blueGray-600">
                                    <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                                    {profileData.data.program}, {profileData.data.school}, {profileData.data.yearOfJoin} - {profileData.data.yearOfGrad}
                                </div>
                                <div className="mb-2 text-blueGray-600">
                                    <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                                    {profileData.data.phone}
                                </div>
                            </div>
                            <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                                <div className="flex flex-wrap justify-center">
                                    <div className="w-full lg:w-9/12 px-4">
                                        <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                                            {profileData.data.about}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>) : (<div className='rounded-[20px] w-11/12 mx-auto my-10 self-center bg-white grid place-items-center'>
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
                    <div className='w-1/3 p-6'>
                        <h1 className='text-blue-700'>About*</h1>
                        <InputText name="about" type="text" placeholder="Something about yourself" onChange={handleChange} />
                    </div>
                    <p className='w-full text-2xl mt-4 text-gray-700'>School Info*</p>
                    <hr />
                    <div className='w-1/3 p-6'>
                        <h1 className='text-blue-700'>Select Role*</h1>
                        <InputSelect options={data.roles} onChange={handleChange} name="role" />
                    </div>
                    <div className='w-1/3 p-6'>
                        <h1 className='text-blue-700'>Select Program*</h1>
                        <InputSelect options={data.program} onChange={handleChange} name="program" />
                    </div>
                    <div className='w-1/3 p-6'>
                        <h1 className='text-blue-700'>Select School*</h1>
                        <InputSelect options={data.school} onChange={handleChange} name="school" />
                    </div>
                    <div className='w-1/3 p-6'>
                        <h1 className='text-blue-700'>Select Year of Joining*</h1>
                        <InputSelect options={data.JoinYear} onChange={handleChange} name="yearOfJoin" />
                    </div>
                    <div className='w-1/3 p-6'>
                        <h1 className='text-blue-700'>Select Year of Graduation*</h1>
                        <InputSelect options={data.GradYear} onChange={handleChange} name="yearOfGrad" />
                    </div>
                    <p className='w-full text-2xl mt-4 text-gray-700'>Address*</p>
                    <hr />
                    <div className='w-1/3 p-6'>
                        <h1 className='text-blue-700'>Current Address*</h1>
                        <InputText name="currAdd" placeholder="Enter Address" onChange={handleChange} />
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
                <div className="flex justify-center self-center m-2 gap-2">
                    <button type="button" className='m-1 text-white rounded-lg p-2 bg-[#4e299e] font-semibold transition duration-150 hover:scale-105' onClick={()=>seteditmode(false)}>Back</button>
                    {((name && gender && DOB && phone && role && program && school && yearOfJoin && yearOfGrad && currAdd && currLoc && PIN && about) === null) ? (<button type="button" className='m-1 text-white rounded-lg p-2 bg-[#4e299e6e] font-semibold cursor-not-allowed' disabled>Submit</button>) : (<button type="button" className='m-1 text-white rounded-lg p-2 bg-[#4e299e] font-semibold transition duration-150 hover:scale-105' onClick={handleSubmit}>Submit</button>)}
                </div>
            </div>)}

        </>
    )
}

export default Profile