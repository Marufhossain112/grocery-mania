// @ts-nocheck
import { useGetBookedOrdersQuery } from '@/redux/api/api';
import { Spinner } from 'flowbite-react';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
const BookedOrder = () => {

    const { user } = useSelector((state) => state.persistedUserReducer);
    const { data, isLoading } = useGetBookedOrdersQuery(undefined);
    const foundBookedOrder = data?.filter((cart) => cart.user === user);
    console.log("foundBookedOrder", foundBookedOrder);
    if (isLoading) {
        return <div style={{ height: "100vh" }} className="flex justify-center items-center">
            <Spinner size="lg" aria-label="Center-aligned spinner example" />
        </div>;
    }
    return (

        <p>Ordered products : {foundBookedOrder ? foundBookedOrder.length : "0"} items</p>
    );
};

export default BookedOrder;