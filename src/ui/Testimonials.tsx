import React from 'react';
import Review from './Review';

const Testimonials = () => {
    return (
        <div id='testimonials'>
            <h3 className='text-center  text-2xl testimonial-title'>
                What our customer says
            </h3>
            <Review />
        </div>
    );
};
export default Testimonials;