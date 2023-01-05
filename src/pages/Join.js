import React from 'react'
import Header from "../components/Header"
import Footer from '../components/Footer'
import { useUserAuthContext } from '../context/UserContext';
import HeaderLogin from '../components/HeaderLogin';
function Join() {
  const {userData} = useUserAuthContext();
  return (
    <>
        {(userData) ? (<HeaderLogin></HeaderLogin>) : (<Header></Header>)}
        <Footer></Footer>
    </>
  )
}

export default Join