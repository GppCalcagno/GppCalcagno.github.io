import React from "react";
import { Col, Row } from "react-bootstrap";

import { FaChess } from "react-icons/fa";
import { SiTodoist } from "react-icons/si";
import { GiBookshelf } from "react-icons/gi";

function OtherCards() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <FaChess />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTodoist />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <GiBookshelf />
      </Col>
    </Row>
  );
}

export default OtherCards;
