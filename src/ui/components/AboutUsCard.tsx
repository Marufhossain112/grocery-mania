// 'use client';
// import { Card } from 'flowbite-react';
// export default function AboutUsCard() {
//     return (
{/* <div className='flex justify-center'>
    <Card
        horizontal
    >

    </Card>
</div>; */}
import Image from 'next/image';
//     );
// }

import React from 'react';

const AboutUsCard = () => {
    return (
        <div className='flex justify-center aboutUs-card-container'>
            <div className='flex justify-center'>
                <Image src="/assets/grocery-mania.webp" alt='img' width={300} height={300} />
            </div>

            <div style={{ maxWidth: "400px" }}>
                <h3 style={{ marginBottom: "1rem" }} className='text-center text-2xl pt-5 pb-4 '>
                    About Us
                </h3>
                <h5 className="company-title font-bold tracking-tight text-gray-900 dark:text-white">
                    <p>
                        Grocery Mania Technologies 2023
                    </p>
                </h5>
                <h1 className="font-normal text-justify text-gray-700 dark:text-gray-400">
                    <p style={{ textAlign: "justify" }}>
                        Here you can get the most pure fruits and vegetables for your daily life. We can ensure about the authentication.
                    </p>
                </h1></div>
            <div>

            </div>
        </div>
    );
};

export default AboutUsCard;;
