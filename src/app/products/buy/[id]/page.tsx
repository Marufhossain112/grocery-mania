// @ts-nocheck
"use client";
import { useGetOneProductQuery, useGetOneUserQuery } from '@/redux/api/api';

import GMNavbar from '@/ui/components/Navbar';
import OrderingCard from '@/ui/components/OrderingCard';
import SelectPayment from '@/ui/components/SelectPaymentMethod';
import { Card, Spinner } from 'flowbite-react';
import { useParams, useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';

const BuyPage = () => {
    const router = useRouter();
    const { id } = useParams();
    const { user } = useSelector((state) => state.persistedUserReducer);
    const { data, isLoading } = useGetOneProductQuery(id);
    useEffect(() => {
        if (!user) {
            router.push('/login');
        }

    }
        , [router, isLoading]);
    const dispatch = useDispatch();
    // console.log("Product data", data);
    const handleOrder = () => {
        const orderData = { user, ...data };
        fetch("http://localhost:5000/orders", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(orderData),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    // dispatch(bookedOrder(orderData));
                    toast.success("Order confirmed successfully.");
                }
            })
            .catch((err) => console.log(err));
    };

    // if (!user) {
    //     redirect("/login");
    // }
    if (isLoading) {
        return <div style={{ height: "100vh" }} className="flex justify-center items-center">
            <Spinner size="lg" aria-label="Center-aligned spinner example" />
        </div>;
    }
    return (
        <div>
            <GMNavbar />
            <div className='container mx-auto px-4 mt-4'>
                <div className='order-card-container'>
                    <div>
                        <OrderingCard />
                        <SelectPayment />
                    </div>
                    <div className='order-summary-container'>
                        <Card style={{ width: "17rem" }}>
                            <h5 className=" text-md font-medium text-center">
                                Order summery
                            </h5>
                            <ul className="my-7 space-y-5">
                                <li className=' flex justify-between'>
                                    <span>items </span>
                                    <span>৳{data.price}</span>
                                </li>
                                <li className=' flex justify-between'>
                                    <span>delivery </span>
                                    <span>৳10</span>
                                </li>
                                <li className=' flex justify-between'>
                                    <span>vat </span>
                                    <span>৳1</span>
                                </li>
                                <li className=' flex justify-between'>
                                    <span>total </span>
                                    <span>৳{data?.price + 10 + 1}</span>
                                </li>
                            </ul>
                            <button
                                className="inline-flex w-full justify-center rounded-lg bg-cyan-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-4 focus:ring-cyan-200 dark:focus:ring-cyan-900"
                                type="button"
                            >
                                <button onClick={handleOrder}>
                                    Confirm Order
                                </button>
                            </button>
                        </Card>
                    </div>
                </div>

            </div>
        </div>
    );
};
export default BuyPage;