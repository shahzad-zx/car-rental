import { useCart } from "../context/CartContext";

const products = [
  { id: 1, name: "Shoes" },
  { id: 2, name: "T-shirt" },
];

const Products = () => {
  const { addToCart } = useCart();

  return (
    <div>
      <h2>Products</h2>

      {products.map((item) => (
        <div key={item.id}>
          <span>{item.name}</span>

          <button onClick={() => addToCart(item)}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;