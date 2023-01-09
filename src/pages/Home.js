import React, {useEffect} from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Cards from "../components/Cards";
import Footer from '../components/Footer'
import Car1 from '../images/Carousel1.webp'
import Car2 from '../images/Carousel2.webp'
import Car3 from '../images/Carousel3.webp'
import Nirmala from '../images/NirmalaSitaraman.webp'
import Jaishankar from '../images/Jaishankar.webp'
import Abhijeet from '../images/AbhijeetBanerjee.webp'
import { useUserAuthContext } from '../context/UserContext';
import HeaderLogin from '../components/HeaderLogin';
import Platform from '../components/HomePageComponents/Platform'
import HomeExtras from '../components/HomePageComponents/HomeExtras'
import ExtraTabs from '../components/HomePageComponents/ExtraTabs'
import FinalHeader from '../components/FinalHeader';
function Home() {
  const {setcurrentPage} = useUserAuthContext();
  useEffect(() => {
    setcurrentPage(window.location.pathname);
  }, [])
  
  return (
    <>
      <FinalHeader></FinalHeader>
      <div className="w-11/12 mx-auto my-[5.3rem] ">
        <Carousel className="h-[30rem]">
          <Carousel.Item className="h-[30rem]">
            <img
              className="d-block w-100 h-[30rem]"
              src={Car1}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Aerial View</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className='h-[30rem]'>
            <img
              className="d-block w-100 h-[30rem]"
              src={Car2}
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Jawaharlal Nehru Statue</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className='h-[30rem]'>
            <img
              className="d-block w-100 h-[30rem]"
              src={Car3}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Convention Center</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className='w-11/12 mx-auto'>
        <span className='flex justify-center self-center text-3xl font-semibold'>Notable Alumni</span>
        <div className='flex justify-center self-center my-5 gap-5'>
          <Cards src={Nirmala} desc="Minister of Finance & Corporate Affairs" title="Dr. Nirmala Sitharaman"></Cards>  
          <Cards src={Jaishankar} title="Dr Subrahmanyam Jaishankar" desc="Minister of External Affairs"></Cards>
          <Cards src={Abhijeet} title="Prof Abhijit Vinayak Banerjee" desc="Nobel Laureate in Economics (2019)"></Cards>
        </div>
      </div>
      <Platform />
      <HomeExtras />
      <ExtraTabs />
      <Footer></Footer>
    </>
  )
}

export default Home;