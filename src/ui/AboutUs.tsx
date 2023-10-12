import React from 'react';
import AboutUsCard from './components/AboutUsCard';

const AboutUs = () => {
    return (
        <div className='mb-10'>
            <h3 className='text-center font-bold text-2xl pt-5 pb-4 '>
                About Us
            </h3>
            <AboutUsCard />
        </div>
    );
};

export default AboutUs;