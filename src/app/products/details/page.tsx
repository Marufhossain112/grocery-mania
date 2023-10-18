// @ts-nocheck
"use client";
import ProductDetails from '@/ui/Products/ProductDetails';
import SearchBar from '@/ui/components/SearchBar';
import { Navbar } from 'flowbite-react';
import React from 'react';

const GMProductDetails = () => {
    return (
        <div>
            <Navbar
                fluid
                rounded
                style={{ background: "#21d8aa" }}
            >
                <Navbar.Brand href="/">
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                        Grocery Mania
                    </span>
                </Navbar.Brand>
                <Navbar.Collapse>
                    <Navbar.Link
                        // active
                        href="/"
                    >
                        <p>
                            Home
                        </p>
                    </Navbar.Link>
                    <Navbar.Link href="/products">
                        Products
                    </Navbar.Link>
                </Navbar.Collapse>
                <div className="flex md:order-2">
                    <SearchBar />
                </div>
                <Navbar.Toggle />
            </Navbar>
            <ProductDetails />
        </div>
    );
};

export default GMProductDetails;