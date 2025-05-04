import { useEffect } from "react";

function ComponentLifeCycle({ count, data }) {
  useEffect(() => {
    console.log("Component Mounted");
  }, []);

  useEffect(() => {
    console.log("Component Update phase");
  }, [count]);

  useEffect(() => {
    console.log("Component Update phase");
  }, [count]);

  useEffect(() => {
    return () => {
      console.log("Component Unmount phase");
    };
  }, []);
  return (
    <>
      <h1>Component Life Cycle</h1>
      <h2>Counter Value : {count}</h2>
      <h2>Data Value : {data}</h2>
    </>
  );
}

export default ComponentLifeCycle;
