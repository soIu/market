'use client';

import * as React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import '../../output.css';
import Home from "./pages/Home";
import SearchPage from "./pages/SearchPage";
import Cart from "./pages/Cart";
import ProductPage from "./pages/Food&Drink";
import ProductPageList from "./pages/Categories";
import Transaction from "./pages/Transaction";
import ProductPopUp from "./components/ProductPopUp";
import TransactionDayDetail from "./components/TransactionDayDetail";
import TransactionMonthDetail from "./components/TransactionMonthDetail";
import Wishlist from "./pages/Wishlist";
import Profile from "./pages/Profile";
import DetailProfile from "./pages/DetailProfile";
import ChangePin from "./pages/ChangePin";
import { Platform, TouchableOpacity } from "react-native";

if (Platform.OS === 'web') {
  const originalRender = TouchableOpacity.type.render;
  TouchableOpacity.type.render = function (props) {
    return originalRender({...TouchableOpacity.defaultProps, ...props});
  }
}

if (!TouchableOpacity.defaultProps) TouchableOpacity.defaultProps = {};
console.log(TouchableOpacity);
TouchableOpacity.defaultProps.delayPressIn = 0;
//TouchableOpacity.defaultProps.delayPressOut = 1000;

export default function Router(props) {
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
      path: "/product",
      element: <ProductPage/>,
    },
    {
      path: "/listProduct",
      element: <ProductPageList/>,
    },
    {
      path: "/payment",
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
  return <RouterProvider router={router} />
}