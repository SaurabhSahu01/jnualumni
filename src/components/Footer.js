import React from 'react';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import { Link } from "react-router-dom";
import { Home } from '@mui/icons-material';
function Footer() {
    return (
        <div className="bg-blueaccent">
            <div className='w-11/12 mx-auto flex flex-row flex-wrap py-5 text-white justify-around'>
                <div className='flex flex-col items-center w-2/7'>
                    <p className='text-2xl font-bold p-2'>USEFUL LINKS</p>
                    <ul className='text-lg font-semibold p-2'>
                        <li className="mb-3">Join</li>
                        <li className="mb-3">About</li>
                        <li className="mb-3">Batchmates</li>
                        <li className="mb-3">Notice</li>
                    </ul>
                </div>
                <div className="hidden lg:flex flex-col items-center w-2/7">
                    <p className='text-2xl font-bold p-2'>SERVICES</p>
                    <ul className='text-lg font-semibold p-2'>
                        <li className="mb-3">About Us</li>
                        <li className="mb-3">Terms and Conditions</li>
                        <li className="mb-3">Opportunities</li>
                        <li className="mb-3">Career</li>
                    </ul>

                </div>
                <div className="flex flex-col items-center w-3/7">
                    <p className='text-2xl font-bold p-2'>CONTACT</p>
                    <ul className='mt-4 text-lg font-semibold p-2'>
                        <li className="my-1 flex self-center">
                            <Home className='mx-2' fontSize='large'></Home>
                            <div className="flex-col">
                                <p>Alumni Association of JNU(AAJ)</p>
                                <p>AAJ Office: Room No. 101</p>
                                <p>JNU Convention Center,</p>
                                <p>JNU, New Delhi-110067,</p>
                                <p>India</p>
                            </div>
                        </li>
                        <li className="my-1 flex self-center">
                            <CallIcon className='mx-2' fontSize='large'></CallIcon>
                            <div className="flex-col">
                                <p>Mr Satyendra (Assistant Manager)</p>
                                <p>+91-7011953096</p>
                                <p>Dr. Maheep (Convernor Membership Drive)</p>
                                <p>+91-9911963456</p>
                            </div>
                        </li>
                        <li className="my-1 flex self-center">
                            <EmailIcon className='mx-2' fontSize='large'></EmailIcon>
                            <Link to="#" onClick={(e) => {
                                    window.location.href = 'mailto: aajjnu1@gmail.com';
                                    e.preventDefault();
                                }}>aajjnu1@gmail.com</Link>
                        </li>   
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer