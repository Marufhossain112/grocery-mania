// @ts-nocheck
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
import Link from 'next/link';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { useState } from 'react';
export default function Products() {
    const [search, setSearch] = useState("");
    const [sort, setSort] = useState('desc');
    const [status, setStatus] = useState("");
    const [category, setCategory] = useState("");
    const { user } = useSelector((state) => state.persistedUserReducer);
    const { data, isLoading } = useProductsQuery({ search, sort, status,category });
    console.log("status", status);

    const handleAddToCart = async (product: any) => {
        const response = await (fetch("http://localhost:5000/cart"));
        const existingCart = await response.json();
        // console.log("Data", data);
        const existProduct = existingCart.find((cart) => cart._id === product._id);
        // console.log("paisi", existProduct);
        if (existProduct) {
            toast.error("Product is already added to the cart.");
        }
        if (!existProduct) {
            fetch("http://localhost:5000/cart", {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify({ user, ...product }),
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.insertedId) {
                        toast.success("Added to cart successfully.");
                    }
                })
                .catch((err) => console.log(err));
        }
    };
    if (isLoading) {
        return <div style={{ height: "100vh" }} className="flex justify-center items-center">
            <Spinner size="lg" aria-label="Center-aligned spinner example" />
        </div>;
    }
    return (
        <>
            <GMNavbar setSearch={setSearch} />
            <div className='product-parent-container' >
                <div className='sidebar'>
                    <GMBreadcrumb />
                    <div className='mb-5'>
                        <span className='font-bold'>  Sort By :</span> <SelectInput sort={sort} setSort={setSort} />
                    </div>
                    <div>
                        <span className='font-bold'>Filter :</span>
                        <CheckboxElement setStatus={setStatus} setCategory={setCategory} />
                    </div>
                </div>
                <div className='product-container'>

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
                                                <button onClick={() => handleAddToCart(product)} className='text-2xl'>
                                                    <BsCartPlus />
                                                </button>
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
                                    <Link href={`/products/${product._id}`}>
                                        <button>
                                            Go to details
                                        </button>
                                    </Link>
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