import React from 'react';
import { Container, Row, Col } from "react-bootstrap";

import { placeholder, thinkingRobot } from "./images";
import "./style.css";

export default function About({ handlePageChange }) {
  return (
    <>
      <Container className="homeCard">
        <Row>
          <Col xs={0} md={6}></Col>
          <Col xs={12} md={6}>
            <p className="homeCardContent">Hi. My name is Eric Kirberger and I am a Full Stack Web Developer interested in designing and building responsive web applications with intuitive user experiences. Please enjoy my website!</p>
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
        </Row>
      </Container>
    </>
  );
}