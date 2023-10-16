// @ts-nocheck
import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    v1: {},
};
const clearSlice = createSlice({
    name: 'clear',
    initialState,
    reducers: {
        clearResults() { }
    },
});
export const { clearResults } = clearSlice.actions;
export default clearSlice.reducer;