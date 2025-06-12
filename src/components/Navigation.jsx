import { NavLink } from "react-router-dom";
import logo from "../public/images/logo.png";
import {
  FaHome,
  FaShoppingCart,
  FaInfoCircle,
  FaEnvelope,
} from "react-icons/fa";
import {MdOutlineDashboardCustomize} from "react-icons/md"

const Navigation = () => {
  return (
    <div className="nav-bar">
      <div className="nav-logo">
        <img src={logo} />
      </div>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "active nav-link" : "nav-link"
              }
            >
              <FaHome className="nav-icon" />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/shop"
              className={({ isActive }) =>
                isActive ? "active nav-link" : "nav-link"
              }
            >
              <FaShoppingCart className="nav-icon" />
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "active nav-link" : "nav-link"
              }
            >
              <FaInfoCircle className="nav-icon" />
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "active nav-link" : "nav-link"
              }
            >
              <FaEnvelope className="nav-icon" />
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive ? "active nav-link" : "nav-link"
              }
            >
              <MdOutlineDashboardCustomize className="nav-icon" />
              Dashboard
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
