'use client';
import { Card } from 'flowbite-react';
export default function AboutUsCard() {
    return (
        <div className='flex justify-center'>
            <Card
                horizontal
                imgSrc="/assets/level-2.jpeg"
            >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <p>
                        Noteworthy technology acquisitions 2021
                    </p>
                </h5>
                <h1 className="font-normal text-gray-700 dark:text-gray-400">
                    <p>
                        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                    </p>
                </h1>
            </Card>
        </div>
    );
}


