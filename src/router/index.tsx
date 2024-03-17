import NotFound from "@/views/common/404"
import React, { lazy } from "react"
import { RouteObject } from "react-router-dom"

const GoodsList = lazy(() => import('@/views/goods/List' /* webpackPrefetch: true */))
const GoodsDetail = lazy(() => import('@/views/goods/Detail' /* webpackPrefetch: true */))
const Cart = lazy(() => import('@/views/cart' /* webpackPrefetch: true */))
const Mine = lazy(() => import('@/views/mine' /* webpackPrefetch: true */))
const OrderList = lazy(() => import('@/views/mine/order/List' /* webpackPrefetch: true */))

export const routes: RouteObject[] = [
  {
    path: '/goods',
    element: <GoodsList />,
  },
  {
    path: '/goods/:id',
    element: <GoodsDetail />,
  },
  {
    path: '/cart',
    element: <Cart />,
  },
  {
    path: '/mine',
    element: <Mine />,
  },
  {
    path: '/mine/order',
    element: <OrderList />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]