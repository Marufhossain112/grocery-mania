"use client";
import app from '@/firebase/firebase.init';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import toast from 'react-hot-toast';
import GMNavbar from './components/Navbar';
type FeedbackProps = {
    name: string;
    email: string;
    message: string;
    rating: number;
};
const FeedbackForm = () => {
    const router = useRouter();
    const auth = getAuth(app);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FeedbackProps>();
    const onSubmit: SubmitHandler<FeedbackProps> = async (data) => {
        // const { email, password } = data;
        // console.log(data);
        reset();
        toast.success("Thank you for giving feedback.");
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
                            <h1 className="mb-2 text-xl text-center">Feedback</h1>
                            <input
                                type="text"
                                className="block border border-grey-light w-full p-3 rounded mb-4"
                                placeholder="Your name"
                                {...register("name", { required: "name is required" })} />
                            {errors.name && <p className='text-red-600'>{errors.name.message}</p>}
                            <input
                                type="email"
                                className="block border border-grey-light w-full p-3 rounded mb-4"
                                placeholder="Your email"
                                {...register("email", { required: "email is required" })} />
                            {errors.email && <p className='text-red-600'>{errors.email.message}</p>}
                            <textarea
                                rows={4}
                                className="block border border-grey-light w-full p-3 rounded mb-4"
                                placeholder="Your message"
                                {...register("message", { required: "message is required" })} />
                            {errors.message && <p className='text-red-600'>{errors.message.message}</p>}
                            <div className="mb-4">
                                <p className="mb-2">Rate your experience:</p>
                                <div>
                                    {[1, 2, 3, 4, 5].map((rating) => (
                                        <label key={rating} className="mr-2">
                                            <input className='mr-2'
                                                type="radio"
                                                value={rating}
                                                {...register("rating")}
                                            />
                                            {rating}
                                        </label>
                                    ))}
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="w-full text-center py-3 rounded bg-green-400 text-white hover:bg-green-dark focus:outline-none my-1"
                            >Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div >
    );
};
export default FeedbackForm;