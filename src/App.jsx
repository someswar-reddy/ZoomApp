import React from "react";
import "./App.css";
import Navbar from "./Components/navbar";
import { useAuth0 } from "@auth0/auth0-react";
import { Routes, Route, BrowserRouter,Navigate } from "react-router-dom";
import Home from "./pages/home";
import Product from "./pages/product";
import Cart from "./pages/cart";
import { SnackbarProvider } from "notistack";
import { StoreProvider } from "./utils/store";

const App = () => {
  //const {isAuthenticated } = useAuth0();
const isAuthenticated = localStorage.getItem("isAuthenticated");

  console.log(isAuthenticated);
  return (

    <BrowserRouter>
    <StoreProvider>
      <SnackbarProvider>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={
            isAuthenticated ? <Cart/>: <Navigate to="/" />
          } />
          
        </Routes>
        
      </SnackbarProvider>
      </StoreProvider>
    </BrowserRouter>
  );
};

export default App;