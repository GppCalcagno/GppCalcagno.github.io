import React from "react";

import { Col, Row } from "react-bootstrap";

import { FaChess } from "react-icons/fa";
import { SiTodoist } from "react-icons/si";
import { GiBookshelf } from "react-icons/gi";
import { Link } from "react-router-dom";

function OtherCards() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <Link to="/about/chess">
        <FaChess color="white"/>
        </Link>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <Link to="/about/todo">
        <SiTodoist color="white"/>
        </Link>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <Link to="/about/books">
        <GiBookshelf color="white"/>
        </Link>
      </Col>
    </Row>
  );
}

export default OtherCards;
