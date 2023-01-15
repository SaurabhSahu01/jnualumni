import React from 'react'
import Tab from './Tab'
import Gallery from '../../icons/image-gallery.png'
import Calendar from '../../icons/calendar.png'
import Newspaper from '../../icons/newspaper.png'
import Briefcase from '../../icons/briefcase.png'
const ExtraTabs = () => {
    return (
        <div className='w-5/6 flex flex-row flex-wrap justify-around mx-auto  p-8 rounded-2xl mb-5 bg-gradient-to-b from-yellow-700 via-yellow-500 to-yellow-700' >
            <div className='w-full sm:w-1/2 md:w-1/4'>
                <Tab src={Gallery} title='Gallery' />
            </div>
            <div className='w-full sm:w-1/2 md:w-1/4'>
                <Tab src={Calendar} title='Events' />
            </div>
            <div className='w-full sm:w-1/2 md:w-1/4'>
                <Tab src={Newspaper} title='Alumni News' />
            </div>
            <div className='w-full sm:w-1/2 md:w-1/4'>
                <Tab src={Briefcase} title='Career Opportunity' />
            </div>
        </div>
    );
}

export default ExtraTabs;