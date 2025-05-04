import { useEffect } from "react";
import { useNavigate } from "react-router";
function Login() {
  const navigate = useNavigate();
  const login = () => {
    localStorage.setItem("login", true);
    navigate("/");
  };
  useEffect(() => {
    let login = localStorage.getItem("login");
    if (login) {
      navigate("/");
    }
  });
  return (
    <>
      <input type="text" placeholder="Username" />
      <br></br>
      <input type="text" placeholder="Password" />
      <br></br>
      <button onClick={login}>Login</button>
    </>
  );
}
export default Login;
