// @ts-nocheck
import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    search: null,
    sort: null,
    minPrice: null,
    maxPrice: null,
    category: null
};
const productQuerySlice = createSlice({
    name: 'query',
    initialState,
    reducers: {
        productQuery(state, action) {
            state.search = action.payload.search;
            state.sort = action.payload.sort;
            state.minPrice = action.payload.minPrice;
            state.maxPrice = action.payload.maxPrice;
            state.category = action.payload.category;
        }
    },
});
export const { productQuery } = productQuerySlice.actions;
export default productQuerySlice.reducer;