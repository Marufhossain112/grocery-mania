// @ts-nocheck
import { useGetAddedCartQuery } from '@/redux/api/api';
import { Spinner } from 'flowbite-react';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import BookedOrder from './BookedOrder';
const ProfileHistory = () => {
    const { user } = useSelector((state) => state.persistedUserReducer);
    const { data, isLoading } = useGetAddedCartQuery(undefined);
    const foundAddedCart = data?.filter((cart) => cart.user === user);
    // console.log("foundAddedCart", foundAddedCart);
    if (isLoading) {
        return <div style={{ height: "100vh" }} className="flex justify-center items-center">
            <Spinner size="lg" aria-label="Center-aligned spinner example" />
        </div>;
    }
    return (
        <div>
            <div className='text-center '>
                <h3 className='text-center font-bold text-2xl py-3'>User activities</h3>
                <p>Added to cart: {foundAddedCart?.length || 0} items</p>
                <BookedOrder />
            </div>
        </div>
    );
};

export default ProfileHistory;