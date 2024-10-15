import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage"
import { persistReducer } from "redux-persist";
import reducers from "./reducers";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["wishlist", "cart"],
    //timeout: null,
}

const persistedReducer = persistReducer(persistConfig, reducers) 

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}),
});