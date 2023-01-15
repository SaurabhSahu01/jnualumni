import React from 'react';
import Nirmala from '../../images/NirmalaSitaraman.webp'
import Jaishankar from '../../images/Jaishankar.webp'
import Abhijeet from '../../images/AbhijeetBanerjee.webp'
import Cards from "../Cards.js";

const NotableAlumni = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <span className='flex justify-center self-center text-3xl font-semibold'>Notable Alumni</span>
            <div className='flex justify-center self-center my-5 gap-5'>
                <Cards src={Nirmala} desc="Minister of Finance & Corporate Affairs" title="Dr. Nirmala Sitharaman"></Cards>
                <Cards src={Jaishankar} title="Dr Subrahmanyam Jaishankar" desc="Minister of External Affairs"></Cards>
                <Cards src={Abhijeet} title="Prof Abhijit Vinayak Banerjee" desc="Nobel Laureate in Economics (2019)"></Cards>
            </div>
        </div>
    );
}

export default NotableAlumni;