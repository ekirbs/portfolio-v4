import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

import whiteSquare from "./images/white-square.png";

function Card({ title, description, technologies, url, img, img_alt, image, currentSlide, currentIndex }: any) {
  const [show, setShown] = useState(false);

  const styles = useSpring({
    transform: show ? "scale(1.05)" : "scale(1)",
    boxShadow: show
      ? "0 20px 25px rgb(0 0 0 / 25%)"
      : "0 2px 10px rgb(0 0 0 / 8%)",
      borderRadius: "2em",
  });
  return (
    {
      // key: e + 1,
      content: (
        <animated.div
          style={{ ...styles, height: "fit-content" }}
          onMouseEnter={() => setShown(true)}
          onMouseLeave={() => setShown(false)}
        >
          <div className="carouselWhiteSquareOuterDiv">
            <div className="carouselWhiteSquareInnerDiv">
              <img src={whiteSquare} alt="white square" className="carouselWhiteSquare" />
              <p className="carousel-txt"> {description} </p>
            </div>

            <div className="carouselImageOuterDiv">
              <div className="carouselImageInnerDiv">
                <a href="https://ekirbs.github.io/daily-schedule-planner/" target="_blank" rel="noreferrer"><img src={image} alt="title" style={{ objectFit: "cover", width: "100%", height: "100%" }} /></a>
                {/* <img src={image} alt="title" style={{ objectFit: "cover", width: "100%", height: "100%" }} /> */}
              </div>
              
              {title && (
                <div className="carouselTitleDiv">
                  {title}
                </div>
              )}
            </div>
          </div>
        </animated.div>
      )
    }
    
  );
}

export default Card;