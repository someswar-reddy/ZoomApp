import React from "react";
import "./App.css";
import Navbar from "./Components/navbar";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Product from "./pages/product";
import Cart from "./pages/cart";
import { SnackbarProvider } from "notistack";
const App = () => {
  return (
    <BrowserRouter>
      <SnackbarProvider>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </SnackbarProvider>
    </BrowserRouter>
  );
};

export default App;
