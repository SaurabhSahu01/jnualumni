import React from 'react'
import Header from "../components/Header";
import Carousel from 'react-bootstrap/Carousel';
function Home() {
  return (
    <>
      <Header></Header>
      <div className='w-11/12 mx-auto p-5'>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://media.gettyimages.com/id/533189605/photo/lotus-temple.jpg?s=612x612&w=gi&k=20&c=KQYa0vtidGoVsjstJ5e9i_0ZCAiEcD_ZYpkE6cCDtVs="
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://media.istockphoto.com/id/481216092/photo/diwan-i-am-at-the-red-fort-in-delhi-india.jpg?s=612x612&w=0&k=20&c=h7Hj_hVNa8NO17rkfGtQTMavqGpxOck10d_lo4BCFDM="
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://media.gettyimages.com/id/482018359/photo/india-gate-new-delhi.jpg?s=612x612&w=gi&k=20&c=e9heXVuTwxzgoqCl2mEQjti5yAVKNZJgg9MtbfPcQlM="
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  )
}

export default Home;