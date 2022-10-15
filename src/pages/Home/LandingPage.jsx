import { motion } from "framer-motion";
import React from "react";
import { HiChevronDoubleDown } from "react-icons/hi";
import { Link } from "react-router-dom";
import "../../styles/Home/LandingPage.css";

export default function LandingPage() {
  return (
    <section id="home">
      <div className="c1"></div>
      <div>
        <h3>
          Hi, my name is <span>Dario</span>
        </h3>
        <h1>
          I'm a Front End <br></br> Web Developer
        </h1>
        <Link to={"/"}>
          <button>View CV</button>
        </Link>
      </div>
      <motion.div
        className="arrow"
        initial={{ bottom: "5rem" }}
        animate={{ bottom: "1rem" }}
        transition={{ duration: 0.3 }}
      >
        <HiChevronDoubleDown />
      </motion.div>
    </section>
  );
}
