import { useEffect, useState } from "react";

function UseEffectHook() {
  const [counter, setCounter] = useState(0);
  const [data, setData] = useState(0);

  // Called when counter updates
  useEffect(() => {
    counterFn();
  }, [counter]);

  // Called only one time
  useEffect(() => {
    callOnce();
  }, []);
  function counterFn() {
    console.log(counter);
  }

  function callOnce() {
    console.log("useEffect called once");
  }

  return (
    <>
      <h2>Use Effect Hook</h2>
      <button onClick={() => setCounter(counter + 1)}>Counter {counter}</button>
      <button onClick={() => setData(data + 1)}>Data {data}</button>
    </>
  );
}

export default UseEffectHook;
