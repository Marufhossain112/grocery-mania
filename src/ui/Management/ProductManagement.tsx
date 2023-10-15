'use client';
import { useGetBookedOrdersQuery, useProductsQuery } from '@/redux/api/api';
import { Table } from 'flowbite-react';
export default function ProductManagement() {
    const { data, isLoading } = useProductsQuery(undefined);
    // console.log("datatqata", data);
    // const { name, quantity, category, price } = data;

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
                <Table.Body className="divide-y">
                    {
                        data?.map((product, index) => (
                            <Table.Row key={index} className="bg-white dark:border-gray-700 dark:bg-gray-800">
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
                        ))
                    }
                </Table.Body>
            </Table>
            {/* )) */}
            {/* } */}
        </div>

    );
}


