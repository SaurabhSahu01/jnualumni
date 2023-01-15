import React from 'react'
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import { Link } from "react-router-dom";
import { Home } from '@mui/icons-material';
function MobileFooter() {
  return (
    <div className="bg-blueaccent">
            <div className='w-11/12 h-full mx-auto grid grid-rows-3 text-white'>
                <div className='grid justify-items-center border-gray-500 border-b-[1px]'>
                    <p className='text-2xl font-bold my-auto text-center tracking-widest border-gray-500 border-b-[1px]'>USEFUL LINKS</p>
                    <ul className='text-lg font-semibold text-center place-items-center'>
                        <li className="mb-5">Join</li>
                        <li className="mb-5">About</li>
                        <li className="mb-5">Batchmates</li>
                        <li className="mb-1">Notice</li>
                    </ul>
                </div>
                <div className="grid justify-items-center border-gray-500 border-b-[1px]">
                    <p className='text-2xl font-bold my-auto text-center tracking-widest border-gray-500 border-b-[1px]'>SERVICES</p>
                    <ul className='text-lg font-semibold text-center place-items-center'>
                        <li className="mb-5">About Us</li>
                        <li className="mb-5">Terms and Conditions</li>
                        <li className="mb-5">Opportunities</li>
                        <li className="mb-1">Career</li>
                    </ul>
                </div>
                <div className="w-full mx-auto grid justify-items-center mt-4">
                    <p className='text-2xl font-bold my-auto text-center tracking-widest border-gray-500 border-b-[1px]'>CONTACT</p>
                    <ul className='w-full grid grid-cols-1 justify-center text-lg font-semibold my-4'>
                        <li className="my-1 flex justify-center">
                            <CallIcon className='justify-self-center' fontSize='large'></CallIcon>
                            <div className="w-6/12 flex-col tracking-wider ml-2">
                                <p>Mr. Satyendra (Assistant Manager)</p>
                                <p>+91-7011953096</p>
                                <p>Dr. Maheep (Convernor Membership Drive)</p>
                                <p>+91-9911963456</p>
                            </div>
                        </li>
                        <li className=" my-1 flex justify-center">
                            <Home className='justify-self-center' fontSize='large'></Home>
                            <div className="w-6/12 flex-col tracking-wider ml-2">
                                <p>Alumni Association of JNU(AAJ)</p>
                                <p>AAJ Office: Room No. 101</p>
                                <p>JNU Convention Center,</p>
                                <p>JNU, New Delhi-110067,</p>
                                <p>India</p>
                            </div>
                        </li>
                        <li className="my-1 flex justify-center">
                            <EmailIcon className='justify-self-center' fontSize='large'></EmailIcon>
                            <Link to="#" className="w-6/12 tracking-wider ml-2" onClick={(e) => {
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

export default MobileFooter