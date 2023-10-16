// @ts-nocheck
'use client';
import { AiOutlineDelete } from 'react-icons/ai';
import { useDeleteSingleUserMutation, useGetUsersQuery } from '@/redux/api/api';
import { Table } from 'flowbite-react';
import toast from 'react-hot-toast';
export default function UserList() {
    // const dispatch = useDispatch();
    const [deleteSingleUser] = useDeleteSingleUserMutation();
    const { data, isLoading } = useGetUsersQuery(undefined);
    // console.log("Ussssssser", data);
    // const handleDeleteUser = async (id) => {
    //     try {
    //         const response = await deleteSingleUser(id);
    //         if (response.error) {
    //             // Handle the error, e.g., show an error message
    //             toast.error("User deletion failed.");
    //         } else {
    //             // Dispatch an action or update your state if needed
    //             toast.success("User deleted successfully.");
    //         }
    //     } catch (error) {
    //         // Handle unexpected errors
    //         console.error("An error occurred:", error);
    //         toast.error("An unexpected error occurred.");
    //     }
    // };

    const handleDeleteUser = async (id: string) => {
        await deleteSingleUser(id).unwrap().then((response) => {
            // console.log(response);
            toast.success("User deleted successfully");
            // if (response.statusCode === 200) {
            // }
        }).catch((error) => {
            if (error) {
                toast.error(error?.data?.message);
            }
        });
    };
    return (
        <Table >
            <Table.Head>
                <Table.HeadCell>
                    User name
                </Table.HeadCell>
                <Table.HeadCell>
                    email
                </Table.HeadCell>
                <Table.HeadCell>
                    Phone
                </Table.HeadCell>
                <Table.HeadCell>
                    Delete
                </Table.HeadCell>
            </Table.Head>
            {
                data?.map((user, index: number) => (
                    <Table.Body key={index} className="divide-y">
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                {user.name}
                            </Table.Cell>
                            <Table.Cell>
                                {user.email}
                            </Table.Cell>
                            <Table.Cell>
                                {user.phoneNumber}
                            </Table.Cell>
                            <Table.Cell>
                                <AiOutlineDelete onClick={() => handleDeleteUser(user._id)} style={{ color: "red" }} />
                            </Table.Cell>
                        </Table.Row>
                    </Table.Body>
                ))
            }
        </Table>
    );
}


