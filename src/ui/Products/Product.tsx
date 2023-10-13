'use client';
import { Badge, Navbar } from 'flowbite-react';
import { Card } from 'flowbite-react';
import Image from 'next/image';
import SearchBar from '../components/SearchBar';
import SelectInput from '../components/Select';
import CheckboxElement from '../components/Checkbox';
import GMPagination from '../components/Pagination';
import RatingReview from '../components/RatingReview';
import GMBreadcrumb from '../components/Breadcrum';
export default function Products() {
    return (
        <>
            <Navbar
                fluid
                rounded
                style={{ background: "#21d8aa" }}
            >
                <Navbar.Brand href="/">
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                        Grocery Mania
                    </span>
                </Navbar.Brand>
                <Navbar.Collapse>
                    <Navbar.Link
                        // active
                        href="/"
                    >
                        <p>
                            Home
                        </p>
                    </Navbar.Link>
                    <Navbar.Link href="/products">
                        Products
                    </Navbar.Link>
                </Navbar.Collapse>
                <div className="flex md:order-2">
                    <SearchBar />
                </div>
                <Navbar.Toggle />
            </Navbar>
            {/* <h3 className='text-center font-bold text-2xl py-3'>Products</h3> */}
            <div style={{
                display: "grid",
                gridTemplateColumns: "12rem auto",
                gap: "2rem",
                margin: "4rem",
                marginBottom: "0"
            }}>
                <div className='sidebar'>
                    <GMBreadcrumb />
                    <div className='mb-5'>
                        <span className='font-bold'>  Sort By :</span> <SelectInput />
                    </div>
                    <div>
                        <span className='font-bold'>Filter :</span>
                        <CheckboxElement />
                    </div>

                </div>
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "auto auto auto",
                    rowGap: "1rem"
                }}>
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
                                <div className='flex items-end'>  <p>
                                    Apple Watch Series 7 GPS
                                </p>
                                    <span><Badge color="info">Rice</Badge ></span></div>
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
                            <h5 className="text-lg font-medium tracking-tight text-gray-900 dark:text-white">
                                <div className='flex items-end'>  <p>
                                    Apple Watch Series 7 GPS
                                </p>
                                    <span><Badge color="info">Rice</Badge ></span></div>
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
                            <h5 className="text-lg font-medium tracking-tight text-gray-900 dark:text-white">
                                <div className='flex items-end'>  <p>
                                    Apple Watch Series 7 GPS
                                </p>
                                    <span><Badge color="info">Rice</Badge ></span></div>
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
                            <h5 className="text-lg font-medium tracking-tight text-gray-900 dark:text-white">
                                <div className='flex items-end'>  <p>
                                    Apple Watch Series 7 GPS
                                </p>
                                    <span><Badge color="info">Rice</Badge ></span></div>
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
                            <h5 className="text-lg font-medium tracking-tight text-gray-900 dark:text-white">
                                <div className='flex items-end'>  <p>
                                    Apple Watch Series 7 GPS
                                </p>
                                    <span><Badge color="info">Rice</Badge ></span></div>
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
                            <h5 className="text-lg font-medium tracking-tight text-gray-900 dark:text-white">
                                <div className='flex items-end'>  <p>
                                    Apple Watch Series 7 GPS
                                </p>
                                    <span><Badge color="info">Rice</Badge ></span></div>
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

                </div>
            </div>
            <div className='flex justify-end'>
                <GMPagination />
            </div>
        </>
    );
}