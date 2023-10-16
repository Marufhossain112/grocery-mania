// @ts-nocheck
'use client';
import { Table } from 'flowbite-react';
import { useSelector } from 'react-redux';
export default function BookingStatus() {
    const { bookedOrder } = useSelector((state) => state.persistedProductReducer);
    const { user } = useSelector((state) => state.persistedUserReducer);
    const foundBookedOrder = bookedOrder?.filter((cart) => cart.user === user);
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
                            </Table.Row>
                        </Table.Body>
                    ))
                }
            </Table>
        </div>
    );
}


