import React from "react";
import { BsGithub } from "react-icons/bs";
import budgetCalculator from "../images/Mockups/budgetCalculatorMockup.jpg";
import hangman from "../images/Mockups/hangmanMockup.jpg";
import insure1 from "../images/Mockups/insure1.jpg";
import insure2 from "../images/Mockups/insure2.jpg";
import memoryGame from "../images/Mockups/memoryGameMockup.jpg";
import menu2 from "../images/Mockups/menuLaptopMockup.jpg";
import menu3 from "../images/Mockups/menuPhonesMockup.jpg";
import menu1 from "../images/Mockups/menuScreensMockup.jpg";
import puze1 from "../images/Mockups/puze1.jpg";
import puze2 from "../images/Mockups/puze2.jpg";
import recepies1 from "../images/Mockups/recepiesMockup1.jpg";
import recepies2 from "../images/Mockups/recepiesMockup2.jpg";
import tictactoe from "../images/Mockups/tictactoeMockup.jpg";
import woordle from "../images/Mockups/woordleCloneMockup.jpg";

import "../styles/ProjectsPage.css";

export default function ProjectsPage() {
  return (
    <section id="moreProjects">
      <h1>Projects</h1>
      <div className="planbMenu">
        <img src={menu1} alt="Plab B online menu" />
        <img src={menu2} alt="Plan B online menu" />
        <img src={menu3} alt="Plan B online menu" />
        <div className="clientSide">
          <h2>Plan B online menu</h2>
          <p>
            Client: Plan B<br />
            Time: two weeks
            <br />
            Date: 10.10.2022
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
            Client: x<br />
            Time: three days
            <br />
            Date: 10.06.2022
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
            Client: x<br />
            Time: five hours
            <br />
            Date: 15.06.2022
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
            Client: x<br />
            Time: six days
            <br />
            Date: 20.09.2022
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
        <img src={woordle} alt="Woordle" />
        <img src={budgetCalculator} alt="Budget calculator" />
        <div className="summary">
          <h2>Woordle clone</h2>
          <p>
            Time: two days
            <br />
            Date: 25.08.2022
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
          <h2>Budget calculator</h2>
          <p>
            Time: three hours
            <br />
            Date: 28.08.2022
          </p>
          <p>
            This project was also created with ReactJS, it's a really simple
            application made for recording your expenses. You can add, edit and
            remove expenses from the list and you can see your total. There's
            also a filter option for filtering the expenses by their amount. The
            app uses local storage, so if you refresh the expenses wont be
            deleted.
          </p>
          <div className="links">
            <a
              href="https://dariomartinovski.github.io/budgetCalculator/"
              target="_blank"
              rel="noreferrer"
            >
              <button>Visit website</button>
            </a>
            <a
              href="https://github.com/dariomartinovski/budgetCalculator"
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
