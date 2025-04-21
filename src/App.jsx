import React from "react";
import "./App.css";
import Navbar from "./Components/navbar";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Product from "./pages/product";
import Cart from "./pages/cart";
import { SnackbarProvider } from "notistack";
import { StoreProvider } from "./utils/store";

const App = () => {
  return (
    <BrowserRouter>
    <StoreProvider>
      <SnackbarProvider>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          
        </Routes>
        
      </SnackbarProvider>
      </StoreProvider>
    </BrowserRouter>
  );
};

export default App;