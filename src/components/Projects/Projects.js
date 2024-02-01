import React, { useState } from "react";

import { Container, Row, Col,Dropdown} from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import projectsData from "./projectsData.json"; // Import your JSON file


function Projects() {
  const [filter, setFilter] = useState("ALL");

  const handleFilterChange = (selectedFilter) => {
    setFilter(selectedFilter);
    console.log(selectedFilter);
  };

 
  /* WIP
          <Dropdown className="filter-dropdown">
          <Dropdown.Toggle >
            Filter Projects
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item
              active={filter === "ALL"}
              onClick={() => handleFilterChange("ALL")}
            >
              All Projects
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item
              active={filter === "AI"}
              onClick={() => handleFilterChange("AI")}
            >
              Artificial Intelligence
            </Dropdown.Item>
            <Dropdown.Item
              active={filter === "SE"}
              onClick={() => handleFilterChange("SE")}
            >
              Software Engineering
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

  */

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
            
              (filter==="ALL" || project.class === filter) && (
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
              )
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;