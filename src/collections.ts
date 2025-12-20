// Individual collection exports for tree-shaking
export { TriviaQuestions } from "./data/collections/questions";
export { States } from "./data/collections/states";
export { Books } from "./data/collections/books";
export { Albums } from "./data/collections/albums";
export { Songs } from "./data/collections/songs";
export { Players } from "./data/collections/players";
export { Recipes } from "./data/collections/recipes";
export { Students } from "./data/collections/scores";
export { Countries } from "./data/collections/countries";
export { DailyWeather } from "./data/collections/weather";

// Re-export types
export type {
  Book,
  TriviaQuestion,
  Album,
  Song,
  Player,
  Recipe,
  Student,
  State,
  Country,
  DailyWeather as DailyWeatherType,
} from "./types";
