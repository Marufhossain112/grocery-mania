'use client';

import { Avatar, Card, Dropdown, Rating } from 'flowbite-react';
const { Item } = Dropdown;
export default function Review() {
    return (
        <div className='flex  justify-center  items-center gap-1 testimonial-container'>
            <Card style={{ width: "100%" }}>
                <div className="flex flex-col items-center pb-10">
                    <Rating>
                        <Rating.Star />
                        <Rating.Star />
                        <Rating.Star />
                        <Rating.Star />
                        <Rating.Star filled={false} />
                    </Rating>
                    <p>{'"This is really awesome"'}</p>
                    <Avatar />
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                        Bonnie Green
                    </h5>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                        Visual Designer
                    </span>
                </div>
            </Card>
            <Card style={{ width: "100%" }}>
                <div className="flex flex-col items-center pb-10">
                    {/* <Avatar /> */}
                    <Rating>
                        <Rating.Star />
                        <Rating.Star />
                        <Rating.Star />
                        <Rating.Star />
                        <Rating.Star filled={false} />
                    </Rating>
                    <p>{'"I love the services."'}</p>
                    <Avatar />
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                        Arick Adison
                    </h5>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                        Engineer
                    </span>
                </div>
            </Card>
            <Card style={{ width: "100%" }}>
                <div className="flex flex-col items-center pb-10">
                    {/* <Avatar /> */}
                    <Rating>
                        <Rating.Star />
                        <Rating.Star />
                        <Rating.Star />
                        <Rating.Star />
                        <Rating.Star filled={false} />
                    </Rating>
                    <p>{'"Loved the work very much."'}</p>
                    <Avatar />
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                        Mark Kyle
                    </h5>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                        Doctor
                    </span>
                </div>
            </Card>
        </div>
    );
}


