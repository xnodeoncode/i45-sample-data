import { Lists } from "./data/lists/lists";
import { JSONData } from "./data/collections/collections";
import { KeyValueLists } from "./data/dictionaries/dictionaries";
import { Objects } from "./data/objects/objects";

// Export all TypeScript types
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
  WeatherCity,
  WeatherTemp,
  WeatherDataPoint,
  DailyWeather,
  KeyCodes,
  Movie,
  MoviesData,
  StatesDictionary,
  CountriesDictionary,
} from "./types";

export class SampleData {
  constructor() {}

  /** @deprecated Use Collections instead */
  static JsonData: any = JSONData;
  /** @deprecated Use Dictionaries instead */
  static KeyValueLists: any = KeyValueLists;

  static Lists: any = Lists;
  static Objects: any = Objects;
  static Collections: any = JSONData;
  static Dictionaries: any = KeyValueLists;

  /**
   * Get a random item from an array dataset
   * @param dataset - Array to select from
   * @returns A random item from the array
   */
  static random<T>(dataset: T[]): T {
    if (!Array.isArray(dataset) || dataset.length === 0) {
      throw new Error("Dataset must be a non-empty array");
    }
    return dataset[Math.floor(Math.random() * dataset.length)] as T;
  }

  /**
   * Get multiple random items from an array dataset
   * @param dataset - Array to select from
   * @param count - Number of items to select
   * @returns Array of random items (may contain duplicates)
   */
  static randomMultiple<T>(dataset: T[], count: number): T[] {
    if (!Array.isArray(dataset) || dataset.length === 0) {
      throw new Error("Dataset must be a non-empty array");
    }
    if (count < 1) {
      throw new Error("Count must be at least 1");
    }
    const result: T[] = [];
    for (let i = 0; i < count; i++) {
      result.push(this.random(dataset));
    }
    return result;
  }

  /**
   * Shuffle an array dataset randomly
   * @param dataset - Array to shuffle
   * @returns New shuffled array (original array not modified)
   */
  static shuffle<T>(dataset: T[]): T[] {
    if (!Array.isArray(dataset)) {
      throw new Error("Dataset must be an array");
    }
    const shuffled = [...dataset];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = shuffled[i] as T;
      shuffled[i] = shuffled[j] as T;
      shuffled[j] = temp;
    }
    return shuffled;
  }

  static from = async (uri: string, apiKey?: string): Promise<any> => {
    // Validate inputs
    if (!uri || typeof uri !== "string") {
      throw new Error("Invalid URI: URI must be a non-empty string");
    }

    try {
      // Use globalThis.fetch for isomorphic support (Node.js 18+ and browsers)
      const fetchFn =
        typeof globalThis.fetch !== "undefined"
          ? globalThis.fetch
          : typeof window !== "undefined" && window.fetch
          ? window.fetch
          : undefined;

      if (!fetchFn) {
        throw new Error(
          "Fetch is not available. Please use Node.js 18+ or a modern browser."
        );
      }

      // Build headers - only include x-api-key if apiKey is provided
      const headers: Record<string, string> = {
        "Content-Type": "application/json",
      };
      if (apiKey) {
        headers["x-api-key"] = apiKey;
      }

      const response = await fetchFn(uri, { headers });

      // Check if the response was successful
      if (!response.ok) {
        throw new Error(
          `HTTP ${response.status} ${response.statusText}: Failed to fetch from ${uri}`
        );
      }

      // Validate response has JSON content
      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        throw new Error(
          `Invalid response type: Expected application/json but received ${
            contentType || "unknown"
          }`
        );
      }

      return await response.json();
    } catch (error) {
      // Re-throw if already an Error instance
      if (error instanceof Error) {
        throw error;
      }
      // Wrap unknown errors
      throw new Error(
        `Failed to fetch data from ${uri}: ${
          error instanceof Object ? JSON.stringify(error) : String(error)
        }`
      );
    }
  };

  static fetch = async <T>(uri: string, options: any = {}): Promise<T> => {
    // Validate inputs
    if (!uri || typeof uri !== "string") {
      throw new Error("Invalid URI: URI must be a non-empty string");
    }

    try {
      // Use globalThis.fetch for isomorphic support (Node.js 18+ and browsers)
      const fetchFn =
        typeof globalThis.fetch !== "undefined"
          ? globalThis.fetch
          : typeof window !== "undefined" && window.fetch
          ? window.fetch
          : undefined;

      if (!fetchFn) {
        throw new Error(
          "Fetch is not available. Please use Node.js 18+ or a modern browser."
        );
      }

      const response = await fetchFn(uri, options);

      // Check if the response was successful
      if (!response.ok) {
        throw new Error(
          `HTTP ${response.status} ${response.statusText}: Failed to fetch from ${uri}`
        );
      }

      // Validate response has JSON content
      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        throw new Error(
          `Invalid response type: Expected application/json but received ${
            contentType || "unknown"
          }`
        );
      }

      return (await response.json()) as T;
    } catch (error) {
      // Re-throw if already an Error instance
      if (error instanceof Error) {
        throw error;
      }
      // Wrap unknown errors
      throw new Error(
        `Failed to fetch data from ${uri}: ${
          error instanceof Object ? JSON.stringify(error) : String(error)
        }`
      );
    }
  };
}
