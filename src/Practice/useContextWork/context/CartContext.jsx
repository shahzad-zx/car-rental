import { Children, createContext, useContext, useState } from "react";


// create context
const CartContext = createContext();


// provider component
export const CartProvider = ({Children}) => {

    // cart state
    const [cart, setCart] = useState([]);

    // add item
    const addItem = (product) => {
        setCart([...cart, product])
    };

    // remove item

    const removeItem = (id) => {
        setCart(cart.filter((item) => item.id !== id));
    }

    return <>
    <CartContext.Provider value={{cart, addItem, removeItem}}>
        {Children}
    </CartContext.Provider>
    
    </>
};

// custom hook
export const useCart = () => useContext(CartContext);