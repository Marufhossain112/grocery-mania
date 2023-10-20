// @ts-nocheck
'use client';
import { useGetAddedCartQuery, useGetBookedOrdersQuery, useRemoveSingleProductFromCartMutation } from '@/redux/api/api';
import { Table } from 'flowbite-react';
import { useSelector } from 'react-redux';
import { RxCrossCircled } from 'react-icons/rx';
import toast from 'react-hot-toast';
export default function BookingStatus() {
    const { data, isLoading } = useGetAddedCartQuery(undefined);
    console.log("Cart data", data);
    const [removeSingleProductFromCart] = useRemoveSingleProductFromCartMutation();
    // const { bookedOrder } = useSelector((state) => state.persistedProductReducer);
    const { user } = useSelector((state) => state.persistedUserReducer);
    const foundBookedOrder = data?.filter((cart) => cart.user === user);
    const handleCancelFromCart = async (id: string) => {
        try {
            console.log("Id of cart data", id);
            // Delete the user from Firebase Authentication
            // Now, delete the user from your custom database
             await removeSingleProductFromCart(id).unwrap();

            toast.success("Product cancelled successfully. ");
        } catch (error) {
            if (error) {
                toast.error(error.message);
            }
        }
    };
    return (
        <div>
            <Table >
                <Table.Head>
                    <Table.HeadCell>
                        Product name
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Location
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Quantity
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Status
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Cancel
                    </Table.HeadCell>
                </Table.Head>
                {
                    foundBookedOrder?.map((product, index) => (
                        <Table.Body key={index} className="divide-y">
                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    {product.name}
                                </Table.Cell>
                                <Table.Cell>
                                    {product.location}
                                </Table.Cell>
                                <Table.Cell>
                                    {product.quantity}
                                </Table.Cell>
                                <Table.Cell>
                                    {product.status}
                                </Table.Cell>
                                <Table.Cell className={'text-center'}>
                                    <RxCrossCircled onClick={() => handleCancelFromCart(product.id)} style={{ color: "red", marginLeft: "1rem" }} />
                                </Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    ))
                }
            </Table>
        </div>
    );
}


