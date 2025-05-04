import { Link } from "react-router";

function Member() {
  const userData = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
    { id: 3, name: "Alice Johnson" },
    { id: 4, name: "Bob Brown" },
    { id: 5, name: "Charlie Davis" },
  ];
  return (
    <>
      <h1>Member Dynamic</h1>
      {userData.map((userData) => (
        <div>
          <Link to={`/member/${userData.id}/${userData.id}`}>
            <h2>{userData.name}</h2>
            <p>ID: {userData.id}</p>
          </Link>
        </div>
      ))}
    </>
  );
}

export default Member;
