// @ts-nocheck
'use client';
import { useGetUsersQuery } from '@/redux/api/api';
import { Card } from 'flowbite-react';
export default function UserList() {
    const { data, isLoading } = useGetUsersQuery(undefined);
    // console.log("Ussssssser", data);
    return (
        <Card>
            <div className="mb-4 flex items-center justify-between">
                <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
                    All users
                </h5>
            </div>
            <div className="flow-root">
                <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                    {
                        data?.map((user, index) => (
                            <li key={index} className="py-3 sm:py-4">
                                <div className="flex items-center space-x-4">
                                    <div className="flex-shrink-0">
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                                            {
                                                user.name
                                            }
                                        </p>
                                        <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                                            {
                                                user.email
                                            }
                                        </p>
                                    </div>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </Card >
    );
}


