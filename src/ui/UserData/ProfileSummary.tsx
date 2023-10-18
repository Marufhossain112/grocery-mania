// @ts-nocheck
'use client';
import app from '@/firebase/firebase.init';
import { useGetOneUserQuery } from '@/redux/api/api';
import { signOutUser } from '@/redux/user/userslice';
// import GMNavbar from '@/ui/components/Navbar';
import { getAuth, signOut } from "firebase/auth";
import { Avatar, Card, Dropdown } from 'flowbite-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import ProfileHistory from '../ProfileHistory/ProfileHistory';
const { Item } = Dropdown;
export default function UserProfileCard({ setSelectedItem
}) {
    const { user } = useSelector((state) => state.persistedUserReducer);
    const [addedCart, setAddedCart] = useState([]);
    const [ordered, setOrdered] = useState([]);
    fetch("https://grocery-vercel-coral.vercel.app/cart")
        .then((res) => res.json())
        .then((data) => addedCart.push(data))
        .catch((err) => console.log(err));
    // console.log("addedCart", addedCart);
    const userAddedToCart = addedCart.find((cart) => cart);
    const foundAddedCart = userAddedToCart?.filter((cart) => cart.user === user);
    // console.log("foundAddedCart", foundAddedCart);
    fetch("https://grocery-vercel-coral.vercel.app/orders")
        .then((res) => res.json())
        .then((data) => ordered.push(data))
        .catch((err) => console.log(err));
    // console.log("addedCart", addedCart);
    const userOrderedCart = ordered.find((cart) => cart);
    const foundOrderedCart = userOrderedCart?.filter((cart) => cart.user === user);
    const { data, isLoading } = useGetOneUserQuery(user);
    const dispatch = useDispatch();
    const router = useRouter();
    const auth = getAuth(app);
    const handleSignOut = () => {
        signOut(auth).then(() => {
            dispatch(signOutUser());
            // Sign-out successful.
            toast.success("Logout successful");
            router.push("/");
        }).catch((error) => {
        });
    };
    if (data.length === 0) {
        toast.error("No user data found.");
        console.log("errrrr");
        return;
    }
    return (
        <div>
            {/* <GMNavbar /> */}
            <div style={{ marginTop: "2rem" }} className='flex justify-center items-center '>
                {
                    data?.map((user: any, index: number) => (
                        <Card key={index}>
                            <div className="flex justify-end px-4 pt-4">
                                <Dropdown
                                    inline
                                    label=""
                                >
                                    <Item>
                                        <a
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                                            href="#"
                                        >
                                            <p>
                                                Profile settings
                                            </p>
                                        </a>
                                    </Item>
                                    <Item>
                                        <a
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                                            href="#"
                                        >
                                            <button onClick={() => setSelectedItem('edit')}>
                                                Edit profile
                                            </button>
                                        </a>
                                    </Item>
                                    <Item>
                                        <a
                                            className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                                            href="#"
                                        >
                                            <button onClick={handleSignOut}>
                                                Logout
                                            </button>
                                        </a>
                                    </Item>
                                </Dropdown>
                            </div>
                            <div className="flex flex-col items-center pb-10">
                                <Avatar rounded />
                                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                                    {user.name}
                                </h5>
                                <span className="text-sm text-gray-500 dark:text-gray-400">
                                    {user.phoneNumber}
                                </span>
                                <div className="mt-4 flex space-x-3 lg:mt-6">
                                    <p className='text-center'>Payment methods</p>
                                </div>
                                <div className="mt-4 flex space-x-3 lg:mt-6">
                                    <Image src="/assets/bkash.png" alt='bkash' height={40} width={40} />
                                    <Image src="/assets/nagad.png" alt='nagad' height={40} width={40} />
                                    <Image src="/assets/rocket.jpeg" alt='rocket' height={40} width={40} />
                                </div>
                                <div className="mt-4 flex space-x-3 lg:mt-6">
                                    <ProfileHistory />
                                </div>
                            </div>
                        </Card>
                    ))
                }
            </div>
        </div>
    );
}