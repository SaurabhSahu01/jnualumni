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
                        <p className='text-2xl font-bold my-auto text-center tracking-widest'>USEFUL LINKS</p>
                        <ul className='grid text-lg font-semibold text-center my-auto'>
                            <li className="mb-4">Join</li>
                            <li className="mb-4">About</li>
                            <li className="mb-4">Batchmates</li>
                            <li className="mb-1">Notice</li>
                        </ul>
                    </div>
                    <div className="grid justify-items-center">
                        <p className='text-2xl font-bold my-auto text-center tracking-widest'>SERVICES</p>
                        <ul className='grid text-lg font-semibold text-center my-auto'>
                            <li className="mb-4">About Us</li>
                            <li className="mb-4">Terms and Conditions</li>
                            <li className="mb-4">Opportunities</li>
                            <li className="mb-1">Career</li>
                        </ul>

                    </div>
                </div>
                <div className="w-8/12 mx-auto grid justify-items-center mt-4">
                    <p className='text-2xl font-bold my-auto text-center tracking-widest'>CONTACT</p>
                    <ul className='w-full mx-auto text-lg font-semibold grid grid-cols-1 my-4'>
                        <li className="my-1 grid grid-cols-5">
                            <CallIcon className='justify-self-center grid col-span-1' fontSize='large'></CallIcon>
                            <div className="flex-col grid col-span-4">
                                <p>Mr. Satyendra (Assistant Manager)</p>
                                <p>+91-7011953096</p>
                                <p>Dr. Maheep (Convernor Membership Drive)</p>
                                <p>+91-9911963456</p>
                            </div>
                        </li>
                        <li className="my-1 grid grid-cols-5">
                            <Home className='justify-self-center grid col-span-1' fontSize='large'></Home>
                            <div className="flex-col grid col-span-4">
                                <p>Alumni Association of JNU(AAJ)</p>
                                <p>AAJ Office: Room No. 101</p>
                                <p>JNU Convention Center,</p>
                                <p>JNU, New Delhi-110067,</p>
                                <p>India</p>
                            </div>
                        </li>
                        <li className="my-1 grid grid-cols-10">
                            <EmailIcon className='mx-auto grid col-span-2' fontSize='large'></EmailIcon>
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

export default TabFooter