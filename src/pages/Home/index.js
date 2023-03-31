import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap";

import "./styleAlt.css";
import "animate.css";

const words = [
  "web devElopment",
  "hardworKing",
  "responsIve design",
  "cReative",
  "moBile minded",
  "profesSional",
];

function About() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex) => (currentIndex + 1) % words.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const currentWord = words[currentIndex];

  return (
    <div className="aniContainer">
      {words.map((word, index) => {
        const isOdd = (currentIndex % 2 !== 0 && currentIndex > index) || (currentIndex % 2 === 0 && currentIndex >= index);
        return (
          <div
            key={word}
            className={`animate_animated ${
              isOdd ? "bounceInLeft" : "bounceInRight"
            }${currentIndex === index ? " opacity-1" : ""} ${currentWord === word ? "center" : ""}`}
            style={{ animationDelay: `${index}s` }}
          >
            {word}
          </div>
        );
      })}
    </div>
  );
}

export default About;