import React, { useState } from "react";
import Slider from "react-touch-drag-slider";
import { Container, Col, Button } from "react-bootstrap";

import projects from "./projects";

import "./style.css";

// Whatever you render out in the Slider will be draggable 'slides'
export default function Portfolio() {
  // state should start with the index you want to start the slide on

  const [index, setIndex] = useState(1);

  const setFinishedIndex = (i) => {
    console.log("finished dragging on slide", i);
    setIndex(i);
  };

  const next = () => {
    if (index < projects.length - 1) setIndex(index + 1);
  };

  const previous = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <>
      {/* <div className="portfolio-row">
        <Col xs={12} sm={10} md={9} className="portfolio-col"> */}
          <div className="portfolio-card">
            <h1 className="portfolio-card-heading">My Portfolio</h1>
            <div className="portfolio-card-content">
              <div className="slider-container">
                <Button
                  onClick={previous}
                  left
                  disabled={index === 0}
                  className="slider-button slider-button-left"
                >
                  〈
                </Button>
                <Button
                  onClick={next}
                  right
                  disabled={index === projects.length - 1}
                  className="slider-button slider-button-right"
                >
                  〉
                </Button>
                <Slider
                  onSlideComplete={setFinishedIndex}
                  onSlideStart={(i) => {
                    console.clear();
                    console.log("started dragging on slide", i);
                  }}
                  activeIndex={index}
                  threshHold={100}
                  transition={0.2}
                  scaleOnDrag={true}
                >
                  {projects.map(({ url, title, description }, index) => (
                    <Container>
                      <h3>{title}</h3>
                      <img src={url} key={index} alt={title} />
                      <p>{description}</p>
                    </Container>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        {/* </Col>
      </div> */}
    </>
  );
}
