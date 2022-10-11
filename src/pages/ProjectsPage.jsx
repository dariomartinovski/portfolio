import React from "react";
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
            The design challange here was to simplify the old design, that was
            pretty "busy" in a sense. There was alot of unreadable text and many
            out of place images. I simplified the design by reducing the color
            palette and adding more contrast to the text, better hierarchy and
            also better positioned the images.
          </p>
          <a
            href="https://dariomartinovski.github.io/onlineMenu/"
            target="_blank"
            rel="noreferrer"
          >
            <button>Visit website</button>
          </a>
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
          <a
            href="https://dariomartinovski.github.io/mechuevskakukapuze/Puze/"
            target="_blank"
            rel="noreferrer"
          >
            <button>Visit new website</button>
          </a>
          <a
            href="http://www.meckuevskakukapuze.com.mk"
            target="_blank"
            rel="noreferrer"
          >
            <button>Visit old website</button>
          </a>
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
          <a
            href="https://dariomartinovski.github.io/Insure-landing-page/"
            target="_blank"
            rel="noreferrer"
          >
            <button>Visit website</button>
          </a>
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
            The design challenge here was to make a responsive landing page for
            an insurance company called INSURE. The goal was to put attention on
            their people first policy and their great and affordable prices.
          </p>
          <a
            href="https://dariomartinovski.github.io/recepiesApp/"
            target="_blank"
            rel="noreferrer"
          >
            <button>Visit website</button>
          </a>
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
            The design challenge here was to make a responsive landing page for
            an insurance company called INSURE. The goal was to put attention on
            their people first policy and their great and affordable prices.
          </p>
          <a
            href="https://dariomartinovski.github.io/woordleClone/"
            target="_blank"
            rel="noreferrer"
          >
            <button>Visit website</button>
          </a>
        </div>
        <div className="summary">
          <h2>Budget calculator</h2>
          <p>
            Time: three hours
            <br />
            Date: 28.08.2022
          </p>
          <p>
            The design challenge here was to make a responsive landing page for
            an insurance company called INSURE. The goal was to put attention on
            their people first policy and their great and affordable prices.
          </p>
          <a
            href="https://dariomartinovski.github.io/budgetCalculator/"
            target="_blank"
            rel="noreferrer"
          >
            <button>Visit website</button>
          </a>
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
