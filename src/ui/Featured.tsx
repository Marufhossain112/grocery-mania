// @ts-nocheck
'use client';
import { useCreateAddToCartMutation, useGetFeaturedProductsQuery } from '@/redux/api/api';
import { Card, Spinner } from 'flowbite-react';
import Image from 'next/image';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
export default function ECommerceCard() {
    const { user } = useSelector((state) => state.persistedUserReducer);
    const { data, isLoading } = useGetFeaturedProductsQuery(undefined);
    // console.log("Featured Data", data);
    if (isLoading) {
        return <div style={{ height: "100vh" }} className="flex justify-center items-center">
            <Spinner size="lg" aria-label="Center-aligned spinner example" />
        </div>;
    }

    const handleAddToCart = async (product: any) => {
        const response = await (fetch("https://grocery-vercel-coral.vercel.app/cart"));
        const cartProducts = await response.json();
        console.log("Product", product);
        const { _id, ...productsData } = product;
        const existProduct = cartProducts.filter((cartItem) => cartItem.id === product._id);
        // console.log("paisi", (existProduct));
        const alreadyOnCart = existProduct.filter((product) => product.user === user);
        // console.log("already on cart", alreadyOnCart);
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
    return (
        <>
            <h3 className='text-center  text-2xl py-3 ' style={{ marginBottom: "1rem" }}>Featured Products</h3>
            <div className='container  mx-auto px-4 flex justify-center flex-wrap gap-4'>
                {
                    data?.map((product: any, index: number) => (
                        <Card className='featured-card-container' key={index}
                        >
                            <div className='flex justify-center'>
                                <Image
                                    style={{ marginTop: "1rem" }}
                                    src={product.img}
                                    alt="Apple Watch Series 7 in colors pink, silver, and black"
                                    height={100}
                                    width={180}
                                />
                            </div>
                            <a href="#">
                                <h5 className="text-lg font-medium tracking-tight text-gray-900 dark:text-white">
                                    <p>
                                        {product.name}
                                    </p>
                                </h5>
                            </a>
                            <div className="flex items-center justify-between">
                                <span className="text-3xl font-bold text-gray-900  dark:text-white">
                                    ৳{product.price}
                                </span>
                                <a
                                    className="add-to-cart rounded-lg px-5 py-2.5"
                                    href="#"
                                >
                                    <button onClick={() => handleAddToCart(product)}>
                                        Add to cart
                                    </button>
                                </a>
                            </div>
                        </Card>
                    ))
                }
            </div>
        </>
    );
}