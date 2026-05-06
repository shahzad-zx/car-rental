import React, { useEffect, useState } from "react";

const UseSeven = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    async function fetchUsers() {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setUsers(data);
    }
    fetchUsers();
  }, []);

  function addUser() {
    const newUser = {
      id: users.length + 1,
      name,
    };

    setUsers([...users, newUser]);
    setName("");
  }
  return (
    <div>
      <h2>Users List</h2>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="Add User"
      />
      <button onClick={addUser}>Add</button>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UseSeven;
