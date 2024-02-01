import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";

import OtherCards from "./OtherCards";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/aboutme.png";


function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I am</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "50px", paddingBottom: "70px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Other Interesting  <strong className="purple">Stuff </strong> about me
        </h1>

        <OtherCards />
        
      </Container>
    </Container>
  );
}

export default About;
