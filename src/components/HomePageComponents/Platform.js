import React from 'react';
import PlatformCard from './PlatformCard'
import User from '../../icons/User.png'
import UserGroup from '../../icons/user-group.png'
import PersUser from '../../icons/personalUser.png'
import Location from '../../icons/location.png'
const Platform = () => {
    return (
        <div className="w-11/12 mx-auto">
            <span className='text-blueaccent flex justify-center self-center text-3xl font-semibold'>AAJ Alumni Platform</span>
            <div className='flex justify-center self-center my-5 gap-5'>
                <PlatformCard src={User} desc="Explore complete Alumni directory & connect with Alumni with your interests & domain" title="Alumni Directory"></PlatformCard>
                <PlatformCard src={UserGroup} desc="View our exclusive batchmates directory to know about whereabouts of your batchmates" title="Your Batchmate"></PlatformCard>
                <PlatformCard src={Location} desc="Find Alumni in your city & be a part of local meet-ups" title="Alumni in your vicinity"></PlatformCard>
                <PlatformCard src={PersUser} desc="Create & complete your Alumni profile & remain connected with all opportunities matching your interest" title="Your Alumni Profile"></PlatformCard>
            </div>
        </div>
    );
}

export default Platform;