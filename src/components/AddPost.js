import React from 'react'
import userIcon from "../icons/userIcon.png"
import picture from "../icons/picture.png"
import video from "../icons/video.png"
import event from "../icons/event.png"
function AddPost() {
    return (
        <div className='rounded-md shadow-xl bg-white mx-2 my-2 grid grid-rows-2 gap-2'>
            <div className='row-span-1 flex justify-center pt-2'>
                <img src={userIcon} alt="#" className=' w-12 h-12 mx-auto rounded-full object-contain my-auto' />
                <input type="text" name="post" placeholder="Post" className='w-[85%] py-2 rounded-full border-gray-400 border-[2px] mx-auto px-3 text-xl outline-none' />
            </div>
            <div className='row-span-1 grid grid-cols-3 place-items-center'>
                <div className='flex justify-center gap-1'>
                    <img src={picture} alt="addpic" className='w-10 h-10 object-contain' />
                    <p className='my-auto font-medium'>Add Image</p>
                </div>
                <div className='flex justify-center gap-1'>
                    <img src={video} alt="addvid" className="w-10 h-10 object-contain"/>
                    <p className='my-auto font-medium'>Add Video</p>
                </div>
                <div className='flex justify-center gap-1'>
                    <img src={event} alt="addevent" className='w-10 h-10 object-contain'/>
                    <p className='my-auto font-medium'>Add Event</p>
                </div>
            </div>
        </div>
    )
}

export default AddPost