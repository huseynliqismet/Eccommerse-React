import React from 'react'
import Error from "../pages/Error/Error"
import Home from "../pages/Home/Home"
import Shop from "../pages/Shop/Shop"
import Cart from "../pages/Cart/Cart"
import Checkout from "../pages/Checkout/Checkout"
import Login from "../pages/Login/Login"
import Signup from "../pages/Signup/Signup"
import ProductDetails from "../pages/ProductDetails/ProductDetails"
import { Navigate, Route, Routes } from 'react-router-dom'
const  Routers = () => {
  return (
      <Routes>
          <Route path='/' element={<Navigate to="home"/>} />
          <Route path='home' element={<Home/>} />
          <Route path='shop' element={<Shop/>} />
          <Route path='shop/:id' element={<ProductDetails/>} />
          <Route path='cart' element={<Cart/>} />
          <Route path='checkout' element={<Checkout/>} />
          <Route path='login' element={<Login/>} />
          <Route path='signup' element={<Signup/>} />
          <Route path='*' element={<Error/>} />
      </Routes>
  )
}

export default Routers