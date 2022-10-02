import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Home/Projects.css";

export default function Projects() {
  return (
    <section id="projects">
      <h1>Projects</h1>
      <div className="container">
        <div className="textArea">
          <h3>Insure landing page</h3>
          <p>
            The design challenge here was to make a responsive landing page for
            an insurance company called INSURE. The goal was to put attention on
            their people first policy and their great and affordable prices.
          </p>
          <span className="tags">
            <p className="tag">HTML5</p>
            <p className="tag">CSS3</p>
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
      <Link to={"/portfolio/projects"}>
        <button>View more</button>
      </Link>
    </section>
  );
}
