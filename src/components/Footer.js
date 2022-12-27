import React from 'react';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import { Link } from "react-router-dom";
import { Home } from '@mui/icons-material';
function Footer() {
    return (
        <div className="bg-blueaccent">
            <div className='w-11/12 mx-auto grid grid-cols-3 gap-1 py-5 text-white'>
                <div className='grid justify-items-center'>
                    <span className='text-2xl text-bold'>USEFUL LINKS</span>
                    <ul className='mt-4 text-lg font-semibold'>
                        <li className="my-1">Join</li>
                        <li className="my-1">About</li>
                        <li className="my-1">Batchmates</li>
                        <li className="my-1">Notice</li>
                    </ul>
                </div>
                <div className="grid justify-items-center">
                    <span className='text-2xl text-bold'>SERVICES</span>
                    <ul className='mt-4 text-lg font-semibold'>
                        <li className="my-1">About Us</li>
                        <li className="my-1">Terms and Conditions</li>
                        <li className="my-1">Opportunities</li>
                        <li className="my-1">Career</li>
                    </ul>

                </div>
                <div className="grid justify-items-center">
                    <span className='text-2xl text-bold'>CONTACT</span>
                    <ul className='mt-4 text-lg font-semibold'>
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
                            <Link to="#" href="window.mailto=""></Link>
                        </li>
                        
                    </ul>

                </div>
            </div>
        </div>
    )
}

export default Footer