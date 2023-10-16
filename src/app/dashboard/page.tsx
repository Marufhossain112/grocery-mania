// @ts-nocheck
"use client";
import GMNavbar from '@/ui/components/Navbar';
import { Sidebar, Spinner } from 'flowbite-react';
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiUser } from 'react-icons/hi';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useGetOneUserQuery } from '@/redux/api/api';
import UserTable from '@/ui/UserData/UserTable';
import BookingStatus from '@/ui/UserData/BookingStatus';
import ProfileSummary from '@/ui/UserData/ProfileSummary';
import toast from 'react-hot-toast';
import UserList from '@/ui/Management/UserManagement';
import ProductManagement from '@/ui/Management/ProductManagement';
const UserDashboard = () => {
    const [selectedItem, setSelectedItem] = useState('Please choose dashboard items');
    const [addedCart, setAddedCart] = useState([]);
    const [ordered, setOrdered] = useState([]);
    const { user } = useSelector((state) => state.persistedUserReducer);
    const { role } = useSelector((state) => state.persistedUserReducer);
    const { data, isLoading } = useGetOneUserQuery(user);
    fetch("https://grocery-vercel-coral.vercel.app/cart")
        .then((res) => res.json())
        .then((data) => addedCart.push(data))
        .catch((err) => console.log(err));
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
    // console.log("ordered", ordered);
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
    // console.log("selectedItem", selectedItem);
    return (
        <div>
            <GMNavbar />
            <div style={{
                display: "grid",
                gridTemplateColumns: "12rem auto"
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
                                        onClick={() => handleSidebarItemClick('user')}
                                    >
                                        <p>
                                            User management
                                        </p>
                                    </Sidebar.Item>
                                    <Sidebar.Item
                                        href="#"
                                        icon={HiUser}
                                        onClick={() => handleSidebarItemClick('service')}
                                    >
                                        <p>
                                            Product management
                                        </p>
                                    </Sidebar.Item>
                                    <Sidebar.Item
                                        href="#"
                                        icon={HiShoppingBag}
                                        onClick={() => handleSidebarItemClick('profile')}
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
                            selectedItem === 'user' &&
                            <div>
                                <UserList />
                            </div>
                        }
                        {
                            selectedItem === 'service' &&
                            <div style={{ marginTop: '0rem' }}>
                                <h3 className='text-center font-bold text-2xl py-3'>Product Management</h3>
                                <ProductManagement />
                            </div>
                        }
                        {
                            selectedItem === 'profile' &&
                            <div style={{ marginTop: '0rem' }}>
                                <h3 className='text-center font-bold text-2xl py-3'>Profile Summary</h3>
                                <ProfileSummary />
                            </div>
                        }
                        {
                            selectedItem === 'edit' &&
                            <div style={{ marginTop: '0rem' }}>
                                <h3 className='text-center font-bold text-2xl py-3'>Edit profile</h3>
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
                            <div style={{ marginTop: '0rem' }}>
                                <h3 className='text-center font-bold text-2xl py-3'>User activities</h3>
                                <UserTable />
                            </div>
                        }
                        {
                            selectedItem === 'status' &&
                            <div style={{ marginTop: '0rem' }}>
                                <h3 className='text-center font-bold text-2xl py-3'>Booking Status</h3>
                                <BookingStatus />
                            </div>
                        }
                        {
                            selectedItem === 'summary' &&
                            <div style={{ marginTop: '0rem' }}>
                                <h3 className='text-center font-bold text-2xl py-3'>Profile Summary</h3>
                                <ProfileSummary />
                            </div>
                        }
                        {
                            selectedItem === 'edit' &&
                            <div>
                                <div style={{ marginTop: '0rem' }}>
                                    <h3 className='text-center font-bold text-2xl py-3'>Edit profile</h3>
                                </div>
                            </div>
                        }</>
                }

            </div>
        </div>
    );
};
export default UserDashboard;