import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App'
import './index.css'
import {createBrowserRouter, Navigate, RouterProvider,} from "react-router-dom";
import {CartPage, CheckoutPage, CmsPage, LoginPage, OrdersPage, ProductsPage, ShopPage, ThanksPage} from "@/pages";
import 'font-awesome/css/font-awesome.min.css';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        loader: async ()=>'load app',
        children: [
            {
                path: "shop",
                element: <ShopPage />,
                loader: async ()=>'load shop',
            },
            {
                path: "cart",
                element: <CartPage />,
                loader: async ()=>'load cart',
            },
            {
                path: "checkout",
                element: <CheckoutPage />,
                loader: async ()=>'load checkout',
            },
            {
                path: "thank you",
                element: <ThanksPage />,
                loader: async ()=>'load thank you',
            },
            {
                path: "login",
                element: <LoginPage />,
                loader: async ()=>'load login',
            },
            {
                path: "cms",
                element: <CmsPage />,
                loader: async ()=>'load cms',
                children: [
                    {
                        path: "products",
                        element: <ProductsPage />,
                        loader: async ()=>'load products',
                    },
                    {
                        path: "orders",
                        element: <OrdersPage />,
                        loader: async ()=>'load orders',
                    },
                    {
                        index: true,
                        element: <Navigate to="products" />,
                        loader: async ()=>'load ',
                    },
                ]
            },
            {
                index:true,
                element: <Navigate to="shop" />,
                loader: async ()=>'load *',
            },
            {
                path: "*",
                element: <Navigate to="shop" />,
                loader: async ()=>'load *',
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.Fragment>
      <RouterProvider router={router} />
  </React.Fragment>,
)
