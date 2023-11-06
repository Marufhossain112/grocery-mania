// @ts-nocheck
'use client';
import { useGetAddedCartQuery, useRemoveSingleProductFromCartMutation } from '@/redux/api/api';
import { Table } from 'flowbite-react';
import { useSelector } from 'react-redux';
import { RxCrossCircled } from 'react-icons/rx';
import toast from 'react-hot-toast';
export default function BookingStatus() {
    const { data, isLoading } = useGetAddedCartQuery(undefined);
    // console.log("Cart data", data);
    const [removeSingleProductFromCart] = useRemoveSingleProductFromCartMutation();
    // const { bookedOrder } = useSelector((state) => state.persistedProductReducer);
    const { user } = useSelector((state) => state.persistedUserReducer);
    const foundBookedOrder = data?.filter((cart) => cart.user === user);
    const handleCancelFromCart = async (id: string) => {
        try {
            console.log("Id of cart data", id);
            const { data } = await removeSingleProductFromCart(id);
            if (data.acknowledged) {
                toast.success("Product cancelled successfully. ");
            }
        } catch (error) {
            if (error) {
                toast.error(error.message);
            }
        }
    };
    return (
        <div className='table-container'>
            <div className='table-responsive'>
                {
                    foundBookedOrder?.length === 0 ? <p className='text-center'>No products found.</p> : <Table >
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
                                        <Table.Cell onClick={() => handleCancelFromCart(product.id)} className={'text-center'}>
                                            <RxCrossCircled style={{ color: "red", marginLeft: "1rem" }} />
                                        </Table.Cell>
                                    </Table.Row>
                                </Table.Body>
                            ))
                        }
                    </Table>
                }
            </div>
        </div>
    );
}


