import React from "react";
import Card from "react-bootstrap/Card";
import { FcGlobe } from "react-icons/fc";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Giuseppe Calcagno </span>
            from <span className="purple"> Milan, Italy.</span>
            <br />
            
            <br />
            I have completed Computer Science and Engineering MSc at 
            Politecnico di Milano.
          
            <br />

            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          
          <ul>
          <li className="about-activity">
              <FcGlobe /> Passionate Chess Player
            </li>
            <li className="about-activity">
              <FcGlobe /> Enthusiastic Useless-Data Tracker 
            </li>
            <li className="about-activity">
              <FcGlobe /> Aspiring Calisthenics Practitioner (Working on it!)
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Su ciò che conta, ci puoi sempre contare 
            (WIP)"{" "}
          </p>
          <footer className="blockquote-footer">Conad </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
