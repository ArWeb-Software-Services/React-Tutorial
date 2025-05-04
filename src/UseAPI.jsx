import { Suspense, use } from "react";

const fetchData = () =>
  fetch("https://dummyjson.com/users").then((res) => res.json());

const userResource = fetchData();

function UseAPI() {
  return (
    <>
      <h1>Use API</h1>
      <Suspense fallback={<p>Loaad</p>}>
        <Users userResource={userResource} />
      </Suspense>
    </>
  );
}

const Users = ({ userResource }) => {
  const userData = use(userResource);
  console.log(userData.users);

  return (
    <>
      <h3>Users List</h3>
      <div>
        {userData?.users.map((user) => (
          <h1>{user.firstName}</h1>
        ))}
      </div>
    </>
  );
};
export default UseAPI;
