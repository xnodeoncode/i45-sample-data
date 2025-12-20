/**
 * TypeScript interfaces for all sample datasets
 */

// Collections/JSONData Types

export interface Book {
  isbn: string;
  title: string;
  subtitle: string;
  author: string;
  published: string;
  publisher: string;
  pages: number;
  description: string;
  website: string;
}

export interface TriviaQuestion {
  type: "multiple" | "boolean";
  difficulty: "easy" | "medium" | "hard";
  category: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

export interface Album {
  album: string;
  artist: string;
  label: string;
  rank: number;
  year: number;
}

export interface Song {
  album?: string;
  artist: string;
  song?: string;
  title?: string;
  rank?: number;
  year: number;
  duration_ms?: number;
  acousticness?: number;
  danceability?: number;
  energy?: number;
  instrumentalness?: number;
  liveness?: number;
  loudness?: number;
  speechiness?: number;
  tempo?: number;
  valence?: number;
}

export interface Player {
  id: number;
  firstName: string;
  middleName: string | null;
  lastName: string;
  dateOfBirth: string;
  squadNumber: number;
  position: string;
  abbrPosition: string;
  team: string;
  league: string;
  starting11: number;
}

export interface Recipe {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string[];
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: number;
  difficulty: string;
  cuisine: string;
  caloriesPerServing: number;
  tags: string[];
  userId: number;
  image: string;
  rating: number;
  reviewCount: number;
  mealType: string[];
}

export interface Student {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  part_time_job: boolean;
  absence_days: number;
  extracurricular_activities: boolean;
  weekly_self_study_hours: number;
  career_aspiration: string;
  math_score: number;
  history_score: number;
  physics_score: number;
  chemistry_score: number;
  biology_score: number;
  english_score: number;
  geography_score: number;
}

export interface State {
  name: string;
  abbreviation: string;
  latitude: string;
  longitude: string;
  timezones: string[];
  ianaTimezones: string[];
}

export interface Country {
  name: string;
  code: string;
  capital: string | null;
  region: string;
  currency: {
    code: string;
    name: string;
    symbol: string | null;
  };
  language: {
    code: string | null;
    name: string;
    iso639_2?: string;
    nativeName?: string;
  };
  flag: string;
  dialling_code?: string;
  isoCode?: string;
  demonym?: string;
}

export interface WeatherCity {
  id: number;
  name: string;
  country: string;
  coord: {
    lon: number;
    lat: number;
  };
}

export interface WeatherTemp {
  day: number;
  min: number;
  max: number;
  night: number;
  eve: number;
  morn: number;
}

export interface WeatherDataPoint {
  dt: number;
  temp: WeatherTemp;
  pressure: number;
  humidity: number;
  weather: Array<{
    id: number;
    main: string;
    description: string;
    icon: string;
  }>;
  speed: number;
  deg: number;
  clouds: number;
  rain?: number;
  snow?: number;
  uvi?: number;
}

export interface DailyWeather {
  city: WeatherCity;
  time: number;
  data: WeatherDataPoint[];
}

// Objects Types

export interface KeyCodes {
  ArrowKeys: {
    Up: number;
    Down: number;
    Left: number;
    Right: number;
  };
  NavigationKeys: {
    Home: number;
    End: number;
    PageUp: number;
    PageDown: number;
  };
  FunctionKeys: {
    F1: number;
    F2: number;
    F3: number;
    F4: number;
    F5: number;
    F6: number;
    F7: number;
    F8: number;
    F9: number;
    F10: number;
    F11: number;
    F12: number;
  };
  ModifierKeys: {
    Shift: number;
    Ctrl: number;
    Alt: number;
    Meta: number;
  };
  NumberKeys: {
    [key: string]: number;
  };
  LetterKeys: {
    [key: string]: number;
  };
  SpecialKeys: {
    [key: string]: number;
  };
}

export interface Movie {
  id: number;
  title: string;
  year: string;
  runtime: string;
  genres: string[];
  director: string;
  actors: string;
  plot: string;
  posterUrl: string;
}

export interface MoviesData {
  source: string;
  count: number;
  Genres: string[];
  List: Movie[];
}

// Dictionary Types (Key-Value Pairs)

export interface StatesDictionary {
  [abbreviation: string]: string;
}

export interface CountriesDictionary {
  [code: string]: string;
}
