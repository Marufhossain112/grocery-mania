// @ts-nocheck
"use client";
import app from '@/firebase/firebase.init';
import { useCreateUserMutation, useGetOneUserQuery, useGetUsersQuery } from '@/redux/api/api';
import { setUser } from '@/redux/user/userslice';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { FcGoogle } from 'react-icons/fc';
import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword } from "firebase/auth";

const provider = new GoogleAuthProvider();
type LoginProps = {
    email: string;
    password: string;
};
const auth = getAuth(app);
const Login = () => {
    const { data, isLoading } = useGetUsersQuery(undefined);
    // const usersData = data && data[0];
    const userEmail = data?.map((users) => users?.email);
    // console.log("dataaaaaaaas of email", userEmail);
    const [createUser] = useCreateUserMutation();
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
        const response = await (fetch("https://grocery-vercel-coral.vercel.app/users"));
        const users = await response.json();
        const matchedData = users?.filter((user) => user.email === email);
        // console.log("matched", matchedData[0]);
        await signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log("signInUser", user);
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
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                // const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                // IdP data available using getAdditionalUserInfo(result)
                // ...
                const userData = {
                    name: user.displayName,
                    email: user.email,
                    role: "user",
                    uid: user.uid,
                    photoURL: user.photoURL
                };

                if (!userEmail.includes(user.email)) {
                    // store to database
                    createUser({ data: userData });
                    dispatch(setUser({
                        user: user.email,
                        role: "user",
                        uid: user.uid,
                    }));
                    toast.success("User logged in successfully.");
                    router.push("/profile");
                }
                if (userEmail.includes(user.email)) {
                    // store to database
                    // createUser({ data: userData });
                    dispatch(setUser({
                        user: user.email,
                        role: "user",
                        uid: user.uid,
                    }));
                    toast.success("User logged in successfully.");
                    router.push("/profile");
                }
                // if (user.email === usersData.email) {
                //     // store to redux store
                //     dispatch(setUser({
                //         user: user.email,
                //         role: "user",
                //         uid: user.uid,
                //     }));
                //     toast.success("User logged in successfully.");
                //     router.push("/profile");
                // }
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                // const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
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
                                className="w-full text-center py-3 rounded login-button text-white hover:bg-green-dark focus:outline-none my-1"
                            >Login</button>
                        </div>


                        <div className="text-grey-dark mt-6">
                            Do not have any account?
                            <a className="no-underline border-b border-blue text-green-700" href="../register/">
                                Create account
                            </a>
                        </div>
                    </div>
                </form >
                <button
                    className="w-full text-center py-3 rounded  text-white hover:bg-green-dark focus:outline-none my-1"
                >
                    <div style={{
                        display: "flex",
                        justifyContent: "center",
                        fontSize: "1.5rem",
                        alignItems: "center",
                        gap: "0.3rem"
                    }}>
                        <span style={{ fontSize: "1rem", color: "black" }}> Sign in with</span>   <FcGoogle onClick={handleGoogleSignIn} />
                    </div>
                </button>
            </div >
        </div >
    );
};

export default Login;