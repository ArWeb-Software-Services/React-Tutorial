import { useState } from "react";

function Conditions() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>Multiple Conditions</h1>
      <h2>{count}</h2>
      {count == 0 ? <h2>C1</h2> : count == 1 ? <h2>C2</h2> : <h2>Other</h2>}
      <button onClick={() => setCount(count + 1)}>Counter</button>
    </>
  );
}
export default Conditions;
