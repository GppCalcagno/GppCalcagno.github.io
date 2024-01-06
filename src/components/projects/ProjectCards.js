import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";


function ProjectCards(props) {
  return (
    
    <Card className="project-card-view">
      {console.log(props.OtherLinkTitle)}
      <Card.Img variant="top" src={require("../../Assets/Projects/"+props.imgPath)} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        {props.hasGithubLink &&
        <Button variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp; GitHub
        </Button>
        }
        
        {props.hasOtherLink && (
          <Button
            variant="primary"
            href={props.OtherLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp; {props.OtherLinkTitle}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
