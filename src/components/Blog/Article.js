import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Particle from "../Particle";


function Article() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
      <Particle />
        <Container className="home-content">
          <Row>
            hello
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Article;
