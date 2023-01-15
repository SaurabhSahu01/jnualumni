import React from 'react'
import Header from "./Header"
import MobileHeader from "./Mobileheader";
import HeaderLogin from "./HeaderLogin"
import MobileHeaderLogin from "./MobileHeaderLogin"
import { useUserAuthContext } from '../../context/UserContext'
import Loader from '../Loader/Loader'
import { useMediaQuery } from 'react-responsive'
function FinalHeader() {
    const {userData, logInProgress} = useUserAuthContext();
    // identify if the user if logged in or not

    const isMobile = useMediaQuery({
      query: '(max-width: 999px)',
    })
  const isDesktop = useMediaQuery({
      query: '(min-width: 1000px)'
    })
  return (
    <>
        {logInProgress ? <Loader></Loader> : <></>}
        {(userData) ? (isDesktop ? <HeaderLogin></HeaderLogin> : (isMobile ? <MobileHeaderLogin></MobileHeaderLogin> : <></>)): (isDesktop ? <Header></Header> : (isMobile ? <MobileHeader></MobileHeader> : <></>))}
    </>
  )
}

export default FinalHeader