import React from "react";
import { Row, Col } from "react-bootstrap";

import { resumeImg, resume } from "./images";
import "./style.css";

export default function Contact() {
  return (
    <div className="resume-card">
      <h1 className="resume-card-heading">My Resume</h1>
      <div className="resume-top-content">
        <Col>
          <h2 className="resume-title">My Proficiencies:</h2>
          <ul className="resume-prof-list">
            <li>React.js</li>
            <li>Express.js</li>
            <li>MongoDB</li>
            <li>Mongoose</li>
            <li>Node.js</li>
            <li>MySQL</li>
            <li>Sequelize</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>And More!</li>
          </ul>
        </Col>
        <Col className="resume-download-card">
          <p>Click on the image to download my full resume!</p>
          <a href={resume} download>
            <img src={resumeImg} alt="My resume." className="resume-img"></img>
          </a>
        </Col>
      </div>
      <div className="resume-section-card">
        <Col>
          <h3 className="resume-title">Summary</h3>
          <p className="resume-content">
            I am a Web Developer and graduate of the Rutgers University
            Full-Stack Web Development Program. I excel at front-end development
            using technologies like React.js, Node.js, and more.
          </p>
          <p className="resume-content">
            My background in education and coaching means I have a strong
            understanding of teamwork, management, communication, conflict
            resolution, and creative problem solving.
          </p>
        </Col>
      </div>
      <div className="resume-section-card">
        <Col>
          <h3 className="resume-title">Experience</h3>
          {/* <Row>
            <Col>
              <p>
                Full-Stack Web Developer
              </p>
            </Col>
            <Col>
              <p>
                Rutgers Full--Stack Web Development Program, Nov '22 - Feb '23
              </p>
            </Col>
          </Row> */}
          <Row className="resume-content">
            <Col>
              <p>
                Report Administrator, QA/QC Administator
              </p>
            </Col>
            <Col>
              <p>
                LEW Environmental Servises, Mar '21 - Jun '22
              </p>
            </Col>
          </Row>
          <Row className="resume-content">
            <Col>
              <p>
                Head Instructor, Co-Founder
              </p>
            </Col>
            <Col>
              <p>
                Central Heights Fencing Club, Jun '10 - Apr '20
              </p>
            </Col>
          </Row>
          <Row className="resume-content">
            <Col>
              <p>
                Substitute Teacher
              </p>
            </Col>
            <Col>
              <p>
                Long Hill Township School District, Sept '12 - Apr '20
              </p>
            </Col>
          </Row>
        </Col>
      </div>
      <div className="resume-section-card">
        <Col>
          <h3 className="resume-title">Education</h3>
          <Row className="resume-content">
            <Col>
              <p>
                Full-Stack Web Development Certificate
              </p>
            </Col>
            <Col>
              <p>
                Rutgers University Full-Stack Web Development Program
              </p>
            </Col>
          </Row>
          <Row className="resume-content">
            <Col>
              <p>
                New Jersey State Teaching Certificate of Eligibility
              </p>
            </Col>
            <Col>
              <p>
                Rutgers University
              </p>
            </Col>
          </Row>
          <Row className="resume-content">
            <Col>
              <p>
                Bachelor's Degree in Philosophy
              </p>
            </Col>
            <Col>
              <p>
                Rutgers University
              </p>
            </Col>
          </Row>
          <Row className="resume-content">
            <Col>
              <p>
                Associate Degree
              </p>
            </Col>
            <Col>
              <p>
                County College of Morris
              </p>
            </Col>
          </Row>
        </Col>
      </div>
    </div>
  );
}
