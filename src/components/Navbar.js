import React from 'react'
import { NavLink } from "react-router-dom";
import "../style/Navbar.css";
import styled from 'styled-components';
function Navbar() {
    return (

        <section className='p-2 w-11/12 mx-auto bg-neutral-100'>
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
export default Navbar