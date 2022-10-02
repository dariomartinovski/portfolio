import React, { useState } from "react";
import { GoLocation } from "react-icons/go";
import { MdOutlineEmail, MdOutlinePhone } from "react-icons/md";
import "../../styles/Home/Contact.css";

export default function Contact() {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  function sendMail(e) {
    e.preventDefault();
    setName("");
    setSubject("");
    setMessage("");
    window.open(
      "mailto:dario.martinovski@hotmail.com?subject=" +
        subject +
        " - " +
        name +
        " &body=" +
        message
    );
  }
  return (
    <section id="contact">
      <h1>CONTACT</h1>
      <div className="container">
        <form action="submit">
          {/* <!-- </form>action="mailto:dario.martinovski@hotmail.com"> --> */}
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              onChange={(e) => {
                setName(e.target.value);
              }}
              value={name}
            />
          </div>
          <div>
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              onChange={(e) => {
                setSubject(e.target.value);
              }}
              value={subject}
            />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              value={message}
            ></textarea>
          </div>
          <button type="submit" onClick={(e) => sendMail(e)}>
            Submit
          </button>
        </form>
        <div>
          <h3>Get in touch</h3>
          <p>
            Nice to meet you! If you want to keep in touch, send me a message
            using my email or phone details bellow, or use this form right here!
            Let's talk about design projects. <br />
            You can also hit me upon the social networks bellow.
          </p>
          <div className="tag">
            <GoLocation />
            <p>Boris Trajkovski xx, Sveti Nikole</p>
          </div>
          <div className="tag">
            <MdOutlinePhone />
            <p>077 - 777 -777</p>
          </div>
          <div className="tag">
            <MdOutlineEmail />
            <p>dario.martinovski@hotmail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
}
