import React from 'react'
import "./App.css"
import Navbar from './Components/navbar'



import {Routes, Route, BrowserRouter, } from "react-router-dom";
import Home from './pages/Home'
import Product from './pages/product'
import Cart from './pages/cart'

const App = () => {
  return (

    <BrowserRouter>
     <Navbar/>
     
     <Routes>
      
     <Route path="/" element={<Home />} />
     <Route path="/product" element={<Product />} />
     <Route path="/cart" element={<Cart />} />
     
     </Routes>
     
    </BrowserRouter>
  )
}

export default App
