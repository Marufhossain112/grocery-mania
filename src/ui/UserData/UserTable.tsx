// @ts-nocheck
'use client';
import { useGetBookedOrdersQuery } from '@/redux/api/api';
import { Table } from 'flowbite-react';
import { useSelector } from 'react-redux';
export default function UserTable() {
    // const { bookedOrder } = useSelector((state) => state.persistedProductReducer);
    const { data, isLoading } = useGetBookedOrdersQuery(undefined);
    // console.log("bookedOrder", data);
    const { user } = useSelector((state) => state.persistedUserReducer);
    const foundBookedOrder = data?.filter((cart) => cart.user === user);
    // console.log("foundBookedOrder", foundBookedOrder);

    return (
        <div>

            <Table >
                <Table.Head>
                    <Table.HeadCell>
                        Product name
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Quantity
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Category
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Price
                    </Table.HeadCell>
                </Table.Head>
                {
                    foundBookedOrder?.map((product, index: number) => (
                        <Table.Body key={index} className="divide-y">
                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    {product.name}
                                </Table.Cell>
                                <Table.Cell>
                                    {product.quantity}
                                </Table.Cell>
                                <Table.Cell>
                                    {product.category}
                                </Table.Cell>
                                <Table.Cell>
                                    ৳{product.price}
                                </Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    ))
                }
            </Table>
        </div>

    );
}


