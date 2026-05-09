import { useEffect, useState } from "react";
import "./App.css";
import AppRoutes from "./appRoutes/AppRoutes";
import { AnimatePresence } from "framer-motion"; // Required for the exit animation
import Loader from "./components/ui/Loader";


// import Example from "./Practice/Example";
// // import Navbar from './layout/Navbar'
// import Navbar from "./Practice/useContextWork/components/Navbar";
// import Products from "./Practice/useContextWork/components/Products";
// import Cart from "./Practice/useContextWork/components/Cart";
// import { CartProvider } from "./Practice/useContextWork/context/CartContext";
// import LocalStrg from "./Practice/localStorage/LocalStrg";
// import UseCallbackExample from "./Practice/UseCallbackExample";
// import LazyLoading from "./Practice/lazyLoading/LazyLoading";
function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // This timer matches the animation feel (2.5 - 3 seconds is standard)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>

    {/* AnimatePresence detects when a component is removed from the DOM */}
      <AnimatePresence mode="wait">
        {isLoading && <Loader key="main-loader" />}
      </AnimatePresence>

      {/* Your main app content sits "behind" the loader */}
      {!isLoading && <AppRoutes />}
      {/* main */}
      {/* <AppRoutes/>  */}

        {/* rought */}
      {/* <CartProvider>
        <Navbar />
        <Products />
        <Cart />
      </CartProvider> */}
      {/* <Example /> */}
      {/* <LocalStrg /> */}
      {/* <UseCallbackExample /> */}
      {/* <LazyLoading /> */}
    </>
  );
}

export default App;
