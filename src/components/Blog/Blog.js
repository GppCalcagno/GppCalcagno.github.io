import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Particle from "../Particle";
import Markdown from 'react-markdown';

function Blog() {
  const [markdownContent, setMarkdownContent] = useState('');

  useEffect(() => {
    // Importing the markdown file dynamically
    import('./Articles/test.md').then((module) => {
      // Set the markdown content to the state
      console.log(module);
      setMarkdownContent();
    });
  }, []);

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Markdown>{markdownContent}</Markdown>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Blog;
