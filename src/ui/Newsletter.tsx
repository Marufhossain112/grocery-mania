import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
type NewsLetterProps = {
    email: string;
};
const Newsletter = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<NewsLetterProps>();
    const onSubmit: SubmitHandler<NewsLetterProps> = async (getData) => {
        console.log("getData", getData);
        reset();
        toast.success("Thank you for subscription.");
    };
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div style={{
                    marginTop: "2rem",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    background: "aquamarine",
                    padding: "4rem"
                }}>
                    <h4 style={{ marginBottom: "0.5rem" }}>$20 discount for your first order</h4>
                    <h3 style={{ marginBottom: "0.7rem" }} className='text-2xl font-medium'>Join our newsletter and get...</h3>
                    <p style={{ marginBottom: "0.7rem", }} className='text-gray-800' >Join our email subscription now to get updates on promotions and coupons.</p>
                    <div className='flex'>
                        <input type="text" placeholder='Your email address'   {...register("email", { required: "email is required" })} />
                        {errors.email && <p className='text-red-600'>{errors.email.message}</p>}
                        <button style={{
                            background: "midnightblue",
                            color: "white",
                            padding: "0 22px",
                        }} type='submit'>Subscribe</button>
                    </div>
                </div >
            </form>
        </div>

    );
};

export default Newsletter;