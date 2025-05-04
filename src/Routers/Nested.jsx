import { Link, NavLink, Outlet } from "react-router";
import "./header.css";

function Nested() {
  return (
    <>
      <div style={{ textAlign: "center" }} className="collage">
        <h1>Collage</h1>
        <h3>
          <Link to="/">Home</Link>
        </h3>
        <NavLink to="" className="link">
          Student
        </NavLink>
        <NavLink to="departments" className="link">
          Departments
        </NavLink>
        <NavLink to="details" className="link">
          Details
        </NavLink>
        <Outlet />
      </div>
    </>
  );
}

export default Nested;
