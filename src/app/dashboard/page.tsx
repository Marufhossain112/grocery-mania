"use client";
import GMNavbar from '@/ui/components/Navbar';
import { Sidebar, Spinner } from 'flowbite-react';
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiUser } from 'react-icons/hi';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useGetOneUserQuery } from '@/redux/api/api';
const UserDashboard = () => {
    const [selectedItem, setSelectedItem] = useState('Please choose dashboard items');
    const [addedCart, setAddedCart] = useState([]);
    const [ordered, setOrdered] = useState([]);
    const { user } = useSelector((state) => state.persistedUserReducer);
    const { role } = useSelector((state) => state.persistedUserReducer);
    const { data, isLoading } = useGetOneUserQuery(user);
    fetch("http://localhost:5000/cart")
        .then((res) => res.json())
        .then((data) => addedCart.push(data))
        .catch((err) => console.log(err));
    // console.log("addedCart", addedCart);
    const userAddedToCart = addedCart.find((cart) => cart);
    const foundAddedCart = userAddedToCart?.filter((cart) => cart.user === user);
    // console.log("foundAddedCart", foundAddedCart);
    fetch("http://localhost:5000/orders")
        .then((res) => res.json())
        .then((data) => ordered.push(data))
        .catch((err) => console.log(err));
    // console.log("addedCart", addedCart);
    const userOrderedCart = ordered.find((cart) => cart);
    const foundOrderedCart = userOrderedCart?.filter((cart) => cart.user === user);
    console.log("ordered", ordered);
    if (isLoading) {
        return <div style={{ height: "100vh" }} className="flex justify-center items-center">
            <Spinner size="lg" aria-label="Center-aligned spinner example" />
        </div>;
    }
    // console.log("userRole", userRole);
    // console.log("roel", role);
    const handleSidebarItemClick = (item: any) => {
        setSelectedItem(item);
    };
    console.log("selectedItem", selectedItem);
    return (
        <div>
            <GMNavbar />
            <div style={{
                display: "grid",
                gridTemplateColumns: "8rem auto"
            }}>
                {
                    role === 'admin' ? <>
                        <Sidebar className='h-screen' aria-label="Sidebar with multi-level dropdown example">
                            <Sidebar.Items >
                                <Sidebar.ItemGroup>
                                    <Sidebar.Item
                                        href="#"
                                        icon={HiChartPie}
                                        onClick={() => handleSidebarItemClick('activities')}
                                    >
                                        <p>
                                            Platform Activities
                                        </p>
                                    </Sidebar.Item>
                                    <Sidebar.Item
                                        href="#"
                                        icon={HiInbox}
                                        onClick={() => handleSidebarItemClick('history')}
                                    >
                                        <p>
                                            User management
                                        </p>
                                    </Sidebar.Item>
                                    <Sidebar.Item
                                        href="#"
                                        icon={HiUser}
                                        onClick={() => handleSidebarItemClick('status')}
                                    >
                                        <p>
                                            Service management
                                        </p>
                                    </Sidebar.Item>
                                    <Sidebar.Item
                                        href="#"
                                        icon={HiShoppingBag}
                                        onClick={() => handleSidebarItemClick('summary')}
                                    >
                                        <p>
                                            Profile Summary
                                        </p>
                                    </Sidebar.Item>
                                    <Sidebar.Item
                                        href="#"
                                        icon={HiArrowSmRight}
                                        onClick={() => handleSidebarItemClick('edit')}
                                    >
                                        <p>
                                            Edit Profile
                                        </p>
                                    </Sidebar.Item>
                                </Sidebar.ItemGroup>
                            </Sidebar.Items>
                        </Sidebar>
                        {
                            selectedItem === 'activities' &&
                            <div>
                                <h1>Platform Activities</h1>
                            </div>
                        }
                        {
                            selectedItem === 'user' &&
                            <div>
                                <h1>User management</h1>
                            </div>
                        }
                        {
                            selectedItem === 'service' &&
                            <div>
                                <h1>Service management</h1>
                            </div>
                        }
                        {
                            selectedItem === 'profile' &&
                            <div>
                                <h1>Profile Summary</h1>
                            </div>
                        }
                        {
                            selectedItem === 'edit' &&
                            <div>
                                <h1>Edit Profile</h1>
                            </div>
                        }
                    </> : <>   <Sidebar className='h-screen' aria-label="Sidebar with multi-level dropdown example">
                        <Sidebar.Items >
                            <Sidebar.ItemGroup>
                                <Sidebar.Item
                                    href="#"
                                    icon={HiChartPie}
                                    onClick={() => handleSidebarItemClick('activities')}
                                >
                                    <p>
                                        User activities
                                    </p>
                                </Sidebar.Item>
                                <Sidebar.Item
                                    href="#"
                                    icon={HiInbox}
                                    onClick={() => handleSidebarItemClick('history')}
                                >
                                    <p>
                                        Booking History
                                    </p>
                                </Sidebar.Item>
                                <Sidebar.Item
                                    href="#"
                                    icon={HiUser}
                                    onClick={() => handleSidebarItemClick('status')}
                                >
                                    <p>
                                        Booking Status
                                    </p>
                                </Sidebar.Item>
                                <Sidebar.Item
                                    href="#"
                                    icon={HiShoppingBag}
                                    onClick={() => handleSidebarItemClick('summary')}
                                >
                                    <p>
                                        Profile Summary
                                    </p>
                                </Sidebar.Item>
                                <Sidebar.Item
                                    href="#"
                                    icon={HiArrowSmRight}
                                    onClick={() => handleSidebarItemClick('edit')}
                                >
                                    <p>
                                        Edit Profile
                                    </p>
                                </Sidebar.Item>
                            </Sidebar.ItemGroup>
                        </Sidebar.Items>
                    </Sidebar>
                        {
                            selectedItem === 'activities' &&
                            <div className='text-center '>
                                <h3 className='text-center font-bold text-2xl py-3'>User activities</h3>
                                <p>Added to cart: {foundAddedCart ? foundAddedCart.length : "0"} items</p>
                                <p>Ordered products quantity: {foundOrderedCart ? foundOrderedCart.length : "0"} items</p>
                            </div>
                        }
                        {
                            selectedItem === 'history' &&
                            <div>
                                <h1>History</h1>
                            </div>
                        }
                        {
                            selectedItem === 'status' &&
                            <div>
                                <h1>Status</h1>
                            </div>
                        }
                        {
                            selectedItem === 'summary' &&
                            <div>
                                <h1>Summary</h1>
                            </div>
                        }
                        {
                            selectedItem === 'edit' &&
                            <div>
                                <h1>Edit Profile</h1>
                            </div>
                        }</>
                }

            </div>
        </div>
    );
};
export default UserDashboard;