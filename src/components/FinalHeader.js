import React from 'react'
import Header from "./Header"
import HeaderLogin from "./HeaderLogin"
import { useUserAuthContext } from '../context/UserContext'
import Loader from './Loader/Loader'
function FinalHeader() {
    const {userData, logInProgress} = useUserAuthContext();
    // identify if the user if logged in or not
  return (
    <>
        {logInProgress ? <Loader></Loader> : <></>}
        {(userData) ? (<HeaderLogin></HeaderLogin>) : (<Header></Header>)}
    </>
  )
}

export default FinalHeader