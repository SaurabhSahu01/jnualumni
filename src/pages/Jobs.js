import React from 'react'
import Footer from '../components/Footer'
import { useUserAuthContext } from '../context/UserContext';
import FinalHeader from '../components/FinalHeader';
function Jobs() {
  const {setcurrentPage} = useUserAuthContext();
  setcurrentPage(window.location.pathname);
  return (
    <>
        <FinalHeader></FinalHeader>
        <Footer></Footer>
    </>
  )
}

export default Jobs