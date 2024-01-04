import React from "react";
import { Container, Row, Col } from "react-bootstrap";
//import { AiFillGithub, AiOutlineTwitter,AiFillInstagram} from "react-icons/ai";
//import { FaLinkedinIn } from "react-icons/fa";

function Footer() {

  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Creditis on GitHub</h3>
        </Col>
        <Col md="4" className="footer-body">
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;

/*

          /* 
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/soumyajit4419"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/soumyajit4419/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
*/