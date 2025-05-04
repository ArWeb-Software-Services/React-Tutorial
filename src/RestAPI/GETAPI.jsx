import { useEffect, useState } from "react";

function GETAPI() {
  const [usersData, setUsersData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getUserData();
    setLoading(false);
  }, []);

  async function getUserData() {
    const url = "http://localhost:3001/users";
    let response = await fetch(url);
    response = await response.json();
    setUsersData(response);
  }

  const deleteUser = async (id) => {
    const url = "http://localhost:3001/users";
    let response = await fetch(url + "/" + id, {
      method: "DELETE",
    });
    response = response.json();
    if (response) {
      alert("Deleted");
      getUserData();
    }
  };

  return (
    <div>
      <h1>GET API</h1>
      <p>This is the GET API component.</p>
      {!loading ? (
        usersData &&
        usersData.map((user) => (
          <ul key={user.id}>
            <li>{user.name}</li>
            <li>
              <button onClick={() => deleteUser(user.id)}>Delete</button>
            </li>
          </ul>
        ))
      ) : (
        <h1>Loading</h1>
      )}
    </div>
  );
}

export default GETAPI;
