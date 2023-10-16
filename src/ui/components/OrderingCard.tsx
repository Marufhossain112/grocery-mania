// @ts-nocheck
'use client';
import { useGetOneUserQuery } from '@/redux/api/api';
import { Card } from 'flowbite-react';
import { useSelector } from 'react-redux';
export default function OrderingCard() {
    const { user } = useSelector((state) => state.persistedUserReducer);
    const { data, isLoading } = useGetOneUserQuery(user);
    // console.log("userData", data);
    return (
        <Card
            className="max-w-sm"
            href="#"
        >
            <div className='container mx-auto px-4'>
                {data?.map((user) => (
                    <>
                        <p>Deliver to : {user.name}</p>
                        <p>Contact no : {user.phoneNumber}</p>
                        <p>Location : Dhaka,Bangladesh</p>
                    </>
                ))}
            </div>
        </Card>
    );
}


