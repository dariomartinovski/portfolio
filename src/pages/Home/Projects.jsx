import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Home/Projects.css";

export default function Projects() {
  return (
    <section id="projects">
      <h1>Projects</h1>
      <div className="container">
        <div className="textArea">
          <h3>Plan B online menu</h3>
          <p>
            In this projects, as the name sugests i needed to create an online
            menu for a coffee bar. For the general design and structure i used
            HTML5 and CSS3, and then for generating the items i used vanilla
            JavaScript. I also used JavaScipt for the homescreen animations. The
            website is fully mobile responsive.
          </p>
          <span className="tags">
            <p className="tag">HTML5</p>
            <p className="tag">CSS3</p>
            <p className="tag">JavaScript</p>
          </span>
        </div>
        <div className="imageArea"></div>
      </div>

      <div className="container">
        <div className="imageArea"></div>
        <div className="textArea">
          <h3>Mechuevska Kukja Puze website redesign</h3>
          <p>
            The design challange here was to simplify the old design, that was
            rather "busy" in a sense. There was alot of unreadable text and many
            out of place images. I simplified the design by reducing the color
            palette and adding more contrast to the text and better placement of
            the images.
          </p>
          <span className="tags">
            <p className="tag">HTML5</p>
            <p className="tag">CSS3</p>
            <p className="tag">JavaScript</p>
          </span>
        </div>
      </div>
      <Link to={"/projects"}>
        <button>View more</button>
      </Link>
    </section>
  );
}
