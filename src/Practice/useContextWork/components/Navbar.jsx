import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { cart } = useCart();

  return <h2>Cart Items: {cart.length}</h2>;
};

export default Navbar;