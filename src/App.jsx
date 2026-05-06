import { useState } from "react";
import "./App.css";
import AppRoutes from "./appRoutes/AppRoutes";

// practice
import Example from "./Practice/Example";
// import Navbar from './layout/Navbar'
import Navbar from "./Practice/useContextWork/components/Navbar";
import Products from "./Practice/useContextWork/components/Products";
import Cart from "./Practice/useContextWork/components/Cart";
import { CartProvider } from "./Practice/useContextWork/context/CartContext";
function App() {
  return (
    <>
      {/* main */}
      <AppRoutes/> 

        {/* rought */}
      {/* <CartProvider>
        <Navbar />
        <Products />
        <Cart />
      </CartProvider> */}
      {/* <Example /> */}
    </>
  );
}

export default App;
