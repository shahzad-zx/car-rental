import React, { useEffect, useState } from "react";

const UseThree = () => {
  // proudcts will fetch live , and all the products data will be stored inside this emtpy array
  const [products, setProducts] = useState([]);
  //   jb tk data nhi aa jata you need to show your users somrthing , and that someting is loading
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  //   Part -1 comprises of creation of states for all the dynamic chnages
  // Part-2- will be comprising of how to fetch the data or async changes
  useEffect(() => {
    // async- await >> async ek baar use krte hai , await kiti bhi baar use kr skte ho, await will stop the code or pause next line mei nhi jaega ,jb tk ke usko response na mil jaye
    async function fetchProducts() {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setProducts(data);
        setLoading(false);
      } catch (err) {
        setError("Something went wrong");
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);
  return (
    <div>
      <h1>Products</h1>
      {loading && <p>Loading......</p>}
      {error && <p>{error}</p>}

      {products.map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.price}</p>
          <img src={item.image} width="100" alt="" />
        </div>
      ))}
    </div>
  );
};

export default UseThree;
