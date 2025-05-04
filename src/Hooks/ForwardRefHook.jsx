import { useRef } from "react";
import ForRefChild from "./ForRefChild";
function ForwardRefHook() {
  const inputRef = useRef(null);
  const updateInput = () => {
    inputRef.current.value = "Updated Value";
    inputRef.current.focus();
  };

  return (
    <>
      <h2>Forward Ref Hook</h2>
      <ForRefChild ref={inputRef} />
      <button onClick={updateInput}>Update Input Field</button>
    </>
  );
}

export default ForwardRefHook;
