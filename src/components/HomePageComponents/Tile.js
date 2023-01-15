import React from 'react'
function Tile(props) {
    return (
        <div className='flex flex-row'>
            <div className='p-2 w-1/6'>
                <img src={props.src} alt="img" className='w-16 h-16 rounded-sm p-1 object-cover self-center m-1'/>
            </div>
            <div className='w-5/6'>
                <p className='text-l font-bold'>{props.title}</p>
                <p className='text-sm'>{props.desc}</p>
            </div>
        </div>
    )
}

export default Tile