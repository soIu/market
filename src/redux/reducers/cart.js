import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.cart.push(action.payload);
        },
        replaceData: (state, action) => {
            state.cart = action.payload;
        },
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload);
        },
        removeAllFromCart: (state, action) => {
            state.cart = [];
        },
    },
});

export const { addToCart, removeFromCart, replaceData } = cartSlice.actions;
export default cartSlice.reducer;