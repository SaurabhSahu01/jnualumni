import { display } from '@mui/system'
import React from 'react'
import ShowEvent from './ShowEvent'
import ShowGallary from './ShowGallary'

import "./Pages.css"

function EventGallary() {
  return (
    <div className='event__gallary' >
       <ShowEvent/>
       <ShowGallary/>
    </div>
  )
}

export default EventGallary