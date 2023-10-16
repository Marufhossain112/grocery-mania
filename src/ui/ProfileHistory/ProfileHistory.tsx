// @ts-nocheck
import { useGetOneUserQuery } from '@/redux/api/api';
import { Spinner } from 'flowbite-react';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
const ProfileHistory = () => {
    const { addToCart } = useSelector((state) => state.persistedProductReducer);
    const { bookedOrder } = useSelector((state) => state.persistedProductReducer);
    const { user } = useSelector((state) => state.persistedUserReducer);
    const { data, isLoading } = useGetOneUserQuery(user);
    const foundAddedCart = addToCart?.filter((cart) => cart.user === user);
    const foundBookedOrder = bookedOrder?.filter((cart) => cart.user === user);
    console.log("foundAddedCart", foundAddedCart);
    console.log("foundBookedOrder", foundBookedOrder);
    // fetch("https://grocery-vercel-coral.vercel.app/cart")
    //     .then((res) => res.json())
    //     .then((data) => addedCart.push(data))
    //     .catch((err) => console.log(err));
    // const userAddedToCart = addedCart.find((cart) => cart);
    // // console.log("userAddedToCart", userAddedToCart);
    // const foundAddedCart = userAddedToCart?.filter((cart) => cart.user === user);
    // console.log("foundAddedCart", foundAddedCart);
    // fetch("https://grocery-vercel-coral.vercel.app/orders")
    //     .then((res) => res.json())
    //     .then((data) => ordered.push(data))
    //     .catch((err) => console.log(err));
    // console.log("addedCart", addedCart);
    // const userOrderedCart = ordered.find((cart) => cart);
    // const foundOrderedCart = userOrderedCart?.filter((cart) => cart.user === user);
    // console.log("ordered", ordered);
    if (isLoading) {
        return <div style={{ height: "100vh" }} className="flex justify-center items-center">
            <Spinner size="lg" aria-label="Center-aligned spinner example" />
        </div>;
    }
    return (
        <div>
            <div className='text-center '>
                <h3 className='text-center font-bold text-2xl py-3'>User activities</h3>
                {/* <p>Added to cart: {foundAddedCart ? foundAddedCart.length : "0"} items</p> */}
                <p>Added to cart: {foundAddedCart?.length || 0} items</p>
                <p>Ordered products quantity: {foundBookedOrder ? foundBookedOrder.length : "0"} items</p>
            </div>
        </div>
    );
};

export default ProfileHistory;