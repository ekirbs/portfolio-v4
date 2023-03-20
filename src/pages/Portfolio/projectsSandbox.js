import { dailySchedulePlanner, theBigQuiz, natParkTravelGuide, randomPasswordGenerator, weatherForecast, bostonStreetCuisine, taskSandwich } from './images';


const Projects = [
  {
    "index": 1,
    "title": "Task Sandwich",
    "description": "A MERN task-management system with built in rewards system.",
    "technologies": [
      "HTML",
      "CSS",
      "JavaScript"
    ],
    "url": {taskSandwich}
  },
  {
    "index": 2,
    "title": "Boston Street Cuisine",
    "description": "An App to find location and information about street vendors in Boston.",
    "technologies": [
      "HTML",
      "CSS",
      "JavaScript"
    ],
    "url": {bostonStreetCuisine}
  },
  {
    "index": 3,
    "title": "Daily Schedule Planner",
    "description": "A Daily Schedule Planner to allows the saving, organization, and deletion of daily activities.",
    "technologies": [
      "HTML",
      "CSS",
      "JavaScript"
    ],
    "url": {dailySchedulePlanner}
  },
  {
    "index": 4,
    "title": "The BIG Quiz",
    "description": "The BIG Quiz.  A timed quiz that stores and displays high scores.",
    "technologies": [
      "HTML",
      "CSS",
      "JavaScript"
    ],
    "url": {theBigQuiz}
  },
  {
    "index": 5,
    "title": "Nat Park Travel Guide",
    "description": "A Traveler's Guide to all National Parks in Northeast USA.",
    "technologies": [
      "HTML",
      "CSS",
      "JavaScript"
    ],
    "url": {natParkTravelGuide}
  },
  {
    "index": 6,
    "title": "Password Generator",
    "description": "A Random Password Generator to provide secure passwords locally.",
    "technologies": [
      "HTML",
      "CSS",
      "JavaScript"
    ],
    "url": {randomPasswordGenerator}
  },
  {
    "index": 7,
    "title": "Weather Forecast",
    "description": "A Weather Forecast search function using the OpenWeatherMapAPI.",
    "technologies": [
      "MongoDB",
      "Mongoose"
    ],
    "url": {weatherForecast}
  }
]

export default Projects;