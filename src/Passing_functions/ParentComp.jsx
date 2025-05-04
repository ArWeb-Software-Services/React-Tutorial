import ChildComp from "./ChildComp";

function ParentComp() {
  const displayName = (name) => {
    alert(name);
  };

  const getUser = () => {
    alert("Get User");
  };
  return (
    <>
      <h1>Parent Component</h1>
      <ChildComp displayName={displayName} name="A" getUser={getUser} />
      <ChildComp displayName={displayName} name="B" getUser={getUser} />
      <ChildComp displayName={displayName} name="C" getUser={getUser} />
      <ChildComp displayName={displayName} name="D" getUser={getUser} />
    </>
  );
}
export default ParentComp;
