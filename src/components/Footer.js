import React from 'react';
function Footer() {
    return (
        <div className='bg-blueaccent flex w-full '>
            <div className='py-6 px-10 max-w-5xl mx-auto'>
                <div className='grid grid-cols-3 gap-6 center'>
                    <div className='mb-5 p-6'>
                        <h1 className='text-2xl text-white mb-2 '>USEFUL LINKS</h1>
                        <ul className='text-white'>
                            <li className='m-1'>Join</li>
                            <li className='m-1'>About</li>
                            <li className='m-1'>Batchmates</li>
                            <li className='m-1'>Notice</li>
                        </ul>
                    </div>
                    <div className='mb-5 p-6'>
                    <h1 className='text-2xl text-white mb-2'>SERVICES</h1>
                        <ul className='text-white'>
                            <li className='m-1'>About Us</li>
                            <li className='m-1'>Terms and Conditions</li>
                            <li className='m-1'>Opportunities</li>
                            <li className='m-1'>Careers</li>
                        </ul>
                    </div>
                    <div className=' p-6'>
                    <h1 className='text-2xl text-white mb-2'>CONTACT</h1>
                        <ul className='text-white'>
                            <li className='mb-3'>Alumni Association of JNU (AAJ) <br></br> AAJ Office : Room No. 101 JNU Convention Centre, JNU, New Delhi-110067, India</li>
                            <li className='mb-3'>Mr Satyendra (Assistant Manager) +917011953096 <br></br>
                            Dr Maheep (Convenor Membership Drive) +919911963456</li>
                            <li className='mb-3'><a href='mailto: aajjnu1@gmail.com'>aajjnu1@gmail.com</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer