import React from 'react'

function EventCard(props) {
  return (
    <div className='bg-blueaccent p-1 rounded-lg shadow-xl w-full my-2 text-white'>
        <div className='flex flex-col text-center text-xl font-semibold my-1'>
            <span>Title</span>
            <span>Date: 26-01-2023</span>    
        </div>
        <div className='text-center my-3'>
            <span>Happy Republic Day</span>
        </div>
    </div>
  )
}

export default EventCard