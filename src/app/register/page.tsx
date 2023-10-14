"use client";
import app from '@/firebase/firebase.init';
import { createUserWithEmailAndPassword, getAuth, updateProfile } from 'firebase/auth';
import { Toast } from 'flowbite-react';
import React from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import toast from 'react-hot-toast';
type RegisterProps = {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    agreement: boolean;
};
const Register = () => {
    const auth = getAuth(app);

    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm<RegisterProps>();
    const onSubmit: SubmitHandler<RegisterProps> = async (data) => {
        const { email, password, name } = data;

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            // Update the user's profile with the display name
            await updateProfile(user, {
                displayName: name,
            });
            toast.success("User created successfully.");
            reset();
            // console.log(user);

        } catch (error: any) {
            const errorCode = error.code;
            const errorMessage = error.message;
            // console.log(errorMessage);
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
                                className="w-full text-center py-3 rounded bg-green-400 text-white hover:bg-green-dark focus:outline-none my-1"
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