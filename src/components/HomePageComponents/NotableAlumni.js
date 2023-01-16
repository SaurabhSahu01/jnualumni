import React from 'react';
import Nirmala from '../../images/NirmalaSitaraman.webp'
import Jaishankar from '../../images/Jaishankar.webp'
import Abhijeet from '../../images/AbhijeetBanerjee.webp'
import Carousel from 'react-bootstrap/Carousel';
import { useMediaQuery } from 'react-responsive'
import Cards from "../Cards.js";
import { CarouselItem } from 'react-bootstrap';

const NotableAlumni = () => {
    const isMobile = useMediaQuery({
        query: '(max-width: 899px)',
      })
    const isTab = useMediaQuery({
        query: '(min-width: 900px)'
      })
    return (
        <div className='w-11/12 mx-auto'>
            <span className='flex justify-center self-center text-3xl font-semibold'>Notable Alumni</span>
            { isTab && 
            <div className='flex justify-center self-center my-5 gap-5'>
                <Cards src={Nirmala} desc="Minister of Finance & Corporate Affairs" title="Dr. Nirmala Sitharaman"></Cards>
                <Cards src={Jaishankar} title="Dr Subrahmanyam Jaishankar" desc="Minister of External Affairs"></Cards>
                <Cards src={Abhijeet} title="Prof Abhijit Vinayak Banerjee" desc="Nobel Laureate in Economics (2019)"></Cards>
            </div>
            }
            { isMobile &&
            <div className='mx-auto w-[18rem] py-3'>
                <Carousel>
                    <CarouselItem >
                    <Cards src={Nirmala} desc="Minister of Finance & Corporate Affairs" title="Dr. Nirmala Sitharaman"></Cards>
                    </CarouselItem>
                    <CarouselItem >
                    <Cards src={Jaishankar} title="Dr Subrahmanyam Jaishankar" desc="Minister of External Affairs"></Cards>
                    </CarouselItem>
                    <CarouselItem >
                    <Cards src={Abhijeet} title="Prof Abhijit Vinayak Banerjee" desc="Nobel Laureate in Economics (2019)"></Cards>
                    </CarouselItem>
                </Carousel>
            </div>}
        </div>
    );
}

export default NotableAlumni;