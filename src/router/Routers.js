import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../pages/Home';
import Cart from '../pages/Cart';
import Checkout from '../pages/Checkout';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import ProductDetails from '../pages/ProductDetails';
import Contact from '../pages/Contact';
import Filter from '../components/filter/Filter';
import PageProducts from '../pages/PageProducts';
import CreateProduct from '../components/create Produc/CreateProduct';

const Routers = () => {
    return <Routes>
        <Route path='/' element={<Navigate to='home' />} />
        <Route path='home' element={<Home />} />
        <Route path='cart' element={<Cart />} />
        <Route path='checkout' element={<Checkout />} />
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<Signup />} />
        <Route path='product/:id' element={<ProductDetails />} />
        <Route path='contact' element={<Contact />} />
        <Route path='filter' element={<Filter />} />
        <Route path='shop/:name' element={<PageProducts />} />
        <Route path='create' element={<CreateProduct />} />
    </Routes>

};

export default Routers;