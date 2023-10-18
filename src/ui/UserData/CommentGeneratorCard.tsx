'use client';

import { useGetCommentsQuery } from '@/redux/api/api';
import { Card, Spinner } from 'flowbite-react';

export default function CommentGeneratorCard() {
    const { data, isLoading } = useGetCommentsQuery(undefined);
    console.log("comments", data);
    if (isLoading) {
        return <div style={{ height: "100vh" }} className="flex justify-center items-center">
            <Spinner size="lg" aria-label="Center-aligned spinner example" />
        </div>;
    }
    return (
        <div className='comment-container'>
            {
                data?.map((comment: any, index: number) => (
                    <Card key={index} className="max-w-sm">
                        <h5 className="text-lg font-normal tracking-tight text-gray-900 dark:text-white">
                            <p>
                                {comment.comment}
                            </p>
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            <p>
                                <span className='text-gray-500'>by</span> {comment.name}
                            </p>
                        </p>
                    </Card>
                ))
            }
        </div>

    );
}