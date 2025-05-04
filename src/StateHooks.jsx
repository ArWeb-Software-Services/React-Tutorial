import { useState } from "react";

function StateHooks() {
  const [fruit, setFruit] = useState("Apple"); // useState("Default_value")
  const handleFruit = () => {
    setFruit("banana");
  };
  const [counter, setCounter] = useState(0);

  const getCounter = () => {
    setCounter(counter + 1);
  };
  return (
    <>
      <h3>Fruit name : {fruit}</h3>
      <button onClick={handleFruit}>Change fruit</button>
      <h3>Counter : {counter}</h3>
      <button onClick={getCounter}>Count</button>
    </>
  );
}

export default StateHooks;
