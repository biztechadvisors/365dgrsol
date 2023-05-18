

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../auth/firebase";
import { signOut } from "firebase/auth";
import "../App";

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);

  const Logout = (event) => {
    event.preventDefault();
    localStorage.clear();
    signOut(auth)
      .then(() => {
        console.log("logged out");
        window.location.pathname = "Login";
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          365DegSol
          <i class="fab fa-firstdraft" />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li
            className="nav-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to="/Portfolio"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Portfolio <i className="fas fa-caret-down" />
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Aboutus" className="nav-links" onClick={closeMobileMenu}>
              Aboutus
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/Contactus"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Contact Us
            </Link>
          </li>

          {localStorage.getItem("user") ? (
            <li>
              <Link
                onClick={Logout}
                to="/Login"
                className="nav-links-mobile"
              >
                Logout
              </Link>
            </li>
          ) : (
            <li>
              <Link
                to="/Login"
                onClick={closeMobileMenu}
                className="nav-links-mobile"
              >
                Login
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
