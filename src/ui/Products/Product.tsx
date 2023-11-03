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
import UserGeneratedContent from '../UserData/UserGeneratedContent';
export default function Products() {
    const [search, setSearch] = useState("");
    const [sort, setSort] = useState('desc');
    const [status, setStatus] = useState("");
    const [category, setCategory] = useState("");
    const [page, setCurrentPage] = useState(1);
    const { user } = useSelector((state) => state.persistedUserReducer);
    const { data, isLoading } = useProductsQuery({ search, sort, status, category, page });
    // console.log("status", status);
    console.log("DATA", data);
    const handleAddToCart = async (product: any) => {
        const response = await (fetch("https://grocery-vercel-coral.vercel.app/cart"));
        const cartProducts = await response.json();
        console.log("Product", product);
        const { _id, ...productsData } = product;
        const existProduct = cartProducts.filter((cartItem) => cartItem.id === product._id);
        const alreadyOnCart = existProduct.filter((product) => product.user === user);
        console.log("already on cart", alreadyOnCart);
        if (alreadyOnCart.length !== 0) {
            toast.error("Product is already added to the cart.");
            return;
        };
        if (alreadyOnCart.length === 0) {
            fetch("https://grocery-vercel-coral.vercel.app/cart", {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify({ user, ...productsData, id: _id }),
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
                    {data?.paginatedProducts?.map((product: any, index: number) => (
                        <Card className="products-card-container" key={index} style={{ width: "18rem" }}
                        >
                            <div className='flex justify-center'>
                                <Image
                                    style={{ paddingTop: "1rem" }}
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
                                    className="go-to-details rounded-lg px-5 py-2.5"
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
                <GMPagination setCurrentPage={setCurrentPage} />
            </div>
        </>
    );
}