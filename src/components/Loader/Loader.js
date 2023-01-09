import React from 'react'
import spinner from "../../icons/spinner.svg";

function Loader() {
  return (
    <div className='w-[100%] h-[100vh] bg-[#000000dd] flex justify-center self-center mx-auto z-[1000] fixed'>
        <img src={spinner} alt="loader" className='w-full opacity-100 mx-auto'/>
    </div>
  )
}

export default Loader;