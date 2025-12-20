import { TriviaQuestions } from "./questions";
import { States } from "./states";
import { Books } from "./books";
import { Albums } from "./albums";
import { Songs } from "./songs";
import { Players } from "./players";
import { Recipes } from "./recipes";
import { Students } from "./scores";
import { Countries } from "./countries";
import { DailyWeather } from "./weather";

export class JSONData {
  constructor() {}
  static TriviaQuestions: any[] = TriviaQuestions ? TriviaQuestions : [];
  static States: any[] = States ? States : [];
  static Books: any[] = Books ? Books : [];
  static Albums: any[] = Albums ? Albums : [];
  static Songs: any[] = Songs ? Songs : [];
  static Players: any[] = Players ? Players : [];
  static Recipes: any[] = Recipes ? Recipes : [];
  static Students: any[] = Students ? Students : [];
  static Countries: any[] = Countries ? Countries : [];
  static DailyWeather: any[] = DailyWeather ? DailyWeather : [];
}
