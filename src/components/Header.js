import React from 'react';
import { memo } from "react";
import { NavLink } from "react-router-dom";
import "../style/Navbar.css";
import styled from 'styled-components';
function Header() {
  return (
    <div className=' justify-center self-center sticky top-0 z-50'>
      <div className='flex place-items-end row-span-full p-3 bg-blueaccent '>
      <input className="btn btn-primary bg-blue-600 rounded-full ml-auto " type="button" value="Log In"/>
      </div>
      <div className='bg-neutral-100 flex justify-center self-center w-11/12 mx-auto border-black border-b-2 py-2 '>
      <section className='flex-1 justify-center '>
        <div className="h-20 w-fit flex justify-between">
          <img className="h-auto mr-3" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Jawaharlal_Nehru_University_Logo_vectorized.svg/848px-Jawaharlal_Nehru_University_Logo_vectorized.svg.png?20200107230203" alt="JNU_logo" />
          <div className='flex-col justify-between my-auto'>
            <span className='text-3xl font-bold select-none'>Alumni Association of JNU</span>
            <h4 className='font-semibold select-none'>Jawaharlal Nehru University</h4>
          </div>
        </div>
      </section>
      <section className='flex-2 justify-center self-center'>
        <ul className='flex justify-center self-center gap-5' id="navbar">
          <li className="transition duration-200 hover:scale-125 ">
            <StyledNavLink exact className="text-3xl font-semibold" to="/">HOME</StyledNavLink>
          </li>
          <li className="transition duration-200 hover:scale-125">
            <StyledNavLink exact className="text-3xl font-semibold" to="/about">ABOUT</StyledNavLink>
          </li>
          <li className="transition duration-200 hover:scale-125">
            <StyledNavLink exact className="text-3xl font-semibold" to="/join">JOIN</StyledNavLink>
          </li>
          <li className="transition duration-200 hover:scale-125">
            <StyledNavLink exact className="text-3xl font-semibold" to="/jobs">JOBS</StyledNavLink>
          </li>
        </ul>
      </section>
    </div>
    
    </div>
  )
}
const StyledNavLink = styled(NavLink)`
  &:hover {
    text-emphasis: none;
    text-decoration: none;
    color: black;
    transform: scale(2);
  }
`;
export default memo(Header);