import { combineReducers } from "@reduxjs/toolkit";
import wishlist from "./wishlist";
import cart from "./cart";
import loading from "./loading";

const reducers = combineReducers({
    wishlist,
    cart,
    loading
}); 

export default reducers