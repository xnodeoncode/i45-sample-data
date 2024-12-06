import { TriviaQuestions } from "./trivia-questions.js";
import { States } from "./states.js";

export class JSONData {
  constructor() {}
  static TriviaQuestions = TriviaQuestions ? TriviaQuestions : [];
  static States = States ? States : [];
}
