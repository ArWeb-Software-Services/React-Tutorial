import { useEffect, useState } from "react";

function PUTAPI() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    getUserData();
  }, []);

  async function getUserData() {
    const url = "http://localhost:3001/users";
    let response = await fetch(url + "/1");
    response = await response.json();
    setName(response.name);
    setAge(response.age);
    setEmail(response.email);
  }

  const saveData = async () => {
    const url = "http://localhost:3001/users";
    let response = await fetch(url + "/1", {
      method: "PUT",
      body: JSON.stringify({ name: name, age: age, email: email }),
    });
    response = await response.json();
    console.log(response);
  };
  return (
    <div>
      <h1>PUT API</h1>
      <p>This is the PUT API component.</p>

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <button
        onClick={() => {
          saveData();
        }}
      >
        Save
      </button>
    </div>
  );
}

export default PUTAPI;
