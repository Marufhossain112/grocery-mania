// @ts-nocheck
'use client';
import { useDeleteSingleProductMutation, useGetBookedOrdersQuery, useProductsQuery } from '@/redux/api/api';
import { AiOutlineDelete } from 'react-icons/ai';
import { Table } from 'flowbite-react';
import toast from 'react-hot-toast';
export default function ProductManagement() {
    const { data, isLoading } = useProductsQuery(undefined);
    // console.log("datatqata", data);
    // const { name, quantity, category, price } = data;
    const [deleteSingleProduct] = useDeleteSingleProductMutation();
    const handleDeleteProduct = async (id: string) => {
        await deleteSingleProduct(id).unwrap().then((response) => {
            // console.log(response);
            toast.success("Product deleted successfully");
            // if (response.statusCode === 200) {
            // }
        }).catch((error) => {
            if (error) {
                toast.error(error?.data?.message);
            }
        });
    };
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
                    <Table.HeadCell>
                        Delete
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
                                    {product.price}
                                </Table.Cell>
                                <Table.Cell>
                                    <AiOutlineDelete onClick={() => handleDeleteProduct(product._id)} style={{ color: "red" }} />
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


