import ReuseComp from "./ReuseComp";

function JSXLoops() {
  // const userData = ["A", "B", "C", "D", "E"];
  const userObj = [
    {
      name: "A",
      id: 23,
    },
    {
      name: "B",
      id: 24,
    },
    {
      name: "C",
      id: 25,
    },
    {
      name: "D",
      id: 26,
    },
    {
      name: "E",
      id: 27,
    },
  ];
  return (
    <>
      <div>JSX Loops (Only use 'map' function for loops)</div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>id</th>
          </tr>
        </thead>
        <tbody>
          {userObj.map((user, index) => {
            return (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.id}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export function JSXReuseComp() {
  const userObj = [
    {
      name: "A",
      id: 23,
    },
    {
      name: "B",
      id: 24,
    },
    {
      name: "C",
      id: 25,
    },
    {
      name: "D",
      id: 26,
    },
    {
      name: "E",
      id: 27,
    },
  ];
  return (
    <>
      <h1>Reuse Component</h1>
      {userObj.map((user, index) => (
        <ReuseComp key={index} name={user.name} />
      ))}
    </>
  );
}

export default JSXLoops;
