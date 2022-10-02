import React from "react";
import { IoRocketOutline } from "react-icons/io5";
import { MdDevices, MdLightbulbOutline, MdSpeed } from "react-icons/md";
import "../../styles/Home/About.css";

export default function About() {
  const skills = [
    { skill: "HTML5", percentage: "90%" },
    { skill: "CSS3", percentage: "90%" },
    { skill: "JavaScript", percentage: "80%" },
    { skill: "ReactJS", percentage: "50%" },
    { skill: "Photoshop", percentage: "90%" },
    { skill: "Illustrator", percentage: "60%" },
  ];

  return (
    <section id="about">
      <h1>ABOUT</h1>
      <div className="upperPart">
        <div className="icon">
          <div className="iconImage">
            <MdSpeed />
          </div>
          <h2>Fast</h2>
          <p>
            Fast delivery, fast load times and lag free interaction, my highest
            priority.
          </p>
        </div>
        <div className="icon">
          <div className="iconImage">
            <MdDevices />
          </div>
          <h2>Responsive</h2>
          <p>
            I make responsive websites which will work on any device, big or
            small.
          </p>
        </div>
        <div className="icon">
          <div className="iconImage">
            <MdLightbulbOutline />
          </div>
          <h2>Intuitive</h2>
          <p>
            Strong prefrence for simplicity. "Everything should be simple but
            not simpler" - Albert Einstein.
          </p>
        </div>
        <div className="icon">
          <div className="iconImage">
            <IoRocketOutline />
          </div>
          <h2>Dynamic</h2>
          <p>
            Every website needs a bit of liveness, they don't have to be static.
          </p>
        </div>
      </div>
      <div className="bottomPart">
        <div className="intro">
          <div className="image"></div>
          <h2>About me</h2>
          <p>
            Hi i'm <span>Dario Martinovski</span>, a macedonian website
            developer based in Sveti Nikole, Macedonia. I'm currently studying
            for a bachelor's degree majoring in Software Engineering at
            University of FINKI, Skopje. I'm passionate about tech, design, web
            development, and the role they play in our everyday lives.
          </p>
        </div>
        <div className="skills">
          <h2>Skills</h2>
          {skills?.map((item, i) => {
            return (
              <div className="progressBar" key={i}>
                <div
                  className="filled"
                  style={{ width: item.percentage }}
                ></div>
                <p>{item.skill}</p>
                <div className="percentage">{item.percentage}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
