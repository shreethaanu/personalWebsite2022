import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.jpeg";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="STR VR Room"
              description="Designing my personal room into a gaming scene. Added hand interaction with Oculus Intreaction SDK."
              link="https://github.com/shreethaanu/myVrRoom"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Metaverse-Shopping"
              description="A oculus app made for shopping in ecommerce. Its a grocery story where you can go and buy the things. Simple scene with ray interactor and some cool design."
              link="https://github.com/shreethaanu/oculusEcomm"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="shrees-iOS-opensource"
              description="My iOS Opensource projects . This can be used for startups as a starter project. . There would be variety of Diff domain projects you can find here."
              link="https://github.com/shreethaanu/shrees-iOS-opensource"
            />
          </Col>
        
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Movie Recommeder System"
              description="A movie system that built using Python with the help of Correlation recommends movies based on the user's taste. It uses the movie data and displays it according to location"
              link="https://github.com/shreethaanu/movieRecommederSystem"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Str_blocker_extension"
              description="An extension for blocking sites that makes me less productive during work hours.
              For me Ecommerce be the major diversion, add your sites and use it.
              Stay productive ! Lets crush it 🔥🔥🔥🔥🔥"
              link="https://github.com/shreethaanu/str_blocker_extension"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="BCardAr"
              description=" An Augmented reality based business card viewer application in iOS. "
              link="https://github.com/shreethaanu/AI_For_Social_Good"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Weather APP"
              description=" A simple weather app looks similar to iOS app made with swift and a opensource api for a better design of weather app. "
              link="https://github.com/shreethaanu/WeatherApp-Swift"
            />
          </Col>
        
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
