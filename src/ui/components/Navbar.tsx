'use client';

import { Button, Navbar } from 'flowbite-react';
import SearchBar from './SearchBar';

export default function GMNavbar() {
    return (
        <Navbar
            fluid
            rounded
            style={{ background: "#21d8aa" }}
        >
            <Navbar.Brand href="https://flowbite-react.com">
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
                <Navbar.Link href="/#testimonials">
                    Testimonials
                </Navbar.Link>
                <Navbar.Link href="/#about">
                    About
                </Navbar.Link>
                <Navbar.Link href="/#faq">
                    FAQ
                </Navbar.Link>
            </Navbar.Collapse>
            <div className="flex md:order-2">
                <SearchBar />
            </div>
            <Navbar.Toggle />
        </Navbar>
    );
}


