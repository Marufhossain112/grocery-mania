'use client';
import { Badge, Navbar, Spinner } from 'flowbite-react';
import { Card } from 'flowbite-react';
import Image from 'next/image';
import SelectInput from '../components/Select';
import CheckboxElement from '../components/Checkbox';
import GMPagination from '../components/Pagination';
import RatingReview from '../components/RatingReview';
import GMBreadcrumb from '../components/Breadcrum';
import { BsCartPlus } from 'react-icons/bs';
import GMNavbar from '../components/Navbar';
import { useProductsQuery } from '@/redux/api/api';
export default function Products() {
    const { data, isLoading } = useProductsQuery(undefined);
    console.log("Products", data);
    if (isLoading) {
        return <div style={{ height: "100vh" }} className="flex justify-center items-center">
            <Spinner size="lg" aria-label="Center-aligned spinner example" />
        </div>;
    }
    return (
        <>
            <GMNavbar />
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

                    {data?.map((product: any, index: number) => (
                        <Card key={index} style={{ width: "18rem" }}
                        >
                            <div className='flex justify-center'>
                                <Image
                                    src={product.img}
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
                                                {product.name}
                                            </p>
                                            <div className='flex  items-center justify-between gap-2'>
                                                <Badge color="info">{product.category}</Badge >
                                                <div className='text-2xl'>
                                                    <BsCartPlus />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </h5>
                            </a>
                            <div>
                                <div className='flex justify-between'>
                                    <RatingReview />
                                    <span>{product.status}</span>
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-3xl font-bold text-gray-900 dark:text-white">
                                    ৳{product.price}
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
                    ))}

                </div>
            </div>
            <div className='flex justify-end container mx-auto ' style={{ padding: "0 4.5rem" }}>
                <GMPagination />
            </div>
        </>
    );
}