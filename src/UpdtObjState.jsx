import { useState } from "react";

function UpdtObjState() {
  const [user, setUser] = useState({
    name: "ArWeb",
    age: 23,
    address: {
      city: "Pune",
      state: "MH",
    },
  });

  const handleNameChange = (val) => {
    user.name = val;
    setUser({ ...user });
  };
  const handleNameCity = (val) => {
    user.address.city = val;
    setUser({ ...user });
  };
  return (
    <>
      <h1>UpdtObjState</h1>
      <input type="text" onChange={(e) => handleNameChange(e.target.value)} />
      <br />
      <input type="text" onChange={(e) => handleNameCity(e.target.value)} />
      <h2>Name {user.name}</h2>
      <h2>Age {user.age}</h2>
      <h2>City {user.address.city}</h2>
    </>
  );
}

export default UpdtObjState;
