function ChildComp({ displayName, name, getUser }) {
  return (
    <>
      <h1>Child Component</h1>
      <button onClick={() => displayName(name)}>Display Name</button>
      <button onClick={() => getUser()}>Get user</button>
    </>
  );
}
export default ChildComp;
