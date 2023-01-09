import React from 'react'
import spinner from "../../icons/spinner.svg";

function Loader() {
  return (
    <div className='w-[100%] h-[100vh] bg-transparent opacity-90 flex justify-center self-center mx-auto z-[1000] absolute'>
        <img src={spinner} alt="loader" className='w-full mx-auto'/>
    </div>
  )
}

export default Loader;