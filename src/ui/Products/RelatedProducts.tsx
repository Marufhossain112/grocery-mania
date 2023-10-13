import React from 'react';
import { Badge, Card } from 'flowbite-react';
import Image from 'next/image';
import SelectInput from '../components/Select';
import CheckboxElement from '../components/Checkbox';
import RatingReview from '../components/RatingReview';
import GMBreadcrumb from '../components/Breadcrum';
import { BsCartPlus } from 'react-icons/bs';
const RelatedProducts = () => {
    return (
        <div>
            <div style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr 1fr",
            }}>

                {/* <div style={{
                    display: "grid",
                    gridTemplateColumns: "auto auto auto",
                    rowGap: "1rem"
                }}> */}
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
                        <h5 className="text-md font-normal tracking-tight text-gray-900 dark:text-white">
                            <div className='flex '>
                                <div className='flex items-end'>
                                    <p>
                                        Apple Watch Series 7 GPS
                                    </p>
                                    <div className='flex flex-col items-center gap-2'>
                                        <div className='text-2xl'>
                                            <BsCartPlus />
                                        </div>
                                        <Badge color="info">Rice</Badge >
                                    </div>
                                </div>
                            </div>
                        </h5>
                    </a>
                    <div>
                        <div className='flex justify-between'>
                            <RatingReview />
                            <span>in stock</span>
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-3xl font-bold text-gray-900 dark:text-white">
                            $599
                        </span>
                        <a
                            className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                            href="#"
                        >
                            <p>
                                Go to details
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
                        <h5 className="text-md font-normal tracking-tight text-gray-900 dark:text-white">
                            <div className='flex '>
                                <div className='flex items-end'>
                                    <p>
                                        Apple Watch Series 7 GPS
                                    </p>
                                    <div className='flex flex-col items-center gap-2'>
                                        <div className='text-2xl'>
                                            <BsCartPlus />
                                        </div>
                                        <Badge color="info">Rice</Badge >
                                    </div>
                                </div>
                            </div>
                        </h5>
                    </a>
                    <div>
                        <div className='flex justify-between'>
                            <RatingReview />
                            <span>in stock</span>
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-3xl font-bold text-gray-900 dark:text-white">
                            $599
                        </span>
                        <a
                            className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                            href="#"
                        >
                            <p>
                                Go to details
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
                        <h5 className="text-md font-normal tracking-tight text-gray-900 dark:text-white">
                            <div className='flex '>
                                <div className='flex items-end'>
                                    <p>
                                        Apple Watch Series 7 GPS
                                    </p>
                                    <div className='flex flex-col items-center gap-2'>
                                        <div className='text-2xl'>
                                            <BsCartPlus />
                                        </div>
                                        <Badge color="info">Rice</Badge >
                                    </div>
                                </div>
                            </div>
                        </h5>
                    </a>
                    <div>
                        <div className='flex justify-between'>
                            <RatingReview />
                            <span>in stock</span>
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-3xl font-bold text-gray-900 dark:text-white">
                            $599
                        </span>
                        <a
                            className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                            href="#"
                        >
                            <p>
                                Go to details
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
                        <h5 className="text-md font-normal tracking-tight text-gray-900 dark:text-white">
                            <div className='flex '>
                                <div className='flex items-end'>
                                    <p>
                                        Apple Watch Series 7 GPS
                                    </p>
                                    <div className='flex flex-col items-center gap-2'>
                                        <div className='text-2xl'>
                                            <BsCartPlus />
                                        </div>
                                        <Badge color="info">Rice</Badge >
                                    </div>
                                </div>
                            </div>
                        </h5>
                    </a>
                    <div>
                        <div className='flex justify-between'>
                            <RatingReview />
                            <span>in stock</span>
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-3xl font-bold text-gray-900 dark:text-white">
                            $599
                        </span>
                        <a
                            className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                            href="#"
                        >
                            <p>
                                Go to details
                            </p>
                        </a>
                    </div>
                </Card>
                {/* </div> */}
            </div>
        </div>
    );
};

export default RelatedProducts;