import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Shree Thaanu </span>
            from <span className="purple"> India.</span>
            <br />I am an Apple Platforms Developer & Design-Technologist.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight />  Travelling 
            </li>
            <li className="about-activity">
              <ImPointRight /> Writting Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "I don't take realities of the world for granted, I seek to break and rebuild what I don't like. I seek to outsmart the world "{" "}
          </p>
          <footer className="blockquote-footer">ShreeThaanu</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
