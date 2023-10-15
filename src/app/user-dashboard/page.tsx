"use client";
import GMNavbar from '@/ui/components/Navbar';
import { Sidebar } from 'flowbite-react';
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiUser } from 'react-icons/hi';
import React, { useState } from 'react';
const UserDashboard = () => {
    const [selectedItem, setSelectedItem] = useState('activities');
    const handleSidebarItemClick = (item: any) => {
        setSelectedItem(item);
    };
    console.log("selectedItem", selectedItem);
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
                    <div>
                        <h1>Activities</h1>
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
                }
            </div>
        </div>
    );
};
export default UserDashboard;