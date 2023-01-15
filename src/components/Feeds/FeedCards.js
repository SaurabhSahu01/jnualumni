import React from 'react'
import userIcon from "../../icons/userIcon.png"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { useState } from 'react';


function FeedCards(props) {
    const [liked, setlike] = useState(false);
    function likeButton(){
        setlike(!liked);
    }
  return (
    <div className='rounded-md shadow-xl bg-white mx-2 my-2'>
        <div className='flex justify-start self-center h-14 py-2 mx-2 gap-3'>
            <img src={userIcon} alt="#"className="w-10 h-10 rounded-full object-contain my-auto"/>
            <p className='my-auto text-xl font-bold text-blue-500'>{props.name}</p>
            <p className='my-auto text-sm'>- <span className='font-semibold'>School of Engineering</span></p>
        </div>
        <div className='mx-5'>
            <p className='text-gray-600 text-lg'>
                {props.message}
            </p>
        </div>
        <div className='grid grid-cols-2 place-items-center py-2'>
            <div className='flex justify-center gap-1'>
                {(liked) ? (<FavoriteIcon onClick={likeButton} style={{color: "red",}}></FavoriteIcon>) : ( <FavoriteBorderIcon onClick={likeButton}></FavoriteBorderIcon>)}
                <p>0 Likes</p>
            </div>
            <div className='flex justify-center gap-1'>
                <ChatBubbleOutlineIcon></ChatBubbleOutlineIcon>
                <p>0 Comments</p>
            </div>
        </div>
    </div>
  )
}

export default FeedCards