import React, { useEffect, useState } from "react";

const UseFour = () => {
  // Search and Filter working using the useEffect
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (query.length === 0) return;

    async function fetchData() {
      const res = await fetch(
        `https://fakestoreapi.com/products/category/${query}`,
      );

      const data = await res.json();
      setResults(data);
    }
    fetchData();
  }, [query]);
  return (
    <div>
      <input
        placeholder="Search Category(electronics, jewelery)"
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {results.map((item) => (
        <p key={item.id}>{item.title}</p>
      ))}
    </div>
  );
};

export default UseFour;
