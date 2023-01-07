import React from 'react'
import Tab from './Tab'
import Gallery from '../../icons/image-gallery.png'
import Calendar from '../../icons/calendar.png'
import Newspaper from '../../icons/newspaper.png'
import Briefcase from '../../icons/briefcase.png'
const ExtraTabs = () => {
    return ( 
    <div className='w-5/6 flex flex-row justify-around mx-auto  p-8 rounded-2xl mb-5 bg-gradient-to-b from-yellow-700 via-yellow-500 to-yellow-700' >
        <Tab src={Gallery} title='Gallery'/>
        <Tab src={Calendar} title='Events'/>
        <Tab src={Newspaper} title='Alumni News'/>
        <Tab src={Briefcase} title='Career Opportunity'/>    
    </div>
     );
}
 
export default ExtraTabs;