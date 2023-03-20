import React from 'react';

import Carousel3d from "../../components/Card/carousel3dSandbox";
import CarouselCard from "../../components/Card/carouselCardSandbox";
import Projects from "./projects";

// import { dailySchedulePlanner, theBigQuiz, natParkTravelGuide, randomPasswordGenerator, weatherForecast } from './images';

import "./style.css";

export default function Portfolio() {
  return (
    <div className="portfolioCard">
      <h1 className="portfolioCardHeading">My Portfolio</h1>
      <div className="portfolioCardContent">
        <div className="carouselContainer">
          <Carousel3d
            cards ={[Projects.map((e) => {
              return (
                // <CarouselCard project={ element } />
                {
                  key: (e.length - (e.length - 1)),
                  content: (
                    <CarouselCard id={e.id} title={e.title} description={e.description} technologies={e.technologies} url={e.url} img={e.img} img_alt={e.img_alt} />
                  )
                },
                <CarouselCard id={e.id} title={e.title} description={e.description} technologies={e.technologies} url={e.url} img={e.img} img_alt={e.img_alt} />
              );
            })]}
            offset={2}
          />
        </div>
      </div>
    </div>
  );
}
