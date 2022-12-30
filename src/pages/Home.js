import React from 'react'
import Header from "../components/Header";
import Carousel from 'react-bootstrap/Carousel';
import Cards from "../components/Cards";
import Footer from '../components/Footer'
function Home() {
  return (
    <>
      <Header></Header>
      <div className="w-11/12 mx-auto my-[5.3rem] ">
        <Carousel className="h-[30rem]">
          <Carousel.Item className="h-[30rem]">
            <img
              className="d-block w-100 h-[30rem]"
              src="https://d1h684srpghjti.cloudfront.net/assets/images/gallary_photos/t1602785878_2nRiWiWdPZ.jpg?w=2560&format=webp"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Aerial View</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className='h-[30rem]'>
            <img
              className="d-block w-100 h-[30rem]"
              src="https://d1h684srpghjti.cloudfront.net/assets/images/gallary_photos/t1602785863_RHMv1V3OwQ.jpg?w=2560&format=webp"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Jawaharlal Nehru Statue</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className='h-[30rem]'>
            <img
              className="d-block w-100 h-[30rem]"
              src="https://d1h684srpghjti.cloudfront.net/assets/images/gallary_photos/t1605857970_ilrCPyf3sW.jpg?w=2560&format=webp"
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
          <Cards src="https://d1h684srpghjti.cloudfront.net/assets/images/gallary_photos/t1599411482_hNPsYn27h7.jpg?w=320&format=webp" desc="Minister of Finance & Corporate Affairs" title="Dr. Nirmala Sitharaman"></Cards>  
          <Cards src="https://d1h684srpghjti.cloudfront.net/assets/images/gallary_photos/t1599413518_IDrCj73BVU.jpg?w=320&format=webp" title="Dr Subrahmanyam Jaishankar" desc="Minister of External Affairs"></Cards>
          <Cards src="https://d1h684srpghjti.cloudfront.net/assets/images/gallary_photos/t1599413445_NwTX4Tk5nk.jpg?w=320&format=webp" title="Prof Abhijit Vinayak Banerjee" desc="Nobel Laureate in Economics (2019)"></Cards>
        </div>
      </div>
      <Footer></Footer>
    </>
  )
}

export default Home;