import React, { useEffect, useState } from "react";

const UseTwo = () => {
  const [count, setCount] = useState(0);

  function handleClickk() {
    setCount(count + 1);
  }
  useEffect(() => {
    console.log("Updated count ", count);
  }, [count]);
  // aap expect kr rhe ho ki count will increase by 1 , but due to the closure behaviour of async js, hota kya hai settimeout will always remain the count value when it was first created, toh yeh humesha count =0 ko hi fetch krta hai , now iss problem se recover hone ke liye we have two solutions - ya toh use  the callbackfunction in the settimeout taki latest update rhega state ka ya fir you can use useEffect

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={handleClickk}>Increase</button>
    </div>
  );
};

export default UseTwo;
