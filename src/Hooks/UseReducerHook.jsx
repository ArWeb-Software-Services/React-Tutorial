import { useReducer } from "react";

const emptyData = {
  name: "",
  password: "",
  email: "",
  city: "",
  address: "",
};
const reducer = (data, action) => {
  return { ...data, [action.type]: action.val };
};
function UseReducerHook() {
  const [state, dispatch] = useReducer(reducer, emptyData);
  console.log(state);
  return (
    <>
      <h2>Use Reducer Hook</h2>
      <input
        type="text"
        placeholder="Enter Name"
        onChange={(e) => dispatch({ val: e.target.value, type: "name" })}
      />
      <br />
      <br />
      <input
        type="text"
        placeholder="Enter Password"
        onChange={(e) => dispatch({ val: e.target.value, type: "password" })}
      />
      <br />
      <br />
      <input
        type="text"
        placeholder="Enter Email"
        onChange={(e) => dispatch({ val: e.target.value, type: "email" })}
      />
      <br />
      <br />
      <input
        type="text"
        placeholder="Enter City"
        onChange={(e) => dispatch({ val: e.target.value, type: "city" })}
      />
      <br />
      <br />
      <input
        type="text"
        placeholder="Enter Address"
        onChange={(e) => dispatch({ val: e.target.value, type: "address" })}
      />
      <br />
      <br />
      <button onClick={() => console.log(state)}>Add</button>

      <ul>
        <li>Name : {state.name}</li>
        <li>Password : {state.password}</li>
        <li>Email : {state.email}</li>
        <li>City : {state.city}</li>
        <li>Address : {state.address}</li>
      </ul>
    </>
  );
}

export default UseReducerHook;
