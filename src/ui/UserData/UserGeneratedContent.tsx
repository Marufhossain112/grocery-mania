// @ts-nocheck
import { useCreateCommentMutation, useGetOneUserQuery } from '@/redux/api/api';
import { Spinner } from 'flowbite-react';
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';
import CommentGeneratorCard from './CommentGeneratorCard';

type CommentProps = {
    comment: string;
};
const UserGeneratedContent: React.FC = () => {
    const [createComment] = useCreateCommentMutation();
    const { user } = useSelector((state) => state.persistedUserReducer);
    const { data, isLoading } = useGetOneUserQuery(user);
    // const { name } = data[0];
    const name = data?.map((userData) => userData.name);
    // console.log("Ussssssssser", name);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit: SubmitHandler<CommentProps> = async (data) => {
        // console.log(
        //     data.comment);
        const options = {
            data: {
                comment: data.comment,
                name: name[0]
            }
        };
        await createComment(options).unwrap().then((response) => {
            if (response.acknowledged) {
                toast.success("Comment created successfully.");
                reset();
            }
            console.log("response", response);
            console.log("data", data);
            // if (response.statusCode === 200) {
            // }
        }).catch((error) => {
            // if (error) {
            // toast.error(error?.data?.message);
            return;
            // }
        });
    };
    if (isLoading) {
        return <div style={{ height: "100vh" }} className="flex justify-center items-center">
            <Spinner size="lg" aria-label="Center-aligned spinner example" />
        </div>;
    }
    return (
        <div className='mt-6'>
            <div>
                <CommentGeneratorCard />
            </div>
            <div style={{ marginTop: "3rem" }}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                        <div className="bg-white  py-8 rounded shadow-md text-black w-full">
                            <h1 className="mb-2 text-xl text-center">Leave a comment</h1>
                            <input
                                type="text"
                                className="block border border-grey-light w-full p-3 rounded mb-4"
                                placeholder="Comment.."
                                {...register('comment', { required: 'Comment is required' })}
                            />
                            {errors.comment && <p className="text-red-600">{errors.comment.message}</p>}
                        </div>
                        <button
                            type="submit"
                            className="w-full text-center py-3 rounded  focus:outline-none add-to-cart my-1"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default UserGeneratedContent;
