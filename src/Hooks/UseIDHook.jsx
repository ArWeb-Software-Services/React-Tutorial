import { useId } from "react";

function UseIDHook() {
  const name = useId();
  const password = useId();
  return (
    <>
      <h1>Use ID Hook</h1>
      <form action="">
        <label htmlFor={name}>Name</label>
        <input type="text" placeholder="Enter name" id={name} />
        <br />
        <label htmlFor={password}>Password</label>
        <input type="password" placeholder="Enter password" id={password} />
      </form>
    </>
  );
}
export default UseIDHook;
