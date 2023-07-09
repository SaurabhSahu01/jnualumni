import React from 'react';
import UserGroup from '../../icons/user-group.png'
import Globe from '../../icons/world.png'
import Chat from '../../icons/bubble-chat.png'
import Connection from '../../icons/connection.png'
import Friends from '../../icons/high-five.png'
import Path from '../../icons/career-promotion.png'
import Meet from '../../icons/conversation.png'
import Blueprint from '../../icons/blueprint.png'
import Tile from './Tile'

const HomeExtras = () => {
    return ( 
        <div className='w-5/6 flex flex-row mx-auto flex-wrap'>
        <div className='w-full md:w-1/2 p-6'>
          <p className='text-3xl w-full text-center font-bold mb-4'>Get Connected</p>
          <Tile src={UserGroup} desc="Extend the JAA  Alumni platform to your classmates by becoming your batch's Ambassador" title="Become your batch's Ambassador"></Tile>
          <Tile src={Globe} desc="Share this platform on your social media so that all your batchmates can join" title="Spread the word"></Tile>
          <Tile src={Chat} desc="Write reminiscences if you wish to share your experience at the University for the world" title="Write Reminiscence"></Tile>
          <Tile src={Connection} desc="Is your organisation hiring new talent? Share career and internship opportunities with the huge talent pool at JAA " title="Share Career Opportunity"></Tile>
        </div>
        <div className='w-full md:w-1/2 p-6'>
          <p className='text-3xl w-full text-center font-bold mb-4'>Submit Your Story</p>
          <Tile src={Friends} desc="Share your friendship stories with us and get featured on the Alumni network’s exclusive publication - Friends for Life" title="Story:Friends for life"></Tile>
          <Tile src={Path} desc="Share the story of your first job with us" title="Story:Your First Job"></Tile>
          <Tile src={Meet} desc="Share Your entrepreneurial journey story and inspire all fellow Alumni!" title="Share your entrepreneul story"></Tile>
          <Tile src={Blueprint} desc="Your responses will be uploaded on this platform." title="Creative Story"></Tile>
        </div>
      </div>
     );
}
 
export default HomeExtras;