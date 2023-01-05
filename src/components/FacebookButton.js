import React from 'react'
import FaceBook from "../icons/facebook.svg";
function FacebookButton() {
  return (
    <div className="flex m-2 mx-auto justify-center bg-[#4267B2] cursor-pointer hover:shadow-[#4267B2] hover:shadow-sm">
        <img
        src={FaceBook}
        alt = "sign in with facebook"
        />
        <span className='my-auto mx-3 text-white'>Sign in with FaceBook</span>
    </div>
  )
}

export default FacebookButton;