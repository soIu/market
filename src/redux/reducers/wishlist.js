import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    wishlist: [],
};

const wishlistSlice = createSlice({
    name: "wishlist",
    initialState,
    reducers: {
        addToWishlist: (state, action) => {
            state.wishlist.push(action.payload);
        },
        removeFromWishlist: (state, action) => {
            state.wishlist = state.wishlist.filter((item) => item !== action.payload);
        },
        replaceData: (state, action) => {
            state.wishlist = action.payload;
        },
    },
});

export const { addToWishlist, removeFromWishlist, replaceData } = wishlistSlice.actions;
export default wishlistSlice.reducer;