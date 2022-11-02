import { Routes, Route, Navigate } from 'react-router-dom';

import Home from '../pages/Home';
import Cart from '../pages/Cart';
import Shop from '../pages/Shop';
import ProductDetails from '../pages/ProductDetails';
import Login from '../pages/Login';
import Signup from './../pages/Signup';
import Checkout from './../pages/Checkout';



const Routers = () => {
  
  return (
    <Routes>
    <Route path='/' element={<Navigate to ='home' />} />
      <Route path='home' element={<Home/>} />
      <Route path='shop' element={<Shop/>} />
      <Route path='shop/:id' element={<ProductDetails/>} />
      <Route path='cart' element={<Cart/>} />
      <Route path='checkout' element={<Checkout/>} />
      <Route path='login' element={<Login/>} />
      <Route path='signup' element={<Signup/>} />
      
    </Routes>
  )
}

export default Routers