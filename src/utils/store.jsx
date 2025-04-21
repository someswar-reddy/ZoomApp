import React, { createContext, useState } from "react";

export const Store = createContext();

export const StoreProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  return <Store.Provider value={{cart, setCart}}>{children}</Store.Provider>;
};