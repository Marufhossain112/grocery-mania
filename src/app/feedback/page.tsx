// @ts-nocheck
import FeedbackForm from '@/ui/Feedback';
import GMNavbar from '@/ui/components/Navbar';
import React from 'react';
const Feedback = () => {
    return (
        <div>
            <GMNavbar />
            <div className='grid justify-center items-center h-[100vh]'>
                <FeedbackForm />
            </div>
        </div>
    );
};

export default Feedback;