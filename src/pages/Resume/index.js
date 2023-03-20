import React from "react";
import { Row, Col } from "react-bootstrap";

import { resumeBtn, resume } from "./images";
import "./style.css";

export default function Contact() {
  return (
    <div className="resume-card">
      <h1 className="resume-card-heading">My Resume</h1>
      <div className="resume-top-content">
        <Col>
          <h2 className="resume-title">My Proficiencies:</h2>
          <ul>
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
        <Col xs={12} md={3} className="resume-download-card">
          <p>Click on the R to download my full resume!</p>
          <a href={resume} download>
            <img src={resumeBtn} alt="My resume." className="resume-img"></img>
          </a>
        </Col>
      </div>
      <div className="resume-section-card">
        <Col>
          <h3 className="resume-title">Summary</h3>
          <p>
            I am a Web Developer and graduate of the Rutgers University
            Full-Stack Web Development Program. I excel at front-end development
            using technologies like React.js, Node.js, and more.
          </p>
          <p>
            My background in education and coaching means I have a strong
            understanding of teamwork, management, communication, conflict
            resolution, and creative problem solving.
          </p>
        </Col>
      </div>
      <div className="resume-section-card">
        <Col>
          <h3 className="resume-title">Experience</h3>
          <Row>
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
          </Row>
          <Row>
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
          <Row>
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
          <Row>
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
          <Row>
            <Col>
              <p>
                Full-Stack Web Development Certificate
              </p>
            </Col>
            <Col>
              <p>
                Rutgers University Full-Stack Web Development Program, Feb '23
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                New Jersey State Teaching Certificate of Eligibility
              </p>
            </Col>
            <Col>
              <p>
                Rutgers University, May '17
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                Bachelor's Degree in Philosophy
              </p>
            </Col>
            <Col>
              <p>
                Rutgers University, May '14
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                Associate Degree
              </p>
            </Col>
            <Col>
              <p>
                County College of Morris, '07
              </p>
            </Col>
          </Row>
        </Col>
      </div>
    </div>
  );
}
