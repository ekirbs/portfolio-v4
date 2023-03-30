import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col } from "react-bootstrap";

import { placeholder, thinkingRobot } from "./images";
import "./styleWordAni.css";

const WORDS = [
  'web devElopment',
  'hardworKing',
  'responsIve design',
  'cReative',
  'moBile design',
  'profesSional',
];

function Word({ word, visible, setPosition }) {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      setPosition(word, ref.current.getBoundingClientRect());
    }
  }, [setPosition, word]);

  return (
    <div className={`word ${visible ? 'visible' : 'hidden'}`} ref={ref}>
      {word}
    </div>
  );
}

export default function About() {

  const [wordsVisible, setWordsVisible] = useState(false);
  const [lettersLinedUp, setLettersLinedUp] = useState(false);
  const [positions, setPositions] = useState({});

  function animateWords() {
    setWordsVisible(true);
  }

  useEffect(() => {
    animateWords();
  }, []);

  function setPosition(word, rect) {
    setPositions(prevPositions => ({
      ...prevPositions,
      [word]: rect,
    }));
  }

  useEffect(() => {
    if (wordsVisible) {
      const positionsArray = Object.values(positions);
      const topPositions = positionsArray.map(rect => rect.top);
      const minTop = Math.min(...topPositions);
      const verticalOffsets = topPositions.map(top => top - minTop);
      const letters = WORDS.join('').match(/[A-Z]/g);
      const letterPositions = {};
      letters.forEach((letter, i) => {
        const position = positionsArray.find(
          rect => rect.top === topPositions[i] && rect.height === 30
        );
        if (position) {
          letterPositions[letter] = {
            left: position.left,
            top: minTop + verticalOffsets[i],
          };
        }
      });
      setLettersLinedUp(letterPositions);
    }
  }, [wordsVisible, positions]);

  return (
    <>
      {/* <Container className="home-card"> */}
      <div className="container">
      <div
        className={`white-card ${lettersLinedUp ? 'lined-up' : ''}`}
        onAnimationEnd={() => setWordsVisible(true)}
      >
        {WORDS.map((word, i) => (
          <Word key={i} word={word} visible={wordsVisible} setPosition={setPosition} />
        ))}
      </div>
    </div>
      {/* </Container> */}
    </>
  );
}