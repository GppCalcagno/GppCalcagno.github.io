import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import projectsData from "./projectsData.json"; // Import your JSON file

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
          {projectsData.map((project, index) => (
            <Col md={4} className="project-card" key={index}>
              
              <ProjectCard
                imgPath={project.imgPath}
                title={project.title}
                description={project.description}
                hasGithubLink={project.hasGithubLink}
                ghLink={project.ghLink}
                hasOtherLink={project.hasOtherLink}
                OtherLinkTitle={project.OtherLinkTitle}
                OtherLink={project.OtherLink}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
