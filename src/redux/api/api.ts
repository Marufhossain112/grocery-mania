import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// Define a service using a base URL and expected endpoints
export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/' }),
    tagTypes: ['removeUser', 'removeProduct'],
    endpoints: (builder) => ({
        getFeaturedProducts: builder.query({
            query: () => `featuredProducts`,
        }),
        visualsProducts: builder.query({
            query: () => `visuals`,
        }),
        products: builder.query({
            query: () => `products`,
            providesTags: ['removeProduct']
        }),
        getOneProduct: builder.query({
            query: (id) => `products/${id}`,
        }),
        getUsers: builder.query({
            query: () => `users`,
            providesTags: ['removeUser']
        }),
        getOneUser: builder.query({
            query: (email) => `users/${email}`,
        }),
        getBookedOrders: builder.query({
            query: () => `orders`,
        }),
        getAddedCart: builder.query({
            query: () => `cart`,
        }),
        deleteSingleUser: builder.mutation({
            query: (id) => ({
                url: `users/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['removeUser']
        }),
        deleteSingleProduct: builder.mutation({
            query: (id) => ({
                url: `products/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['removeProduct']
        }),
    }),
});

// auto-generated based on the defined endpoints
export const { useGetFeaturedProductsQuery, useVisualsProductsQuery, useProductsQuery, useGetOneProductQuery, useGetUsersQuery, useGetOneUserQuery, useGetBookedOrdersQuery, useGetAddedCartQuery, useDeleteSingleUserMutation, useDeleteSingleProductMutation } = api;