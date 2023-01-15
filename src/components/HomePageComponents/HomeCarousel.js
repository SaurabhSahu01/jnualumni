import React from 'react';
import Car1 from '../../images/Carousel1.webp'
import Car2 from '../../images/Carousel2.webp'
import Car3 from '../../images/Carousel3.webp'
import Carousel from 'react-bootstrap/Carousel';

const HomeCarousel = () => {
    return (
        <div className="w-11/12 mx-auto md:my-5 my-3">
            <Carousel className="md:h-[40vw] h-[50vw]">
                <Carousel.Item className="md:h-[40vw] h-[50vw]">
                    <img
                        className="d-block w-full h-full"
                        src={Car1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Aerial View</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='md:h-[40vw] h-[50vw]'>
                    <img
                        className="d-block w-full h-full"
                        src={Car2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Jawaharlal Nehru Statue</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='md:h-[40vw] h-[50vw]'>
                    <img
                        className="d-block w-full h-full"
                        src={Car3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Convention Center</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default HomeCarousel;