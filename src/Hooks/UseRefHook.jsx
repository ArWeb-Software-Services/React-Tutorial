import { useRef } from "react";
function UseRefHook() {
  const inputRef = useRef(null);
  const h1Ref = useRef(null);
  const focusInput = () => {
    // console.log(inputRef);
    inputRef.current.focus();
    inputRef.current.style.backgroundColor = "yellow";
    inputRef.current.style.color = "red";
  };

  const handler = () => {
    if (inputRef.current.style.display === "none") {
      inputRef.current.style.display = "block";
    } else {
      inputRef.current.style.display = "none";
    }
  };

  const h1handler = () => {
    if (h1Ref.current.style.display === "none") {
      h1Ref.current.style.display = "block";
    } else {
      h1Ref.current.style.display = "none";
    }
  };
  return (
    <>
      <h2>Use Ref Hook</h2>
      <input ref={inputRef} type="text" placeholder="Useername" />
      <button onClick={focusInput}>Focus on input field</button>
      <button onClick={handler}>Toggle</button>
      <h1 ref={h1Ref}>H1 tag</h1>
      <button onClick={h1handler}>Toggle</button>
    </>
  );
}

export default UseRefHook;
