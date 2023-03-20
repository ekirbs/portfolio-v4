import React from 'react';
import { Col } from "react-bootstrap";

import Carousel3d from "../../components/Card/carousel3d";
import CarouselCard from "../../components/Card/carouselCard";
// import projects from "./projects";

import { dailySchedulePlanner, theBigQuiz, natParkTravelGuide, randomPasswordGenerator, weatherForecast, bostonStreetCuisine, taskSandwich } from './images';

import "./style.css";

export default function Portfolio() {
  return (
    <div className="portfolio-row">
      <Col xs={12} sm={10} md={9} className="portfolio-col">
        <div className="portfolio-card">
          <h1 className="portfolio-card-heading">
              My Portfolio
          </h1>
          <div className="portfolioCardContent">
            <div className="carousel-container">
              <Carousel3d
                cards={[
                  {
                    key: 1,
                    content: (
                      <CarouselCard
                      title={"Task Sandwich"}
                      image={taskSandwich}
                      description={"A MERN task-management system with built in rewards system."}
                      url={"https://task-sandwich.herokuapp.com/"}
                      className="projectImg" />
                    ),
                  },
                  {
                    key: 2,
                    content: (
                      <CarouselCard
                        title={"Boston Street Cuisine"}
                        image={bostonStreetCuisine}
                        description={"An App to find location and information about street vendors in Boston."}
                        url={"https://boston-street-cuisine-app.herokuapp.com/"}
                        className="projectImg" />
                    ),
                  },
                  {
                    key: 3,
                    content: (
                      <CarouselCard
                      title={"Daily Schedule Planner"}
                      image={dailySchedulePlanner}
                      description={"A Daily Schedule Planner to allows the saving, organization, and deletion of daily activities."}
                      url={"https://ekirbs.github.io/daily-schedule-planner/"}
                      className="projectImg" />
                    ),
                  },
                  {
                    key: 4,
                    content: (
                      <CarouselCard
                      title={"The BIG Quiz"}
                      image={theBigQuiz}
                      description={"The BIG Quiz.  A timed quiz that stores and displays high scores."}
                      url={"https://ekirbs.github.io/the-big-quiz/"}
                      className="projectImg" />
                    ),
                  },
                  {
                    key: 5,
                    content: (
                      <CarouselCard
                      title={"Nat Park Travel Guide"}
                      image={natParkTravelGuide}
                      description={"A Traveler's Guide to all National Parks in Northeast USA."}
                      url={"https://ekirbs.github.io/national-park-travelers-guide/"}
                      className="projectImg" />
                    ),
                  },
                  {
                    key: 6,
                    content: (
                      <CarouselCard
                      title={"Password Generator"}
                      image={randomPasswordGenerator}
                      description={"A Random Password Generator to provide secure passwords locally."}
                      url={"https://ekirbs.github.io/random-password-generator/"}
                      className="projectImg" />
                    ),
                  },
                  {
                    key: 7,
                    content: (
                      <CarouselCard
                      title={"Weather Forecast"}
                      image={weatherForecast}
                      description={"A Weather Forecast search function using the OpenWeatherMapAPI."}
                      url={"https://ekirbs.github.io/weather-forecast-finder/"}
                      className="projectImg" />
                    ),
                  },
                ]}
                className="carousel-3d-card"
                offset={3}
              />
            </div>
          </div>
        </div>
      </Col>
    </div>
  );
}
