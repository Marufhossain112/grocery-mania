'use client';
import { Card } from 'flowbite-react';
import Image from 'next/image';
export default function ECommerceCard() {
    return (
        <>
            <h3 className='text-center font-bold text-2xl py-3'>Featured Products</h3>
            <div className='container  mx-auto px-4 flex justify-center flex-wrap gap-4'>
                <Card style={{ width: "18rem" }}
                >
                    <div className='flex justify-center'>
                        <Image
                            src="/assets/level-2.jpeg"
                            alt="Apple Watch Series 7 in colors pink, silver, and black"
                            height={100}
                            width={180}
                        />
                    </div>
                    <a href="#">
                        <h5 className="text-lg font-medium tracking-tight text-gray-900 dark:text-white">
                            <p>
                                Apple Watch Series 7 GPS
                            </p>
                        </h5>
                    </a>
                    <div className="flex items-center justify-between">
                        <span className="text-3xl font-bold text-gray-900 dark:text-white">
                            $599
                        </span>
                        <a
                            className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                            href="#"
                        >
                            <p>
                                Add to cart
                            </p>
                        </a>
                    </div>
                </Card>
                <Card style={{ width: "18rem" }}
                >
                    <div className='flex justify-center'>
                        <Image
                            src="/assets/level-2.jpeg"
                            alt="Apple Watch Series 7 in colors pink, silver, and black"
                            height={100}
                            width={180}
                        />
                    </div>
                    <a href="#">
                        <h5 className="text-lg font-medium tracking-tight text-gray-900 dark:text-white">
                            <p>
                                Apple Watch Series 7 GPS
                            </p>
                        </h5>
                    </a>
                    <div className="flex items-center justify-between">
                        <span className="text-3xl font-bold text-gray-900 dark:text-white">
                            $599
                        </span>
                        <a
                            className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                            href="#"
                        >
                            <p>
                                Add to cart
                            </p>
                        </a>
                    </div>
                </Card>
                <Card style={{ width: "18rem" }}
                >
                    <div className='flex justify-center'>
                        <Image
                            src="/assets/level-2.jpeg"
                            alt="Apple Watch Series 7 in colors pink, silver, and black"
                            height={100}
                            width={180}
                        />
                    </div>
                    <a href="#">
                        <h5 className="text-lg font-medium tracking-tight text-gray-900 dark:text-white">
                            <p>
                                Apple Watch Series 7 GPS
                            </p>
                        </h5>
                    </a>
                    <div className="flex items-center justify-between">
                        <span className="text-3xl font-bold text-gray-900 dark:text-white">
                            $599
                        </span>
                        <a
                            className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                            href="#"
                        >
                            <p>
                                Add to cart
                            </p>
                        </a>
                    </div>
                </Card>
                <Card style={{ width: "18rem" }}
                >
                    <div className='flex justify-center'>
                        <Image
                            src="/assets/level-2.jpeg"
                            alt="Apple Watch Series 7 in colors pink, silver, and black"
                            height={100}
                            width={180}
                        />
                    </div>
                    <a href="#">
                        <h5 className="text-lg font-medium tracking-tight text-gray-900 dark:text-white">
                            <p>
                                Apple Watch Series 7 GPS
                            </p>
                        </h5>
                    </a>
                    <div className="flex items-center justify-between">
                        <span className="text-3xl font-bold text-gray-900 dark:text-white">
                            $599
                        </span>
                        <a
                            className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                            href="#"
                        >
                            <p>
                                Add to cart
                            </p>
                        </a>
                    </div>
                </Card>

            </div>
        </>
    );
}