// @ts-nocheck
'use client';
import { AiOutlineDelete } from 'react-icons/ai';
import { useDeleteSingleUserMutation, useGetUsersQuery } from '@/redux/api/api';
import { Table } from 'flowbite-react';
import toast from 'react-hot-toast';
import { getAuth, deleteUser } from "firebase/auth";
import app from '@/firebase/firebase.init';
export default function UserList() {
    const auth = getAuth(app);
    const [deleteSingleUser] = useDeleteSingleUserMutation();
    const { data, isLoading } = useGetUsersQuery(undefined);
    // const handleDeleteUser = async (id: string) => {
    //     const user = auth.currentUser;
    //     await deleteUser(user).then(() => {
    //     }).catch((error) => {
    //     });
    //     await deleteSingleUser(id).unwrap().then((response) => {
    //         // console.log(response);
    //         toast.success("User deleted successfully");
    //     }).catch((error) => {
    //         if (error) {
    //             toast.error(error?.data?.message);
    //         }
    //     });
    // };
    const handleDeleteUser = async (id: string) => {
        const user = auth.currentUser;

        try {
            // Delete the user from Firebase Authentication
            await user.delete();

            // Now, delete the user from your custom database
            await deleteSingleUser(id).unwrap();
            toast.success("User deleted successfully");
        } catch (error) {
            if (error) {
                toast.error(error.message);
            }
        }
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
                    Role
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
                                {user.role}
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


