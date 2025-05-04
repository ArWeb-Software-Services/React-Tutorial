import { useState } from "react";

function POSTAPI() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  const saveData = async () => {
    const url = "http://localhost:3001/users";
    let response = await fetch(url, {
      method: "POST",
      body: JSON.stringify({ name: name, age: age, email: email }),
    });
    response = await response.json();
    console.log(response);
  };
  return (
    <div>
      <h1>POST API</h1>
      <p>This is the POST API component.</p>

      <input
        type="text"
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="Age"
        onChange={(e) => setAge(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="Email"
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

export default POSTAPI;
