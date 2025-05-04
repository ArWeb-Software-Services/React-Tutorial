import { useState } from "react";
import Login from "./UserComp";

function ToggleDiv() {
  const [display, setDisplay] = useState(true);

  return (
    <>
      {/* {display ? <h1>Test</h1> : null} */}
      {display ? <Login /> : null}
      <button onClick={() => setDisplay(!display)}>Toogle</button>
    </>
  );
}

export default ToggleDiv;
