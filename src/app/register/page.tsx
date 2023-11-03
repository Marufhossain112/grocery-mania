// @ts-nocheck
"use client";
import app from '@/firebase/firebase.init';
import { useGetUsersQuery } from '@/redux/api/api';
import { setUser } from '@/redux/user/userslice';
import { createUserWithEmailAndPassword, getAuth, updateProfile } from 'firebase/auth';
import React from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
type RegisterProps = {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    agreement: boolean;
    phoneNumber: string;
    role: string;
};
const Register = () => {
    const { data, isLoading } = useGetUsersQuery(undefined);
    const usersData = data && data[0];
    // console.log("all users data", usersData);
    const auth = getAuth(app);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<RegisterProps>();
    const dispatch = useDispatch();
    const onSubmit: SubmitHandler<RegisterProps> = async (data) => {

        const { email, password, name, phoneNumber, confirmPassword } = data;
        if (password !== confirmPassword) {
            toast.error("Passwords did not match");
            return;
        }
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            user.role = "user";
            // console.log("UserData", user);
            dispatch(setUser({
                user: user.email,
                role: user.role,
                uid: user.uid
            }));
            await updateProfile(user, {
                displayName: name,
            });

            // @ts-ignore
            // @ts-ignore
            user.phoneNumber = phoneNumber;
            const users = {
                name: user.displayName,
                email: user.email,
                role: user.role,
                phoneNumber: user.phoneNumber,
                uid: user.uid,
                photoURL: user.photoURL,
            };
            if (user.email === usersData.email) {
                toast.error("User already registered, please login");
                return;
            }
            if (user && user.email !== usersData.email) {
                fetch("https://grocery-vercel-coral.vercel.app/users", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json",
                    },
                    body: JSON.stringify(users),
                })
                    .then((res) => res.json())
                    .then((data) => console.log(data))
                    .catch((err) => console.log(err));
            }
            toast.success("User created successfully.");
            reset();
            // console.log(user);
        } catch (error: any) {
            const errorCode = error.code;
            const errorMessage = error.message;
        }
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

                            <h1 className="mb-2 text-xl text-center">Register</h1>
                            <input
                                type="text"
                                className="block border border-grey-light w-full p-3 rounded mb-4"
                                placeholder="Full Name"
                                {...register("name", { required: "Name is required" })}
                            />
                            {errors.name && <p className='text-red-600'>{errors.name.message}</p>}
                            <input
                                type="email"
                                className="block border border-grey-light w-full p-3 rounded mb-4"
                                placeholder="Email"
                                {...register("email", { required: "email is required" })} />
                            {errors.email && <p className='text-red-600'>{errors.email.message}</p>}
                            <input
                                type="number"
                                className="block border border-grey-light w-full p-3 rounded mb-4"
                                placeholder="Phone number"
                                {...register("phoneNumber")} />
                            <input
                                type="password"
                                className="block border border-grey-light w-full p-3 rounded mb-4"
                                placeholder="Password"
                                {...register("password", { required: "password is required" })} />
                            {errors.password && <p className='text-red-600'>{errors.password.message}</p>}
                            <input
                                type="password"
                                className="block border border-grey-light w-full p-3 rounded mb-4"
                                {...register("confirmPassword", { required: "confirm password is required" })}
                                placeholder="Confirm Password" />
                            {errors.confirmPassword && <p className='text-red-600'>{errors.confirmPassword.message}</p>}
                            <div className="text-center text-sm text-grey-dark mt-4">
                                <input type='checkbox' className='mr-1'  {...register("agreement", { required: "You must need to check the agreement" })}
                                />
                                By signing up, you agree to the
                                <a className="no-underline border-b border-grey-dark text-green-700 hover:underline" href="#">
                                    &nbsp; Terms of Service
                                </a> and
                                <a className="no-underline border-b border-grey-dark text-green-700 hover:underline" href="#">
                                    &nbsp; Privacy Policy
                                </a>
                            </div>

                            {errors.agreement && <p className='text-red-600'>{errors.agreement.message}</p>}
                            <button
                                type="submit"
                                className="w-full registration-button text-center py-3 rounded text-white hover:bg-green-dark focus:outline-none my-1"
                            >Create Account</button>
                        </div>

                        <div className="text-grey-dark mt-6">
                            Already have an account?
                            <a className="no-underline border-b border-blue text-green-700" href="../login/">
                                Log in
                            </a>
                        </div>
                    </div>
                </form>
            </div>
        </div >
    );
};

export default Register;