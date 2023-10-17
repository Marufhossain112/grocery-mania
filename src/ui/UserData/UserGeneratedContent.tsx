// import React from 'react';
// "use client";
// import { useForm, SubmitHandler } from "react-hook-form";
// import toast from 'react-hot-toast';
// type CommentProps = {
//     comment: string;
// };
// const UserGeneratedContent = () => {
//     const {
//         register,
//         handleSubmit,
//         reset,
//         formState: { errors },
//     } = useForm();
//     // const dispatch = useDispatch();
//     const onSubmit: SubmitHandler<CommentProps> = async ({comment}) => {
//         console.log("Data", comment);
//     };
//     return (
//         <div>
//             <form onSubmit={handleSubmit(onSubmit)}>
//                 <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
//                     <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">

//                         <h1 className="mb-2 text-xl text-center">Leave a comment</h1>
//                         <input
//                             type="text"
//                             className="block border border-grey-light w-full p-3 rounded mb-4"
//                             placeholder="Comment.."
//                             {...register("comment", { required: "Comment is required" })}
//                         />
//                         {/* {errors.comment && <p className='text-red-600'>{errors}</p>} */}
//                     </div>
//                     <button
//                         type="submit"
//                         className="w-full text-center py-3 rounded bg-green-400 text-white hover:bg-green-dark focus:outline-none my-1"
//                     >Submit</button>
//                 </div>
//             </form >
//         </div>
//     );
// };

// export default UserGeneratedContent;;

// @ts-nocheck
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import toast from 'react-hot-toast';

type CommentProps = {
    comment: string;
};

const UserGeneratedContent: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit: SubmitHandler<CommentProps> = async (data) => {
        console.log('Datas', data.comment);
    };

    return (
        <div className='mt-6'>
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
                        className="w-full text-center py-3 rounded bg-green-400 text-white hover-bg-green-dark focus:outline-none my-1"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UserGeneratedContent;
