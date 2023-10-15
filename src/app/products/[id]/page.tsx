"use client";
import { useGetOneProductQuery } from '@/redux/api/api';
import GMNavbar from '@/ui/components/Navbar';
import RatingReview from '@/ui/components/RatingReview';
import { Badge, Button, Card, Spinner } from 'flowbite-react';
import { useParams } from 'next/navigation';
import { BsShareFill } from 'react-icons/bs';
import { BsCartPlus } from 'react-icons/bs';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
const ProductDetails = () => {
    const { id } = useParams();
    const { data, isLoading } = useGetOneProductQuery(id);
    console.log("params data", data);
    if (isLoading) {
        return <div style={{ height: "100vh" }} className="flex justify-center items-center">
            <Spinner size="lg" aria-label="Center-aligned spinner example" />
        </div>;
    }
    return (
        <div>
            <GMNavbar />
            {/* intro part */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: "1fr 1fr",
                placeItems: "end",
                marginTop: "3rem",
                gap: "3rem"
            }} className='container mx-auto px-4 '>
                <div>
                    <Image src={data.img} height={80} width={300} alt='product' />
                </div>
                <div>
                    <h4 style={{ marginBottom: "6px" }} className='text-2xl font-medium'>{data.name} </h4>
                    <div className='flex justify-between items-center'>
                        <div style={{ marginBottom: "4px" }} className='flex items-center'><span style={{ fontSize: "1.5rem" }} className='mr-2 '>৳{data.price}</span><RatingReview /> <span className='ml-2'>({data.reviews} reviews)</span></div> <div><BsShareFill /></div>
                    </div>
                    <span>Status: {data.status}</span>
                    <p style={{ paddingTop: "6px", marginBottom: "8px", color: "#3c483c" }}>
                        {
                            data.description
                        }</p>
                    <p style={{ color: "#3c483c" }}>Location:{data.location}</p>
                    <p style={{ color: "#3c483c" }}>Contact:{data.phone}</p>
                    <div className='flex mt-2'>
                        <Link href={`/products/buy/${data._id}`}>
                            <Button className='mr-2'>Order Now </Button>
                        </Link>
                        <Button color='purple'>Add to Cart </Button>
                    </div>
                </div>
            </div >
            {/* additional details */}
            <div className='container mx-auto px-4 mt-10'>
                <h4 style={{ marginTop: "2rem", marginBottom: "0.3rem" }} className='text-xl font-medium'>Additional details</h4>
                <p>{data.details}</p>
                {/* Related products */}
                <div>
                    <h4 style={{ marginTop: "2rem", marginBottom: "0.3rem" }} className='text-xl font-medium'>Related products</h4>
                    {/* <RelatedProducts /> */}
                    <div style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr 1fr 1fr",
                    }}>

                        {
                            data?.relatedProducts?.map((product: any, index: number) => (
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
                                                    <div className='flex  items-center gap-2'>
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
                                            <Link href={`/product/${data._id}/relatedProductDetails/${product.id}`}>
                                                <button>
                                                    Go to details
                                                </button>
                                            </Link>
                                        </a>
                                    </div>
                                </Card>
                            ))
                        }
                    </div>

                </div>
            </div>
        </div>
    );
};
export default ProductDetails;