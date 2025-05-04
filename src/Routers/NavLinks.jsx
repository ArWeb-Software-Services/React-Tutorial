import "./header.css";
import { Link, Outlet, NavLink } from "react-router";

function NavLinks() {
  return (
    <>
      <div>
        <div className="header">
          <div>
            {/* <Link to="/" className="link">
              Logo
            </Link> */}
            <NavLink
              className={({ isActive }) =>
                isActive ? "custom-active link" : "link"
              }
              to="/"
            >
              Logo
            </NavLink>
          </div>
          <div>
            <ul>
              <li>
                {/* <Link to="/" className="link">
                  Home
                </Link> */}
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    isActive ? "custom-active link" : "link"
                  }
                >
                  Login
                </NavLink>
              </li>
              <li>
                {/* <Link to="/" className="link">
                  Home
                </Link> */}
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "custom-active link" : "link"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                {/* <Link to="/about" className="link">
                  About
                </Link> */}
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? "custom-active link" : "link"
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                {/* <Link to="/nested" className="link">
                  Nested
                </Link> */}
                <NavLink
                  to="/nested"
                  className={({ isActive }) =>
                    isActive ? "custom-active link" : "link"
                  }
                >
                  Nested
                </NavLink>
              </li>

              <li>
                {/* <Link to="/member" className="link">
                  Member Dynamic Routing
                </Link> */}
                <NavLink
                  to="/member"
                  className={({ isActive }) =>
                    isActive ? "custom-active link" : "link"
                  }
                >
                  Member Dynamic Routing
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        {/* <Outlet /> */}
      </div>
    </>
  );
}
export default NavLinks;
