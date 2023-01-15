import React from 'react'
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import { Link } from "react-router-dom";
import { Home } from '@mui/icons-material';
function TabFooter() {
    return (
        <div className="bg-blueaccent">
            <div className='w-11/12 mx-auto grid grid-rows-2 gap-1 py-5 text-white'>
                <div className='grid grid-cols-2 gap-1 border-gray-500 border-b-[1px]'>
                    <div className='grid justify-items-center border-gray-500 border-r-[1px]'>
                        <p className='text-2xl font-bold my-auto text-center tracking-widest border-gray-500 border-b-[1px]'>USEFUL LINKS</p>
                        <ul className='grid text-lg font-semibold text-center my-auto'>
                            <li className="mb-4">Join</li>
                            <li className="mb-4">About</li>
                            <li className="mb-4">Batchmates</li>
                            <li className="mb-1">Notice</li>
                        </ul>
                    </div>
                    <div className="grid justify-items-center">
                        <p className='text-2xl font-bold my-auto text-center tracking-widest border-gray-500 border-b-[1px]'>SERVICES</p>
                        <ul className='grid text-lg font-semibold text-center my-auto'>
                            <li className="mb-4">About Us</li>
                            <li className="mb-4">Terms and Conditions</li>
                            <li className="mb-4">Opportunities</li>
                            <li className="mb-1">Career</li>
                        </ul>

                    </div>
                </div>
                <div className="w-full mx-auto grid justify-items-center mt-4">
                    <p className='text-2xl font-bold my-auto text-center tracking-widest border-gray-500 border-b-[1px]'>CONTACT</p>
                    <ul className='w-full flex justify-center text-lg font-semibold my-4 gap-5'>
                        <li className="my-1 flex justify-center">
                            <CallIcon className='justify-self-center' fontSize='large'></CallIcon>
                            <div className="flex-col tracking-wider ml-2">
                                <p>Mr. Satyendra (Assistant Manager)</p>
                                <p>+91-7011953096</p>
                                <p>Dr. Maheep (Convernor Membership Drive)</p>
                                <p>+91-9911963456</p>
                            </div>
                        </li>
                        <li className=" my-1 flex justify-center">
                            <Home className='justify-self-center' fontSize='large'></Home>
                            <div className="flex-col tracking-wider ml-2">
                                <p>Alumni Association of JNU(AAJ)</p>
                                <p>AAJ Office: Room No. 101</p>
                                <p>JNU Convention Center,</p>
                                <p>JNU, New Delhi-110067,</p>
                                <p>India</p>
                            </div>
                        </li>
                        <li className="my-1 flex justify-center">
                            <EmailIcon className='justify-self-center' fontSize='large'></EmailIcon>
                            <Link to="#" className="tracking-wider ml-2" onClick={(e) => {
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

export default TabFooter