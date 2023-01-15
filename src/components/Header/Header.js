import React from 'react';
import { memo } from "react";
import { NavLink, Link } from "react-router-dom";
import "../../style/Navbar.css";
import JNU from "../../images/JNUlogopng.png";
import styled from 'styled-components';
function Header() {
  return (
    <div className=' justify-center self-center sticky top-0 z-[999] w-full bg-bgoffwhite'>
      {((window.location.pathname === "/login") ? (<></>) : (<div className='flex justify-end p-2 bg-blueaccent '>
        <Link to="/login"><button type="button" class="font-semibold text-white bg-blue-600 py-1 px-3 rounded-full mx-3 transition duration-150 hover:scale-110">Login</button></Link>
      </div>))}
      <div className='bg-bgoffwhite flex justify-center self-center w-11/12 mx-auto border-black border-b-2 py-2 '>
        <section className='flex-1 justify-center '>
          <div className="h-20 w-fit flex justify-between">
            <img className="h-auto mr-3" src={JNU} alt="JNU_logo" />
            <div className='flex-col justify-between my-auto'>
              <span className='text-3xl font-bold select-none'>Alumni Association of JNU</span>
              <h4 className='font-semibold select-none'>Jawaharlal Nehru University</h4>
            </div>
          </div>
        </section>
        <section className='flex-3 justify-center self-center'>
          <ul className='flex justify-center self-center gap-5' id="navbar">
            <li className="transition duration-200 hover:scale-125 ">
              <StyledNavLink exact className="text-2xl font-semibold" to="/">HOME</StyledNavLink>
            </li>
            <li className="transition duration-200 hover:scale-125">
              <StyledNavLink exact className="text-2xl font-semibold" to="/about">ABOUT</StyledNavLink>
            </li>
            <li className="transition duration-200 hover:scale-125">
              <StyledNavLink exact className="text-2xl font-semibold" to="/join">JOIN</StyledNavLink>
            </li>
            <li className="transition duration-200 hover:scale-125">
              <StyledNavLink exact className="text-2xl font-semibold" to="/jobs">JOBS</StyledNavLink>
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