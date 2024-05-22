import React from "react";
import { BsGithub } from "react-icons/bs";
import budgetCalculator from "../assets/images/Mockups/budgetCalculatorMockup.jpg";
import hangman from "../assets/images/Mockups/hangmanMockup.jpg";
import insure1 from "../assets/images/Mockups/insure1.jpg";
import insure2 from "../assets/images/Mockups/insure2.jpg";
import memoryGame from "../assets/images/Mockups/memoryGameMockup.jpg";
import menu2 from "../assets/images/Mockups/menuLaptopMockup.jpg";
import menu3 from "../assets/images/Mockups/menuPhonesMockup.jpg";
import menu1 from "../assets/images/Mockups/menuScreensMockup.jpg";
import puze1 from "../assets/images/Mockups/puze1.jpg";
import puze2 from "../assets/images/Mockups/puze2.jpg";
import recepies1 from "../assets/images/Mockups/recepiesMockup1.jpg";
import recepies2 from "../assets/images/Mockups/recepiesMockup2.jpg";
import tictactoe from "../assets/images/Mockups/tictactoeMockup.jpg";
import woordle from "../assets/images/Mockups/woordleCloneMockup.jpg";

import "../styles/ProjectsPage.css";

export default function ProjectsPage() {
  return (
    <section id="moreProjects">
      <h1>Projects</h1>
      <div className="wineverse">
      <img src={recepies1} alt="Recepies app" />
        <img src={recepies2} alt="Recepies app" />

        <div className="clientSide">
          <h2>Wineverse</h2>
          <p>
            Time: Three months
            <br />
            Date started: 11.11.2023 <br />
            Date finished: 28.01.2024 <br />
            Technologies: Spring Boot, PostgreSQL, Bootstrap, <br /> Python, Javascript
          </p>
        </div>
        <div className="summary">
          <h3>Summary</h3>
          <p>
          Winerverse with Spring Boot, Thymeleaf and bootstrap for frontend, 
          which was centralized application for viewing and reviewing the 
          wineries in Macedonia. There is a functionality to add wineries,
           review them, search with filters, view the wineries on a embedded map. 
          </p>
          <div className="links">
            <a
              href="https://github.com/DIANS-devs/DIANS-Proekt"
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub />
            </a>
          </div>
        </div>
      </div>
      <div className="movieverse">
      <img src={recepies1} alt="Recepies app" />
        <img src={recepies2} alt="Recepies app" />

        <div className="clientSide">
          <h2>Movieverse</h2>
          <p>
            Time: Four weeks
            <br />
            Date started: 10.02.2024 <br />
            Date finished: 02.03.2024 <br />
            Technologies: ReactJS, Firebase
          </p>
        </div>
        <div className="summary">
          <h3>Summary</h3>
          <p>
           Movieverse is an online movie database, where you can browse through the latest and
           most popular movies and TV shows. You can view the details for each movie, look at their
           trailer, leave comments about them and  add them to your watchlist. I used different google's 
           youtube API for the youtube trailers, TMDB API for the movie details. The project was made 
          in ReactJS, with the assistance of Firebase for making the data persistent. The website is also fully mobile responsive.
          </p>
          <div className="links">
            <a
              href="https://movieverse-5c81e.web.app/"
              target="_blank"
              rel="noreferrer"
            >
              <button>Visit website</button>
            </a>
            <a
              href="https://github.com/dariomartinovski/movieverse"
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub />
            </a>
          </div>
        </div>
      </div>
      <div className="planbMenu">
        <img src={menu1} alt="Plab B online menu" />
        <img src={menu2} alt="Plan B online menu" />
        <img src={menu3} alt="Plan B online menu" />
        <div className="clientSide">
          <h2>Plan B online menu</h2>
          <p>
            Client: Plan B<br />
            Time: Two weeks
            <br />
            Date started: 10.10.2022
          </p>
        </div>
        <div className="summary">
          <h3>Summary</h3>
          <p>
            In this projects, as the name sugests i needed to create an online
            menu for a coffee bar. For the general design and structure i used
            HTML5 and CSS3, and then for generating the items i used vanilla
            JavaScript. I also used JavaScipt for the homescreen animations. The
            website is fully mobile responsive.
          </p>
          <div className="links">
            <a
              href="https://dariomartinovski.github.io/onlineMenu/"
              target="_blank"
              rel="noreferrer"
            >
              <button>Visit website</button>
            </a>
            <a
              href="https://github.com/dariomartinovski/onlineMenu"
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub />
            </a>
          </div>
        </div>
      </div>
      <div className="meckuevskaKuka">
        <img src={puze1} alt="Mechuevska kukja puze" />
        <img src={puze2} alt="Mechuevska kukja puze" />
        <div className="clientSide">
          <h2>Mechuevska Kukja Puze website redesign</h2>
          <p>
            Time: Three days
            <br />
            Date started: 10.06.2022
          </p>
        </div>
        <div className="summary">
          <h3>Summary</h3>
          <p>
            The design challange here was to simplify the old design, that was
            pretty "busy" in a sense. There was alot of unreadable text and many
            out of place images. I simplified the design by reducing the color
            palette and adding more contrast to the text, better hierarchy and
            also better positioned the images.
          </p>
          <div className="links">
            <a
              href="https://dariomartinovski.github.io/mechuevskakukapuze/Puze/"
              target="_blank"
              rel="noreferrer"
            >
              <button>Visit website</button>
            </a>
            <a
              href="https://github.com/dariomartinovski/mechuevskakukapuze"
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub />
            </a>
          </div>
        </div>
      </div>
      <div className="insureLandingPage">
        <img src={insure1} alt="Insure landing page" />
        <img src={insure2} alt="Insure landing page" />
        <div className="clientSide">
          <h2>Insure landing page</h2>
          <p>
            Time: One day
            <br />
            Date started: 15.06.2022
          </p>
        </div>
        <div className="summary">
          <h3>Summary</h3>
          <p>
            The design challenge here was to make a responsive landing page for
            an insurance company called INSURE. The goal was to put attention on
            their people first policy and their great and affordable prices.
          </p>
          <div className="links">
            <a
              href="https://dariomartinovski.github.io/Insure-landing-page/"
              target="_blank"
              rel="noreferrer"
            >
              <button>Visit website</button>
            </a>
            <a
              href="https://github.com/dariomartinovski/Insure-landing-page"
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub />
            </a>
          </div>
        </div>
      </div>
      <div className="recepiesApp">
        <img src={recepies1} alt="Recepies app" />
        <img src={recepies2} alt="Recepies app" />
        <div className="clientSide">
          <h2>Recepies app</h2>
          <p>
            Time: Six days
            <br />
            Date started: 20.09.2022
          </p>
        </div>
        <div className="summary">
          <h3>Summary</h3>
          <p>
            This project was created using ReactJS. This was my first time
            working with api calls. I got data from the spoonacular api and from
            the cocktailDB api accordingly. Also i used a few ReactJS libraries
            like splideJS for the carousells and react-router-dom for the
            navigation.
          </p>
          <div className="links">
            <a
              href="https://dariomartinovski.github.io/recepiesApp/"
              target="_blank"
              rel="noreferrer"
            >
              <button>Visit website</button>
            </a>
            <a
              href="https://github.com/dariomartinovski/recepiesApp"
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub />
            </a>
          </div>
        </div>
      </div>
      <div className="budgetWoordle">
        <img src={woordle} alt="Woordle clone" />
        <img src={budgetCalculator} alt="Expense tracker" />
        <div className="summary">
          <h2>Woordle clone</h2>
          <p>
            Time: Two days
            <br />
            Date started: 25.08.2022
          </p>
          <p>
            Everybody knows woordle right? Well I liked the game so much I
            wanted to play more, but I was limited to one word per day, and then
            I figured why not make a similar game myself. And so I did, I made
            everything from scratch, starting with the design to the logic, all
            using ReactJS. I used a json file as a database for the words. The
            only diffence is that this game generates a new word on every
            refresh.
          </p>
          <div className="links">
            <a
              href="https://dariomartinovski.github.io/woordleClone/"
              target="_blank"
              rel="noreferrer"
            >
              <button>Visit website</button>
            </a>
            <a
              href="https://github.com/dariomartinovski/woordleClone"
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub />
            </a>
          </div>
        </div>
        <div className="summary">
          <h2>Expense tracker</h2>
          <p>
            Time: One day
            <br />
            Date started: 15.04.2024
          </p>
          <p>
            This project is created with ReactJS, it's a really simple
            application made for recording your expenses. I made it because i 
            needed a way to track my student card's spending. In the app you can add,
            edit, remove and clear all expenses from the list. You can also add a
            holiday (because the card doesn't work on holidays).
            The app uses the browsers local storage, so the data is persisted.
          </p>
          <div className="links">
            <a
              href="https://dariomartinovski.github.io/expenseTracker/"
              target="_blank"
              rel="noreferrer"
            >
              <button>Visit website</button>
            </a>
            <a
              href="https://github.com/dariomartinovski/expenseTracker"
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub />
            </a>
          </div>
        </div>
      </div>
      <div className="miniGames">
        <h2>Small javascript games</h2>
        <div>
          <img src={tictactoe} alt="tic tac toe" />
          <h4>Tic tac toe</h4>
        </div>
        <div>
          <img src={memoryGame} alt="Memory game" />
          <h4>Memory game</h4>
        </div>
        <div>
          <img src={hangman} alt="Hangman game" />
          <h4>Hangman game</h4>
        </div>
        <a
          href="https://dariomartinovski.github.io/tictactoe/"
          target="_blank"
          rel="noreferrer"
        >
          <button>Visit website</button>
        </a>
        <a
          href="https://dariomartinovski.github.io/memorygame/"
          target="_blank"
          rel="noreferrer"
        >
          <button>Visit website</button>
        </a>
        <a
          href="https://dariomartinovski.github.io/hangman/"
          target="_blank"
          rel="noreferrer"
        >
          <button>Visit website</button>
        </a>
      </div>
      <h1 className="moreComingSoon">More coming soon...</h1>
    </section>
  );
}
