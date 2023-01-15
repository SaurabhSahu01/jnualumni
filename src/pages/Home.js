import React, {useEffect} from 'react'
import Footer from '../components/Footer/Footer'
import { useUserAuthContext } from '../context/UserContext';
import Platform from '../components/HomePageComponents/Platform'
import HomeExtras from '../components/HomePageComponents/HomeExtras'
import ExtraTabs from '../components/HomePageComponents/ExtraTabs'
import FinalHeader from '../components/Header/FinalHeader';
import EventGallary from "../pages/EventGallary"
import HomeCarousel from '../components/HomePageComponents/HomeCarousel';
import NotableAlumni from '../components/HomePageComponents/NotableAlumni';
function Home() {
  const {setcurrentPage} = useUserAuthContext();
  useEffect(() => {
    setcurrentPage(window.location.pathname);
  }, [])
  
  return (
    <div className='relative max-w-full'>
      <FinalHeader></FinalHeader>
      <HomeCarousel />
      <NotableAlumni />
      <Platform />
      <HomeExtras />
      <ExtraTabs />
      <EventGallary />
      <Footer></Footer>
    </div>
  )
}

export default Home;