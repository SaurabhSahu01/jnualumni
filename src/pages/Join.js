import React from 'react'
import Footer from '../components/Footer'
import { useUserAuthContext } from '../context/UserContext';
import FinalHeader from '../components/FinalHeader';
function Join() {
  const {setcurrentPage} = useUserAuthContext();
  setcurrentPage(window.location.pathname);
  return (
    <>
        <FinalHeader></FinalHeader>
        <Footer></Footer>
    </>
  )
}

export default Join