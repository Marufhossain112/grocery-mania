import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// Define a service using a base URL and expected endpoints
// const baseUrl = 'https://grocery-vercel-coral.vercel.app/';
const baseUrl = 'http://localhost:5000/';
export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl }),
    tagTypes: ['removeUser', 'removeProduct', 'editProfile', 'createUser', 'createComment', 'removeProductFromCart', 'createAddToCart'],
    endpoints: (builder) => ({
        getFeaturedProducts: builder.query({
            query: () => `featuredProducts`,
        }),
        visualsProducts: builder.query({
            query: () => `visuals`,
        }),
        products: builder.query({
            query: ({ search, sort, status, category, page, limit }) => `products?search=${search}&sort=${sort}&status=${status}&category=${category}&page=${page}&limit=${limit}`,
            providesTags: ['removeProduct']
        }),
        allProducts: builder.query({
            query: () => `allProducts`,
            providesTags: ['removeProduct']
        }),
        getOneProduct: builder.query({
            query: (id) => `products/${id}`,
        }),
        getUsers: builder.query({
            query: () => `users`,
            providesTags: ['removeUser', 'editProfile', 'createUser']
        }),
        getComments: builder.query({
            query: () => `comment`,
            providesTags: ['createComment']
        }),
        createUser: builder.mutation({
            query: ({ data }) => ({
                url: `users`,
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['createUser']
        }),
        createComment: builder.mutation({
            query: ({ data }) => ({
                url: `comment`,
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['createComment']
        }),
        createAddToCart: builder.mutation({
            query: ({ data }) => ({
                url: `cart`,
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['createAddToCart']
        }),
        getOneUser: builder.query({
            query: (email) => `users/${email}`,
            providesTags: ['editProfile', 'createUser']
        }),
        getBookedOrders: builder.query({
            query: () => `orders`,
        }),
        getAddedCart: builder.query({
            query: () => `cart`,
            providesTags: ['removeProductFromCart', 'createAddToCart']
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
        removeSingleProductFromCart: builder.mutation({
            query: (id) => ({
                url: `cart/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['removeProductFromCart']
        }),
        editProfile: builder.mutation({
            query: ({ id, data }) => ({
                url: `edit-profile/${id}`,
                method: 'PATCH',
                body: data
            }),
            invalidatesTags: ['editProfile']
        }),
    }),
});

// auto-generated based on the defined endpoints
export const { useGetFeaturedProductsQuery, useVisualsProductsQuery, useProductsQuery, useGetOneProductQuery, useGetUsersQuery, useGetOneUserQuery, useGetBookedOrdersQuery, useGetAddedCartQuery, useDeleteSingleUserMutation, useDeleteSingleProductMutation, useEditProfileMutation, useCreateUserMutation, useCreateCommentMutation, useGetCommentsQuery, useAllProductsQuery, useRemoveSingleProductFromCartMutation, useCreateAddToCartMutation } = api;