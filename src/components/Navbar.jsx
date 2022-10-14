import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import logo from "../images/signature-logo.svg";
import "../styles/Navbar.css";

export default function Navbar() {
  let [menuState, setMenuState] = useState(false);

  const showMenu = () => {
    window.innerWidth <= 650 ? setMenuState(false) : setMenuState(true);
  };
  const closeMenu = () => {
    setMenuState(false);
  };

  useEffect(() => {
    showMenu();
  }, []);

  window.addEventListener("resize", showMenu);

  return (
    <nav>
      <Link to={"/"} className="homeButton">
        <img src={logo} alt="Logo" />
      </Link>
      <button className="toggleButton" onClick={() => setMenuState(!menuState)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="48"
          width="48"
          viewBox="0 0 50 50"
        >
          <path d="M6 36v-3h36v3Zm0-10.5v-3h36v3ZM6 15v-3h36v3Z" />
        </svg>
      </button>
      {menuState && (
        <ul className="navlinks">
          <HashLink smooth to="/#home" onClick={closeMenu}>
            <li className="navlink">HOME</li>
          </HashLink>
          <HashLink smooth to="/#about" onClick={closeMenu}>
            <li className="navlink">ABOUT</li>
          </HashLink>
          <HashLink smooth to="/#projects" onClick={closeMenu}>
            <li className="navlink">PROJECTS</li>
          </HashLink>
          <HashLink smooth to="/#contact" onClick={closeMenu}>
            <li className="navlink">CONTACT</li>
          </HashLink>
        </ul>
      )}
    </nav>
  );
}
