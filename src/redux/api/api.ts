import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// Define a service using a base URL and expected endpoints
export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
    endpoints: (builder) => ({
        getFeaturedProducts: builder.query({
            query: () => `/featuredProducts`,
        }),
        visualsProducts: builder.query({
            query: () => `/visuals`,
        }),
        products: builder.query({
            query: () => `/products`,
        }),
        getOneProduct: builder.query({
            query: (id) => `/products/${id}`,
        }),
        getUsers: builder.query({
            query: () => `/users`,
        }),
        getOneUser: builder.query({
            query: (email) => `/users/${email}`,
        }),
    }),
});

// auto-generated based on the defined endpoints
export const { useGetFeaturedProductsQuery, useVisualsProductsQuery, useProductsQuery, useGetOneProductQuery, useGetUsersQuery, useGetOneUserQuery } = api;