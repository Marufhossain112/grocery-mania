'use client';

import { Avatar, Card, Dropdown } from 'flowbite-react';
import Image from 'next/image';
const { Item } = Dropdown;
export default function UserProfileCard() {
    return (
        <Card>
            <div className="flex justify-end px-4 pt-4">
                <Dropdown
                    inline
                    label=""
                >
                    <Item>
                        <a
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                            href="#"
                        >
                            <p>
                                Profile settings
                            </p>
                        </a>
                    </Item>
                    <Item>
                        <a
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                            href="#"
                        >
                            <p>
                                Edit profile
                            </p>
                        </a>
                    </Item>
                    <Item>
                        <a
                            className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                            href="#"
                        >
                            <p>
                                Logout
                            </p>
                        </a>
                    </Item>
                </Dropdown>
            </div>
            <div className="flex flex-col items-center pb-10">
                <Avatar rounded />
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                    Bonnie Green
                </h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                    01237438493
                </span>
                <div className="mt-4 flex space-x-3 lg:mt-6">
                    <p className='text-center'>Payment methods</p>
                </div>
                <div className="mt-4 flex space-x-3 lg:mt-6">
                    <Image src="/assets/bkash.png" alt='bkash' height={40} width={40} />
                    <Image src="/assets/nagad.png" alt='nagad' height={40} width={40} />
                    <Image src="/assets/rocket.jpeg" alt='rocket' height={40} width={40} />
                </div>
                <div className="mt-4 flex space-x-3 lg:mt-6">
                    <p className='text-center'>History</p>
                </div>
            </div>
        </Card>
    );
}


