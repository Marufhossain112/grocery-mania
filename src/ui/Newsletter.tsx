import React from 'react';

const Newsletter = () => {
    return (
        <div style={{
            marginTop: "2rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            background: "aquamarine",
            padding: "4rem"
        }}>
            <h4 style={{ marginBottom: "0.5rem" }}>$20 discount for your first order</h4>
            <h3 style={{ marginBottom: "0.7rem" }} className='text-2xl font-medium'>Join our newsletter and get...</h3>
            <p style={{ marginBottom: "0.7rem", }} className='text-gray-800' >Join our email subscription now to get updates on promotions and coupons.</p>
            <div className='flex'>
                <input type="text" placeholder='Your email address' />
                <button style={{
                    background: "midnightblue",
                    color: "white",
                    padding: "0 22px",
                }} type='submit'>Subscribe</button>
            </div>
        </div >
    );
};

export default Newsletter;