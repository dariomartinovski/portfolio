import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import logo from "../assets/images/signature-logo.svg";
import "../styles/Navbar.css";

export default function Navbar() {
  let [menuState, setMenuState] = useState(false);
  let [rotation, setRotation] = useState(0);

  const showMenu = () => {
    window.innerWidth <= 650 ? setMenuState(false) : setMenuState(true);
  };
  const closeMenu = () => {
    if (window.innerWidth <= 650) setMenuState(false);
  };
  const handleClick = () => {
    setMenuState(!menuState);
    rotation === 0 ? setRotation(180) : setRotation(0);
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
      <motion.button
        className="toggleButton"
        onClick={handleClick}
        animate={{ rotate: rotation }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="48"
          width="48"
          viewBox="0 0 50 50"
        >
          <path d="M6 36v-3h36v3Zm0-10.5v-3h36v3ZM6 15v-3h36v3Z" />
        </svg>
      </motion.button>
      <AnimatePresence>
        {menuState && (
          <motion.ul
            className="navlinks"
            initial={{ y: -25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "tween" }}
            exit={{ y: -25, opacity: 0 }}
          >
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
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}
