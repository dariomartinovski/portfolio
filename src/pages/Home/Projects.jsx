import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Home/Projects.css";

export default function Projects() {
  return (
    <section id="projects">
      <h1>Projects</h1>
      <div className="container">
        <div className="textArea">
          <h3>Movieverse</h3>
          <p>
          Movieverse is an online movie database, where you can browse through the latest and
           most popular movies and TV shows. You can view the details for each movie, look at their
           trailer, leave comments about them and  add them to your watchlist. I used different google's  
            <b> youtube API</b> for the youtube trailers, <b>TMDB API</b> for the movie details. The project was made 
          in ReactJS, with the assistance of Firebase for making the data persistent. The website is fully mobile responsive.
          </p>
          <span className="tags">
            <p className="tag">ReactJS</p>
            <p className="tag">Firebase</p>
            <p className="tag">HTML | CSS</p>
          </span>
        </div>
        <div className="imageArea"></div>
      </div>

      <div className="container">
        <div className="imageArea"></div>
        <div className="textArea">
          <h3>Wineverse</h3>
          <p>
          Winerverse is a web application dedicated to list and review wineries in Macedonia.
          There is a functionality to add wineries, review them, search with filters 
          like distance, rating and city, also you can view the wineries on an embedded map. 
          The applicaiton was a team project, made with Spring Boot, Thymeleaf and Bootstrap 
          for the frontend. For the wineries data, we had to make a web scrapper with Python,
          we scraped sites like ZlatnaKniga, Tripvisor and few more, then merged and cleaned the data
          for the applicaiton purposes.
          </p>
          <span className="tags">
            <p className="tag">Spring Boot</p>
            <p className="tag">Bootstrap</p>
            <p className="tag">PostgreSQL</p>
            <p className="tag">Python</p>
          </span>
        </div>
      </div>
      <Link to={"/projects"}>
        <button>View more</button>
      </Link>
    </section>
  );
}
