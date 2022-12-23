import React from 'react';
function Header() {
  return (
    <>
      <section className=' bg-neutral-100 flex justify-between w-11/12 mx-auto py-3 sticky top-0 border-black border-b-2'>
        <div className="h-20 w-fit flex justify-between">
          <img className="h-auto mr-3" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Jawaharlal_Nehru_University_Logo_vectorized.svg/848px-Jawaharlal_Nehru_University_Logo_vectorized.svg.png?20200107230203" alt="JNU_logo" />
          <div className='flex-col justify-between my-auto'>
            <span className='text-3xl font-bold select-none'>Alumni Association of JNU</span>
            <h4 className='font-semibold select-none'>Jawaharlal Nehru University</h4>
          </div>
        </div>
        <div className='flex justify-between my-auto'>
          <button type="button" className="btn btn-outline-primary rounded-full mr-2">Log In</button>
          <button type="button" className="btn btn-outline-primary rounded-full mr-2">Sign Up</button>
        </div>
      </section>
      <section>
      
      </section>
    </>
  )
}

export default Header;