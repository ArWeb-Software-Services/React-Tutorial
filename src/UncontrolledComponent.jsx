import { useRef } from "react";
function UncontrolledComponent() {
  const handleForm = (e) => {
    e.preventDefault();
    const user = document.getElementById("user").value;
    const pass = document.getElementById("pass").value;
    console.log(`User: ${user} Pass: ${pass}`);
  };

  const userRef = useRef(null);
  const passRef = useRef(null);
  const handleFormRef = (e) => {
    e.preventDefault();
    const user = userRef.current.value;
    const pass = passRef.current.value;
    console.log(`User: ${user} Pass: ${pass}`);
  };
  return (
    <>
      <h1>Uncontrolled Component</h1>
      <form action="" method="post" onSubmit={handleForm}>
        <input type="text" id="user" placeholder="Enter Username" />
        <br />
        <br />
        <input type="password" id="pass" placeholder="Enter Password" />
        <br />
        <br />
        <button>Submit</button>
      </form>

      <h1>Uncontrolled Component with useRef</h1>
      <form action="" method="post" onSubmit={handleFormRef}>
        <input
          type="text"
          ref={userRef}
          id="userRef"
          placeholder="Enter Username"
        />
        <br />
        <br />
        <input
          type="password"
          ref={passRef}
          id="passRef"
          placeholder="Enter Password"
        />
        <br />
        <br />
        <button>Submit</button>
      </form>
    </>
  );
}

export default UncontrolledComponent;
