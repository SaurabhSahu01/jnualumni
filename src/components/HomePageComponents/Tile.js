import React from 'react'
function Tile(props) {
    return (
        <div className='flex flex-row'>
            <div className='p-2 md:w-1/6 w-1/3 sm:1/4'>
                <img src={props.src} className='w-16 h-16 rounded-sm p-1 object-cover self-center m-1' />
            </div>
            <div className='md:w-5/6 w-2/3 sm:3/4'>
                <p className='text-l font-bold '>{props.title}</p>
                <p className='text-sm'>{props.desc}</p>
            </div>
        </div>
    )
}

export default Tile