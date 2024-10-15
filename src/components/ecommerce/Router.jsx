'use client';

import * as React from "react";
import { useEffect } from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import '../../output.css';
import Home from "./pages/Home";
import SearchPage from "./pages/SearchPage";
import Cart from "./pages/Cart";
import FoodAndDrink from "./pages/Food&Drink";
import Categories from "./pages/Categories";
import Transaction from "./pages/Transaction";
import ProductPopUp from "./components/ProductPopUp";
import TransactionDayDetail from "./components/TransactionDayDetail";
import TransactionMonthDetail from "./components/TransactionMonthDetail";
import Wishlist from "./pages/Wishlist";
import Profile from "./pages/Profile";
import DetailProfile from "./pages/DetailProfile";
import ChangePin from "./pages/ChangePin";
import { Platform, TouchableOpacity } from "react-native";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { useDispatch } from "react-redux";
import { setLoading } from "../../redux/reducers/loading";

if (Platform.OS === 'web') {
  const originalRender = TouchableOpacity.type.render;
  TouchableOpacity.type.render = function (props) {
    return originalRender({...TouchableOpacity.defaultProps, ...props});
  }
}

if (!TouchableOpacity.defaultProps) TouchableOpacity.defaultProps = {};
TouchableOpacity.defaultProps.delayPressIn = 0;
//TouchableOpacity.defaultProps.delayPressOut = 1000;

// const loading = useSelector((state) => state.loading.loading)

// console.log(loading)
function PersistLoaded(props) {
  const dispatch = useDispatch();
  const loaded = !!props.loaded;
  console.log(loaded)
  useEffect(() => {
    dispatch(setLoading(loaded))
  },[loaded])
  return props.children;
}

export default function Router(props) {
  const persistor = persistStore(store);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/search",
      element: <SearchPage/>,
    },
    {
      path: "/foodAndDrink",
      element: <FoodAndDrink/>,
    },
    {
      path: "/categories",
      element: <Categories/>,
    },
    {
      path: "/product/:id",
      element: <ProductPopUp/>,
    },
    {
      path: "/cart",
      element: <Cart/>,
    },
    {
      path: "/transaction",
      element: <Transaction/>,
    },
    {
      path: "/wishlist",
      element: <Wishlist/>,
    },
    {
      path: "/transactionDayDetail",
      element: <TransactionDayDetail/>,
    },
    {
      path: "/transactionMonthDetail",
      element: <TransactionMonthDetail/>,
    },
    {
      path: "/profile",
      element: <Profile/>,
    },
    {
      path: "/detailProfile",
      element: <DetailProfile/>,
    },
    {
      path: "/changePin",
      element: <ChangePin/>,
    }
  ]);
  const app = <RouterProvider router={router}/>;
  return (
      <Provider store={store}>
          <PersistGate persistor={persistor} loading={<PersistLoaded>{app}</PersistLoaded>}>
            <PersistLoaded loaded>
              {app}
            </PersistLoaded>
          </PersistGate>
      </Provider>
  ) 
}