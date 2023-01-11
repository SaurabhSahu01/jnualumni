import React from 'react'

function EmailVerificationSent() {
  return (
    <div className='w-[100%] h-[100vh] bg-[#000000dd] flex flex-col justify-center z-[1000] fixed gap-5'>
        <span className="text-green-500 font-medium text-3xl text-center">A verification link has been sent to your registered e-mail</span>
        <span className="text-green-500 text-3xl font-medium text-center">Please verify and log-in again</span>
    </div>
  )
}

export default EmailVerificationSent