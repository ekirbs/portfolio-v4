import React, { useState, useEffect } from 'react';
import { Container } from "react-bootstrap";

import "./styleAlt.css";

function FadingWords({ words }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex(activeIndex => (activeIndex + 1) % words.length);
    }, 1000);
    return () => clearInterval(timer);
  }, [words]);

  return (
    <div>
      {words.map((word, index) => (
        <div
          key={word}
          style={{
            opacity: index === activeIndex ? 1 : 0,
            transition: 'opacity 1s ease-in-out',
          }}
        >
          {word}
        </div>
      ))}
    </div>
  );
}

export default function About() {
  return (
    <>
      <Container className="home-card">
        <h6>web dev<span className="redShift">E</span>lopment</h6>
        <h6>hardwor<span className="redShift">K</span>ing</h6>
        <h6>respons<span className="redShift">I</span>ve design</h6>
        <h6>c<span className="redShift">R</span>eative</h6>
        <h6>mo<span className="redShift">B</span>ile minded</h6>
        <h6>profes<span className="redShift">S</span>ional</h6>
      </Container>
    </>
  );
}