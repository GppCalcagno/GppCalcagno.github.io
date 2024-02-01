import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home2.svg";
import myImg from "../../Assets/avatar.png";

import Tilt from "react-parallax-tilt";

import {AiFillGithub} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

import Type from "./Type";

import Particle from "../Particle";


function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
      <Particle/>
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'm
                <strong className="main-name"> Giuseppe Calcagno</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type/>
              </div>
              
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>

      <Container fluid className="home-about-section" id="about">
      
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            I’m a  <span className="purple"> Computer Science Engineer </span>passionate about coding, dedicated to solving complex problems and staying updated in the ever‑evolving
tech landscape.
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> Java, Python and C. </b>
              </i>
              <br />
              <br />
              In addition
to my technical pursuits, I have interest in the <span className="purple">personal improvement field </span>. This dedication extends beyond the realm of code, as I believe that a
well‑rounded individual contributes more meaningfully to the world around him.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/gppCalcagno"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/gppCalcagno/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="mailto:gpp.calcagno@gnmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <IoIosMail />
                </a>
              </li>

            </ul>
          </Col>
        </Row>
      </Container>
    </Container>

    </section>
  );
  
}

export default Home;


