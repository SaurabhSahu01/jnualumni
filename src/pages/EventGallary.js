import { display } from '@mui/system'
import React from 'react'
import ShowEvent from './ShowEvent'
import ShowGallary from './ShowGallary'

import "./Pages.css"

function EventGallary() {
  return (
    <div className='event__gallary flex flex-wrap flex-center' >
      <div className='p-3'>
        <ShowEvent />
      </div>
      <div className='p-3'>
        <ShowGallary />
      </div>
    </div>
  )
}

export default EventGallary