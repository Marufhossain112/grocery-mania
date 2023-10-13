import React from 'react';
import AboutUsCard from './components/AboutUsCard';

const AboutUs = () => {
    return (
        <div >
            <h3 style={{ marginBottom: "1rem" }} className='text-center font-bold text-2xl pt-5 pb-4 '>
                About Us
            </h3>
            <AboutUsCard />
        </div>
    );
};

export default AboutUs;