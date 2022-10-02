import React, { useEffect, useState } from "react";
import {
  TiSocialFacebookCircular,
  TiSocialGithubCircular,
  TiSocialLinkedinCircular,
} from "react-icons/ti";
import "../styles/Footer.css";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState("");

  useEffect(() => {
    setCurrentYear(() => new Date().getFullYear());
  }, []);

  return (
    <footer>
      <div className="copyright">
        <p>Live, learn, level up, one day at a time</p>
        <p>Dario Martinovski &copy; {currentYear}</p>
      </div>
      <div className="socialLinks">
        <a
          href="https://www.facebook.com/dario.martinovski"
          target="_blank"
          rel="noreferrer"
        >
          <TiSocialFacebookCircular />
        </a>
        <a
          href="https://github.com/dariomartinovski"
          target="_blank"
          rel="noreferrer"
        >
          <TiSocialGithubCircular />
        </a>
        <a
          href="https://www.linkedin.com/in/dario-martinovski-24297122a/"
          target="_blank"
          rel="noreferrer"
        >
          <TiSocialLinkedinCircular />
        </a>
      </div>
    </footer>
  );
}
