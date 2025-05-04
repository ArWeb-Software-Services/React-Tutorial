import { useActionState } from "react";

function UseActionStateHook() {
  const handleSubmit = async (previousData, formData) => {
    let name = formData.get("name");
    let password = formData.get("password");
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(name + ", " + password);
    if (name && password) {
      return { message: "Submitted", name, password };
    } else {
      return { error: "Failed to submit", name, password };
    }
  };
  const [data, action, pending] = useActionState(handleSubmit, undefined);

  return (
    <>
      <h1>Use Action State Hook</h1>
      <form action={action} method="post">
        <input
          defaultValue={data?.name}
          type="text"
          placeholder="Enter Name"
          name="name"
        />
        <br />
        <br />
        <input
          type="password"
          defaultValue={data?.password}
          placeholder="Enter Password"
          name="password"
        />
        <br />
        <br />
        <button disabled={pending}>Submit</button>
      </form>
      {data?.error && <span style={{ color: "red" }}>{data.error}</span>}
      {data?.message && <span style={{ color: "green" }}>{data.message}</span>}
      <br />
      <br />

      <h3>Name : {data?.name}</h3>
      <h3>Password : {data?.password}</h3>
    </>
  );
}
export default UseActionStateHook;
