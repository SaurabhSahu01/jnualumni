import React, {useEffect} from 'react'
import Footer from '../components/Footer/Footer'
import { useUserAuthContext } from '../context/UserContext';
import FinalHeader from '../components/Header/FinalHeader';
function Join() {
  const {setcurrentPage} = useUserAuthContext();
  useEffect(() => {
    setcurrentPage(window.location.pathname);
  }, [])
  
  return (
    <>
        <FinalHeader></FinalHeader>
        <Footer></Footer>
    </>
  )
}

export default Join