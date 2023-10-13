import React from 'react';
import FAQ from './FAQ';

const FAQCard = () => {
    return (
        <div >
            <h3 style={{marginBottom:"1rem"}} className='text-center font-bold text-2xl pt-5 pb-4 '>
                Frequently Asked Question
            </h3>
            <FAQ />
        </div>
    );
};

export default FAQCard;