import React from 'react'
import loader from "../../images/JNUwhitelogo.png"
function WelcomLoader() {
  return (
    <div className='w-[100%] h-[100vh] bg-[#000000dd] flex justify-center self-center mx-auto fixed z-[1000]'>
        <img src={loader} alt="loader" className='w-20 h-20 m-auto opacity-100 mx-auto animate-bounce'/>
    </div>
  )
}

export default WelcomLoader