import React, { useEffect, useState } from "react";

const UseSix = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (!email) return;

    if (!email.includes("@")) {
      setError("Invalid Email");
    } else {
      setError("");
    }
  }, [email]);
  return (
    <div>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <p style={{ color: "red" }}>{error}</p>
    </div>
  );
};

export default UseSix;
