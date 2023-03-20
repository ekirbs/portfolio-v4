import React from 'react';
import { Container, Row, Col } from "react-bootstrap";

import { placeholder } from "./images";
import "./style.css";

export default function About({ handlePageChange }) {
  return (
    <>
      <Container className="homeCard">
        <Row>
          <Col xs={0} md={6}></Col>
          <Col xs={12} md={6}>
            <p className="homeCardContent">Hi there. My name is Eric Kirberger and I am a Full Stack Web Developer.  Please enjoy my portfolio! If the wording looks too big, it's caused by late-loading fonts, I think, and I'm addressing the issue.  Please just click the home link title in the header to correct for now.</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <a
              href="#contact"
              onClick={() => handlePageChange('Contact')}
              className="contact-link"
            >
              <img src={placeholder} alt="My face zooming in."></img>
            </a>
          </Col>
        </Row>
      </Container>
    </>
  );
}