// @ts-nocheck
'use client';
import { Navbar } from 'flowbite-react';
import SearchBar from './SearchBar';
import { useDispatch, useSelector } from 'react-redux';
import { getAuth, signOut } from "firebase/auth";
import app from '@/firebase/firebase.init';
import toast from 'react-hot-toast';
import { signOutUser } from '@/redux/user/userslice';
import { useRouter } from 'next/navigation';
import { persistor } from '@/redux/store';
const auth = getAuth(app);
export default function GMNavbar({ setSearch }) {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.persistedUserReducer);
    const router = useRouter();
    const handleSignout = () => {
        signOut(auth).then(() => {
            persistor.purge();
            dispatch(signOutUser());
            // Sign-out successful.
            toast.success("Logout successful");
            router.push("/");
        }).catch((error) => {
        });
    };
    return (
        <Navbar
            fluid
            rounded
            className='navbar'
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
                {
                    user && <Navbar.Link href="/dashboard">
                        Dashboard
                    </Navbar.Link>
                }
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
                <Navbar.Link href="/feedback">
                    Feedback
                </Navbar.Link>
                {
                    user ? <Navbar.Link onClick={handleSignout}>
                        Logout
                    </Navbar.Link> : <>
                        <Navbar.Link href="/register">
                            Register
                        </Navbar.Link>

                        <Navbar.Link href="/login">
                            Login
                        </Navbar.Link>
                    </>
                }


            </Navbar.Collapse>
            <div className="flex md:order-2">
                <SearchBar setSearch={setSearch} />
            </div>
            <Navbar.Toggle />
        </Navbar>
    );
}


