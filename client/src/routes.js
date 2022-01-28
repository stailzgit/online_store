import Admin from './pages/Admin'
import Shop from './pages/Shop'
import Basket from './pages/Basket'
import DevicePage from './pages/DevicePage'

import { ADMIN_ROUTE, BASKET_ROUTE, DEVICE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from './utils/consts'
import React from 'react'
import Auth from "./pages/Auth";

export const authRoutes = [
  {path: ADMIN_ROUTE, Component: <Admin/>},
  {path: BASKET_ROUTE, Component: <Basket/>}
]

export const publicRoutes = [
  {path: LOGIN_ROUTE, Component: <Auth/>},
  {path: SHOP_ROUTE, Component: <Shop/>},
  {path: REGISTRATION_ROUTE, Component: <Auth/>},
  {path: DEVICE_ROUTE + '/:id', Component: <DevicePage/>},
  {path: '*', Component: <Shop/>}
]