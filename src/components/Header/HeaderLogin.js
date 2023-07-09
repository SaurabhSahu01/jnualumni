import React from 'react'
import { useUserAuthContext } from '../../context/UserContext';
import JNU from "../../images/JNUlogopng.png";
import HomeIcon from '@mui/icons-material/Home';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import WorkIcon from '@mui/icons-material/Work';
import ForumIcon from '@mui/icons-material/Forum';
import userIcon from "../../icons/userIcon.png";
import InfoIcon from '@mui/icons-material/Info';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import { useNavigate } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LogoutIcon from '@mui/icons-material/Logout';

function HeaderLogin() {
    const navigate = useNavigate();
    const { userData, logout, currentPage, profileData } = useUserAuthContext();

    return (
        <div className='bg-bgoffwhite flex justify-center self-center w-11/12 mx-auto border-black border-b-2 py-2 sticky top-0 z-50'>
            <section className='flex-4 justify-center mx-2'>
                <div className="h-10 w-fit flex justify-between">
                    <img className="h-auto mr-3" src={JNU} alt="JNU_logo" />
                    <div className='flex-col justify-between h-fit my-auto'>
                        <span className='text-[18px] font-bold select-none'>JNU ALUMNI ASSOCIATION(REGD.)</span>
                    </div>
                </div>
            </section>
            <section className='flex-4 justify-center self-center mx-auto'>
                <ul className='grid grid-cols-6 justify-center self-center' id="navbar">
                    {(currentPage === "/") ? (<li className="flex flex-col cursor-pointer" onClick={() => { navigate("/") }}>
                        <HomeIcon className='mx-auto' style={{ color: "#0c437b" }}></HomeIcon>
                        <p className="text-[12px] my-0 text-center text-[black] font-medium">Home</p>
                    </li>) : (<li className="flex flex-col cursor-pointer" onClick={() => { navigate("/") }}>
                        <HomeIcon className='mx-auto' style={{ color: "#696969" }}></HomeIcon>
                        <p className="text-[12px] my-0 text-center text-[#696969] font-medium">Home</p>
                    </li>)}

                    {(currentPage === "/feeds") ? (<li className="flex flex-col cursor-pointer" onClick={() => {navigate("/feeds")}}>
                        <NewspaperIcon className='mx-auto' style={{ color: "#0c437b" }}></NewspaperIcon>
                        <p className="text-[12px] my-0 text-center text-[black] font-medium">Feeds</p>
                    </li>) : (<li className="flex flex-col cursor-pointer" onClick={() => navigate("/feeds")}>
                        <NewspaperIcon className='mx-auto' style={{ color: "#696969" }}></NewspaperIcon>
                        <p className="text-[12px] my-0 text-center text-[#696969] font-medium">Feeds</p>
                    </li>)}
                    
                    <li className="flex flex-col cursor-pointer">
                        <ForumIcon className='mx-auto' style={{ color: "#696969" }}></ForumIcon>
                        <p className="text-[12px] my-0 text-center text-[#696969] font-medium">Messaging</p>
                    </li>

                    {(currentPage === "/jobs") ? (<li className="flex flex-col cursor-pointer" onClick={() => { navigate("/jobs") }}>
                        <WorkIcon className='mx-auto' style={{ color: "#0c437b" }}></WorkIcon>
                        <p className="text-[12px] my-0 text-center text-[black] font-medium">Jobs</p>
                    </li>) : (<li className="flex flex-col cursor-pointer" onClick={() => { navigate("/jobs") }}>
                        <WorkIcon className='mx-auto' style={{ color: "#696969" }}></WorkIcon>
                        <p className="text-[12px] my-0 text-center text-[#696969] font-medium">Jobs</p>
                    </li>)}

                    {(currentPage === "/join") ? (<li className="flex flex-col cursor-pointer" onClick={() => { navigate("/join") }}>
                        <LoyaltyIcon className='mx-auto' style={{ color: "#0c437b" }}></LoyaltyIcon>
                        <p className="text-[12px] my-0 text-center text-[black] font-medium">Membership</p>
                    </li>) : (<li className="flex flex-col cursor-pointer" onClick={() => { navigate("/join") }}>
                        <LoyaltyIcon className='mx-auto' style={{ color: "#696969" }}></LoyaltyIcon>
                        <p className="text-[12px] my-0 text-center text-[#696969] font-medium">Membership</p>
                    </li>)}

                    {(currentPage === "/about") ? (<li className="flex flex-col cursor-pointer" onClick={() => { navigate("/about") }}>
                        <InfoIcon className='mx-auto' style={{ color: "#0c437b" }}></InfoIcon>
                        <p className="text-[12px] my-0 text-center text-[black] font-medium">About</p>
                    </li>) : (<li className="flex flex-col cursor-pointer" onClick={() => { navigate("/about") }}>
                        <InfoIcon className='mx-auto' style={{ color: "#696969" }}></InfoIcon>
                        <p className="text-[12px] my-0 text-center text-[#696969] font-medium">About</p>
                    </li>)}

                </ul>
            </section>
            <Dropdown className="outline-none">
                <section className='flex flex-4 justify-center self-center gap-2 cursor-pointer'>
                    <img src={(userData.photoURL) ? userData.photoURL : userIcon} alt="uesrIcon" className='w-10 h-10 object-contain rounded-full' />
                    <h3 className='my-auto font-semibold text-[#696969]'>{(profileData.data !== null) ? profileData.data.name : "Anonymous"}<span><Dropdown.Toggle className="outline-none hover:bg-transparent mx-1" style={{ color: "black", border: "none", background: "transparent" }}></Dropdown.Toggle></span></h3>
                </section>
                <Dropdown.Menu>
                    <Dropdown.Item onClick={() => { navigate("/profile") }}><PersonOutlineIcon className='my-auto'></PersonOutlineIcon><span className='my-auto mx-1'>My Profile</span></Dropdown.Item>
                    <Dropdown.Item onClick={() => { logout() }}><LogoutIcon></LogoutIcon><span className='my-auto mx-1'>Logout</span></Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}

export default HeaderLogin