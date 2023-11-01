// @ts-nocheck
"use client";
import { useEditProfileMutation, useGetOneUserQuery } from '@/redux/api/api';
import { setUser } from '@/redux/user/userslice';
import React from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
type EditProps = {
    name: string;
    email: string;
    phoneNumber: string;
    role: "user" | "admin";
};
const EditProfile = () => {
    const dispatch = useDispatch();
    const [EditProfile] = useEditProfileMutation();
    const { uid,user } = useSelector((state) => state.persistedUserReducer);
    const { data, isLoading } = useGetOneUserQuery(user);
    const userData = data?.filter((userData) => userData.uid === uid);
    const id = userData[0]?._id;

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<EditProps>();
    const onSubmit: SubmitHandler<EditProps> = async (data) => {
        // console.log("responseData", data);
        await EditProfile({ data, id }).unwrap().then((response) => {
            if (response.acknowledged) {
                toast.success("Profile edited successfully.");
                dispatch(setUser({
                    user: data.email,
                    role: data.role,
                    uid,
                }));
                reset();
            }
            console.log("response", response);
            console.log("data", data);
            // if (response.statusCode === 200) {
            // }
        }).catch((error) => {
            if (error) {
                toast.error(error?.data?.message);
                return;
            }
        });
    };
    if (!id) {
        toast.error("No user found.");
        return;
    }
    return (
        <div >
            <div style={{
                display: "grid",
                height: "50vh",
                placeContent: "center"
            }} className="bg-grey-lighter   flex flex-col ">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                        <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">

                            <h1 className="mb-2 text-xl text-center">Edit profile</h1>
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
                            <select
                                className="block border border-grey-light w-full p-3 rounded mb-4"
                                {...register("role")}
                            >
                                <option value="user">User</option>
                                <option value="admin">Admin</option>
                            </select>
                            <button
                                type="submit"
                                className="w-full text-center py-3 rounded add-to-cart focus:outline-none my-1"
                            >Edit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div >
    );
};
export default EditProfile;