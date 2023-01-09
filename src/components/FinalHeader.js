import React from 'react'
import Header from "./Header"
import HeaderLogin from "./HeaderLogin"
import { useUserAuthContext } from '../context/UserContext'

function FinalHeader() {
    const {userData} = useUserAuthContext();
    // identify if the user if logged in or not
  return (
    <>
        {(userData) ? (<HeaderLogin></HeaderLogin>) : (<Header></Header>)}
    </>
  )
}

export default FinalHeader