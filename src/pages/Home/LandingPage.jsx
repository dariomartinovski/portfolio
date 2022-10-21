import { motion } from "framer-motion";
import React from "react";
import { HiChevronDoubleDown } from "react-icons/hi";
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
      </div>
      <motion.div
        className="arrow"
        animate={{ bottom: ["2rem", "6rem", "2rem", "6rem", "1rem"] }}
        transition={{ duration: 1.2 }}
      >
        <HiChevronDoubleDown />
      </motion.div>
    </section>
  );
}
