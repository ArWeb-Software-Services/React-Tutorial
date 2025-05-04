import useToogleCustom from "./useToogleCustom";

function CustomHooks() {
  const [value, toggleVal] = useToogleCustom(true);
  return (
    <>
      <button onClick={toggleVal}>Toggle Heading</button>
      <button onClick={() => toggleVal(true)}>Show Heading</button>
      <button onClick={() => toggleVal(false)}>Hide Heading</button>
      {value ? <h1>Custom Hook</h1> : null}
    </>
  );
}
export default CustomHooks;
