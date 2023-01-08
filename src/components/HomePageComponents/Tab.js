import React from 'react'
const Tab = (props) => {
    return ( 
        <div className='flex flex-col items-center'>
            <div className='absolute z-10'>
                <div className='h-20 z-10'>
                    <div className='p-4 w-24 h-24 m-1 bg-blueaccent rounded-full'>
                        <img src={props.src} alt='img' className=' z-10 h-12 w-12 m-auto  object-cover self-center '></img>
                    </div>
                </div>
            </div>
            <div className='relative top-0 z-0'>
                <div className='h-20'>
                    
                </div>
            <div className='w-48 h-16 bg-bgoffwhite rounded-2xl z-0'>
                <p className='text-xl font-semibold text-center w-full pt-4'>{props.title}</p>
            </div>
            </div>
        </div>
     );
}
 
export default Tab;