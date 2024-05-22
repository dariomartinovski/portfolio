import React from "react";
import { IoRocketOutline } from "react-icons/io5";
import { MdDevices, MdLightbulbOutline, MdSpeed } from "react-icons/md";
import "../../styles/Home/About.css";

export default function About() {
  const skills = [
    { skill: "Spring Boot", percentage: "85%" },
    { skill: "HTML | CSS", percentage: "90%" },
    { skill: "ReactJS", percentage: "80%" },
    { skill: "Python", percentage: "75%" },
    { skill: "SQL", percentage: "75%" },
    { skill: ".Net", percentage: "60%" },
    { skill: "Photoshop", percentage: "90%" },
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
            Hello, my name is <span><b>Dario Martinovski</b></span>, 
            I'm currently studying for a <b>bachelor's degree</b> majoring in Software Engineering at
            University of <b>FINKI</b>, Skopje. <br /> Enthusiastic and versatile software engineering student proficient 
            in web development technologies. Possesses a keen attitude for 
            learning new technologies and methodologies with a proven track 
            record of adapting quickly to new challenges. I have a passion for 
            problem-solving and innovative solutions, also i'm passionate about tech, design, web
            development, and the role they play in our everyday lives.
            {/* Hi i'm <span>Dario Martinovski</span>, a macedonian website
            developer based in Sveti Nikole, Macedonia. . I'm passionate  */}
            
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
