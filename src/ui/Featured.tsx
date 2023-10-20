// @ts-nocheck
'use client';
import { useCreateAddToCartMutation, useGetFeaturedProductsQuery } from '@/redux/api/api';
import { addToCart } from '@/redux/product/productSlice';
import { Card, Spinner } from 'flowbite-react';
import Image from 'next/image';
import { send } from 'process';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
export default function ECommerceCard() {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.persistedUserReducer);
    const { data, isLoading } = useGetFeaturedProductsQuery(undefined);
    const [createAddToCart] = useCreateAddToCartMutation();
    // console.log("Featured Data", data);
    if (isLoading) {
        return <div style={{ height: "100vh" }} className="flex justify-center items-center">
            <Spinner size="lg" aria-label="Center-aligned spinner example" />
        </div>;
    }
    const handleAddToCart = async (product: any) => {
        const options = {
            data: {
                user, ...product
            }
        };
        console.log("Options", options);
        const response = await (fetch("https://grocery-vercel-coral.vercel.app/cart"));
        const cartProducts = await response.json();
        console.log("Product", product);
        // console.log("cartProducts", cartProducts);
        const existProduct = cartProducts.filter((cartItem) => cartItem._id === product._id);
        // console.log("paisi", (existProduct));
        const alreadyOnCart = existProduct.filter((product) => product.user === user);
        console.log("already on cart", alreadyOnCart);
        // if (alreadyOnCart.length === 0) {
        //     await createAddToCart(options).unwrap().then((response) => {
        //         if (response.acknowledged) {
        //             toast.success("Added to cart successfully.");
        //         }
        //         console.log("response", response);
        //         console.log("data", data);
        //         // if (response.statusCode === 200) {
        //         // }
        //     }).catch((error) => {
        //         // if (error) {
        //         // toast.error(error?.data?.message);
        //         return;
        //         // }
        //     });
        // };

    };
    // if (!alreadyOnCart.length === 0) {
    //     toast.error("Product is already added to the cart.");
    //     return;
    // }
    return (
        <>
            <h3 className='text-center font-bold text-2xl py-3'>Featured Products</h3>
            <div className='container  mx-auto px-4 flex justify-center flex-wrap gap-4'>
                {
                    data?.map((product: any, index: number) => (
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
                                <h5 className="text-lg font-medium tracking-tight text-gray-900 dark:text-white">
                                    <p>
                                        {product.name}
                                    </p>
                                </h5>
                            </a>
                            <div className="flex items-center justify-between">
                                <span className="text-3xl font-bold text-gray-900 dark:text-white">
                                    ৳{product.price}
                                </span>
                                <a
                                    className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
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