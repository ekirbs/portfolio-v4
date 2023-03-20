import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

function Card({ title, description, image, url, currentSlide, currentIndex }) {
  const [show, setShown] = useState(false);

  const styles = useSpring({
    transform: show ? "scale(1.05)" : "scale(1)",
    boxShadow: show
      ? "0 20px 25px rgb(0 0 0 / 25%)"
      : "0 2px 10px rgb(0 0 0 / 8%)",
      borderRadius: "2em",
  });
  
  return (
    <animated.div
      style={{ ...styles, height: "fit-content" }}
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}
    >
      <div className="carouselWhiteSquareOuterDiv">
        <div className="carouselWhiteSquareInnerDiv">
          <p className="carousel-txt"> {description} </p>
        </div>

        <div className="carouselImageOuterDiv">
          <div className="carouselImageInnerDiv">
            <img src={image} alt="title" className="projectImgLocation" />
          </div>
          
          <div className="carouselTitleDiv">
            <a href={url} target="_blank" rel="noreferrer">{title}</a>
          </div>
        </div>
      </div>
    </animated.div>
  );
}

export default Card;