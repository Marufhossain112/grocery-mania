'use client';
import { Card } from 'flowbite-react';
export default function AboutUsCard() {
    return (
        <div className='flex justify-center'>
            <Card
                horizontal
                imgSrc="/assets/grocery.png"
            >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <p>
                        Grocery Mania Technologies 2023
                    </p>
                </h5>
                <h1 className="font-normal text-gray-700 dark:text-gray-400">
                    <p >
                        Here you can get the most pure fruits and vegetables for your daily life. We can ensure about the authentication.
                    </p>
                </h1>
            </Card>
        </div>
    );
}


