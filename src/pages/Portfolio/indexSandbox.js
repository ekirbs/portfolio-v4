import React from 'react';
import { Col } from "react-bootstrap";
import Slider from "react-touch-drag-slider";

import projects from "./projectsSandbox";

import "./style.css";

export default function Portfolio() {
  return (
    <Slider
      onSlideComplete={(i) => {
        console.log('finished dragging, current slide is', i)
      }}
      onSlideStart={(i) => {
        console.log('started dragging on slide', i)
      }}
      activeIndex={0}
      threshHold={100}
      transition={0.5}
      scaleOnDrag={true}
    >
      {projects.map(({ url, title }, index) => (
        <img src={url} key={index} alt={title} />
        <p>{title}</p>
      ))}
    </Slider>
  );
}
