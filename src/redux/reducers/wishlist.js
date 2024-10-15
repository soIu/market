import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    wishlist: [],
};

const wishlistSlice = createSlice({
    name: "wishlist",
    initialState,
    reducers: {
        addToWishlist: (state, action) => {
            state.cart.push(action.payload);
        },
        removeFromWishlist: (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload);
        },
        replaceData: (state, action) => {
            state.cart = action.payload;
        },
    },
});

export const { addToWishlist, removeFromWishlist, replaceData } = wishlistSlice.actions;
export default wishlistSlice.reducer;