import { useEffect } from "react";
import { useNavigate } from "react-router";

function ProtectedRoute(props) {
  const { Component } = props;
  const navigate = useNavigate();
  useEffect(() => {
    let login = localStorage.getItem("login");
    if (!login) {
      navigate("/login");
    }
  });
  return (
    <>
      <h3>abc</h3>
      <Component />
    </>
  );
}
export default ProtectedRoute;
