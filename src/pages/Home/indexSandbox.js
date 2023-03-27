import React, { useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";

import { placeholder, thinkingRobot } from "./images";
import "./style.css";

export default function About({ handlePageChange }) {

  const [paragraph, setParagraph] = useState("Hi. My name is Eric Kirberger and I am a Full Stack Web Developer interested in designing and building responsive web applications with intuitive user experiences. Please enjoy my website!");
  const [isDeleting, setIsDeleting] = useState(false);

  function handleButtonClick() {
    setIsDeleting(true);
    const intervalId = setInterval(() => {
      if (paragraph.length > 0) {
        const randomIndex = Math.floor(Math.random() * paragraph.length);
        const newParagraph = paragraph.slice(0, randomIndex) + paragraph.slice(randomIndex + 1);
        setParagraph(newParagraph);
      } else {
        clearInterval(intervalId);
        setIsDeleting(false);
      }
    }, 500);
  }

  return (
    <>
      <Container className="home-card">
        <div>
          <p>{paragraph}</p>
          <button onClick={handleButtonClick} disabled={isDeleting}>
            Delete letters
          </button>
        </div>
        {/* <Row>
          <Col xs={0} md={6}></Col>
          <Col xs={12} md={6}>
            <p className="home-card-content">Hi. My name is Eric Kirberger and I am a Full Stack Web Developer interested in designing and building responsive web applications with intuitive user experiences. Please enjoy my website!</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <a
              href="#contact"
              onClick={() => handlePageChange('Contact')}
              className="contact-link"
            >
              <img src={thinkingRobot} alt="Thinking robot."></img>
            </a>
          </Col>
        </Row> */}
      </Container>
    </>
  );
}