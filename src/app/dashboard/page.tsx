// @ts-nocheck
"use client";
import GMNavbar from '@/ui/components/Navbar';
import { Dropdown, Sidebar, Spinner } from 'flowbite-react';
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiUser } from 'react-icons/hi';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useGetOneUserQuery } from '@/redux/api/api';
import UserTable from '@/ui/UserData/UserTable';
import BookingStatus from '@/ui/UserData/BookingStatus';
import ProfileSummary from '@/ui/UserData/ProfileSummary';
import UserList from '@/ui/Management/UserManagement';
import ProductManagement from '@/ui/Management/ProductManagement';
import ProfileHistory from '@/ui/ProfileHistory/ProfileHistory';
import { AiOutlineMenu } from 'react-icons/ai';
import { RxCross1 } from 'react-icons/rx';
import EditProfile from '@/ui/EditProfile/EditProfile';
import { useRouter } from 'next/navigation';
const UserDashboard = () => {
    const router = useRouter();
    // const [selectedItem, setSelectedItem] = useState(<ProfileHistory />);
    const [selectedItem, setSelectedItem] = useState("");
    const [closeDashboard, setCloseDashboard] = useState(true);
    const [addedCart, setAddedCart] = useState([]);
    const [ordered, setOrdered] = useState([]);
    const { user } = useSelector((state) => state.persistedUserReducer);
    const { role } = useSelector((state) => state.persistedUserReducer);
    const { data, isLoading } = useGetOneUserQuery(user);
    useEffect(() => {
        if (!user) {
            router.push('/login');
        }
        setSelectedItem('activities');
    }
        , [router, isLoading]);
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
            <div className='dashboard-container'>
                {
                    role === 'admin' ? <>
                        <div>
                            <Sidebar className={`h-screen sidebar  ${closeDashboard ? "dashboard-hide" : "dashboard-show"}`} aria-label="Sidebar with multi-level dropdown example">
                                <Sidebar.Items >
                                    <div className='cross-icon'>
                                        <RxCross1 onClick={() => setCloseDashboard(true)} style={{ fontSize: "1.5rem" }} />
                                    </div>
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
                            <div className='p-5 dashboard-icon '>
                                <AiOutlineMenu onClick={() => setCloseDashboard(false)} style={{ fontSize: "1.5rem" }} />
                            </div>
                        </div>
                        {
                            !selectedItem &&
                            <ProfileHistory />
                        }
                        {
                            selectedItem === 'activities' &&
                            <ProfileHistory />
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
                                <h3 className='text-center font-bold text-2xl py-3'>All Products</h3>
                                <ProductManagement />
                            </div>
                        }
                        {
                            selectedItem === 'profile' &&
                            <div style={{ marginTop: '0rem' }}>
                                <h3 className='text-center font-bold text-2xl py-3'>Profile Summary</h3>
                                <ProfileSummary setSelectedItem={setSelectedItem} />
                            </div>
                        }
                        {
                            selectedItem === 'edit' &&
                            <div style={{ marginTop: '0rem' }}>
                                <EditProfile />
                            </div>
                        }
                    </> : <>   <div  >
                        <Sidebar className={`h-screen sidebar  ${closeDashboard ? "dashboard-hide" : "dashboard-show"}`} aria-label="Sidebar with multi-level dropdown example">
                            <Sidebar.Items >
                                <div className='cross-icon'>
                                    <RxCross1 onClick={() => setCloseDashboard(true)} style={{ fontSize: "1.5rem" }} />
                                </div>
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
                                            Order History
                                        </p>
                                    </Sidebar.Item>
                                    <Sidebar.Item
                                        href="#"
                                        icon={HiUser}
                                        onClick={() => handleSidebarItemClick('status')}
                                    >
                                        <p>
                                            Order Status
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
                        <div className='p-5 dashboard-icon '>
                            <AiOutlineMenu onClick={() => setCloseDashboard(false)} style={{ fontSize: "1.5rem" }} />
                        </div>
                    </div>
                        {
                        /*     closeDashboard && */ <div>
                                {
                                    !selectedItem &&
                                    <ProfileHistory />
                                }
                                {
                                    selectedItem === 'activities' &&
                                    <ProfileHistory />
                                }
                                {
                                    selectedItem === 'history' &&
                                    <div style={{ marginTop: '0rem' }}>
                                        <h3 className='text-center font-bold text-2xl py-3'>Booking History</h3>
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
                                            <EditProfile />
                                        </div>
                                    </div>
                                }
                            </div>
                        }
                    </>
                }
            </div>
        </div>
    );
};
export default UserDashboard;