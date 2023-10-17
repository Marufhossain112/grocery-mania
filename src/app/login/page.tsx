// @ts-nocheck
"use client";
import app from '@/firebase/firebase.init';
import { useGetOneUserQuery } from '@/redux/api/api';
import { setUser } from '@/redux/user/userslice';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
type LoginProps = {
    email: string;
    password: string;
};
const Login = () => {
    // const { data, isLoading } = useGetOneUserQuery(email);
    const dispatch = useDispatch();
    const router = useRouter();
    const auth = getAuth(app);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<LoginProps>();
    const onSubmit: SubmitHandler<LoginProps> = async (getData) => {
        const { email, password } = getData;
        // const userRole = data.filter((data) => data.role);
        // console.log("role", userRole);
        const response = await (fetch("http://localhost:5000/users"));
        const users = await response.json();
        const matchedData = users?.filter((user) => user.email === email);
        // console.log("matched", matchedData[0]);
        await signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // console.log("signInUser", user);
            dispatch(setUser({
                user: user.email,
                role: matchedData[0].role,
                uid: matchedData[0].uid
            }));
            toast.success("User logged in successfully.");
            router.push("/profile");
            reset();
        })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    };
    return (
        <div >
            <div style={{
                display: "grid",
                height: "100vh",
                placeContent: "center"
            }} className="bg-grey-lighter   flex flex-col ">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                        <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                            <h1 className="mb-2 text-xl text-center">Login</h1>
                            <input
                                type="email"
                                className="block border border-grey-light w-full p-3 rounded mb-4"
                                placeholder="Email"
                                {...register("email", { required: "email is required" })} />
                            {errors.email && <p className='text-red-600'>{errors.email.message}</p>}
                            <input
                                type="password"
                                className="block border border-grey-light w-full p-3 rounded mb-4"
                                placeholder="Password"
                                {...register("password", { required: "password is required" })} />
                            {errors.password && <p className='text-red-600'>{errors.password.message}</p>}
                            <button
                                type="submit"
                                className="w-full text-center py-3 rounded bg-green-400 text-white hover:bg-green-dark focus:outline-none my-1"
                            >Login</button>
                        </div>

                        <div className="text-grey-dark mt-6">
                            Do not have any account?
                            <a className="no-underline border-b border-blue text-green-700" href="../register/">
                                Create account
                            </a>
                        </div>
                    </div>
                </form>
            </div>
        </div >
    );
};

export default Login;