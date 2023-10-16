"use client";
import GMNavbar from '@/ui/components/Navbar';
import { Sidebar } from 'flowbite-react';
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiUser } from 'react-icons/hi';
import React, { useState } from 'react';
const AdminDashboard = () => {
    const [selectedItem, setSelectedItem] = useState('activities');
    const handleSidebarItemClick = (item: any) => {
        setSelectedItem(item);
    };
    // console.log("selectedItem", selectedItem);
    return (
        <div>
            <GMNavbar />
            <div style={{
                display: "grid",
                gridTemplateColumns: "30rem auto"
            }}>
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
                {/* <div className="">
                    <h1 className="text-4xl font-bold">User activities</h1>
                </div> */}
            </div>
        </div>
    );
};
export default AdminDashboard;