// @ts-nocheck
// productSlice.js
import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    addToCart: [],
    bookedOrder: [],
    user: null
};
const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        addToCart(state, action) {
            state.addToCart = [...state.addToCart, action.payload];
            state.user = action.payload.user;
        },
        bookedOrder(state, action) {
            state.user = action.payload.user;
            state.bookedOrder = [...state.bookedOrder, action.payload];
        }
    },
});
export const { addToCart, bookedOrder } = productSlice.actions;
export default productSlice.reducer;