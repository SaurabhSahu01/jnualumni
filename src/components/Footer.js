import React from 'react';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import {Link} from "react-router-dom";
import { Home } from '@mui/icons-material';
function Footer() {
    return (
        <div className='bg-blueaccent flex w-full '>
            <div className='py-6 px-10 max-w-5xl mx-auto'>
                <div className='grid grid-cols-3 gap-20 center'>
                    <div className='mb-5 p-6'>
                        <h1 className='text-2xl text-white mb-2 font-semibold'>USEFUL LINKS</h1>
                        <ul className='text-white'>
                            <li className='m-1'>Join</li>
                            <li className='m-1'>About</li>
                            <li className='m-1'>Batchmates</li>
                            <li className='m-1'>Notice</li>
                        </ul>
                    </div>
                    <div className='mb-5 p-6'>
                    <h1 className='text-2xl text-white mb-2 font-semibold'>SERVICES</h1>
                        <ul className='text-white'>
                            <li className='m-1'>About Us</li>
                            <li className='m-1'>Terms and Conditions</li>
                            <li className='m-1'>Opportunities</li>
                            <li className='m-1'>Careers</li>
                        </ul>
                    </div>
                    <div className='p-6'>
                        <h1 className='text-2xl text-white mb-2 ml-11 font-semibold'>CONTACT</h1>
                        <ul className='text-white'>    
                            <li className='mb-3 flex  self-center gap-2'>
                                <Home fontSize='large' className="flex-2"></Home>
                                <span className='flex-3'>Alumni Association of JNU (AAJ) AAJ Office : Room No. 101 JNU Convention Centre, JNU, New Delhi-110067, India</span>
                            </li>
                            <li className='mb-3 flex gap-2  self-center'>
                                <CallIcon fontSize='large' className='flex-2'></CallIcon>
                                <span className="flex-1">Mr Satyendra (Assistant Manager) +917011953096 
                                Dr Maheep (Convenor Membership Drive) +919911963456</span>
                            </li>
                            <li className='mb-3 flex gap-2  self-center'>
                                <EmailIcon fontSize="large" className='flex-2'></EmailIcon>
                                <Link to="#" onClick={(e) => {
                                    window.location.href = 'mailto: aajjnu1@gmail.com';
                                    e.preventDefault();
                                }} className="flex-2">aajjnu1@gmail.com</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer