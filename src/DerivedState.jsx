import { useState } from "react";

function DerivedState() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState("");

  const handleUsers = () => {
    setUsers([...users, user]);
  };

  const total = users.length;
  const lastUser = users[users.length - 1] || "No users added yet.";
  const uniqueUsers = [...new Set(users)].length;

  return (
    <>
      <h1>Derived State</h1>
      <h2>Total User: {total}</h2>
      <h2>Last User: {lastUser}</h2>
      <h2>Unique Total User: {uniqueUsers} </h2>
      <input
        type="text"
        onChange={(event) => setUser(event.target.value)}
        placeholder="Add User"
      />
      <button onClick={handleUsers}>Add User</button>
      {users.length > 0 ? (
        <ul>
          {users.map((user, index) => (
            <li key={index}>{user}</li>
          ))}
        </ul>
      ) : (
        <p>No users added yet.</p>
      )}
    </>
  );
}

export default DerivedState;
