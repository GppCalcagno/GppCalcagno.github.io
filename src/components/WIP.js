import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Particle from ".//Particle";
import WIPimg from "../Assets/WIP.svg";

function WIP() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col xs={12} md={6}>
              {/* Example image, replace the src with your actual image path */}
              <Image
                src={WIPimg}
                alt="Your Alt Text"
                fluid
              />
            </Col>
            <Col xs={12} md={6}>
              <div>
              <h1>Still under construction</h1>
              <h5>This corner of the internet is still in the making. I work on this project in my free time. Sooner or later, this part of the website will see the light of day!</h5>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default WIP;
