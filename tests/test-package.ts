// TypeScript test to verify package types and exports
import { SampleData } from "../src/index";

console.log("Testing i45-sample-data package (TypeScript)...\n");

// Test Lists with type checking
const astronomy: string[] = SampleData.Lists.Astronomy;
console.log(
  "✓ Lists.Astronomy:",
  astronomy ? `${astronomy.length} items` : "FAILED"
);

const states: string[] = SampleData.Lists.States;
console.log("✓ Lists.States:", states ? `${states.length} items` : "FAILED");

// Test Collections
const books = SampleData.Collections.Books;
console.log("✓ Collections.Books:", books ? `${books.length} items` : "FAILED");

const questions = SampleData.Collections.TriviaQuestions;
console.log(
  "✓ Collections.TriviaQuestions:",
  questions ? `${questions.length} items` : "FAILED"
);

// Test Dictionaries
console.log(
  "✓ Dictionaries.States:",
  SampleData.Dictionaries.States ? "OK" : "FAILED"
);
console.log(
  "✓ Dictionaries.Countries:",
  SampleData.Dictionaries.Countries ? "OK" : "FAILED"
);

// Test Objects
console.log(
  "✓ Objects.KeyCodes:",
  SampleData.Objects.KeyCodes ? "OK" : "FAILED"
);
console.log("✓ Objects.States:", SampleData.Objects.States ? "OK" : "FAILED");

// Test deprecated names still work
console.log(
  "✓ JsonData (deprecated):",
  SampleData.JsonData.Books ? "Still works" : "FAILED"
);
console.log(
  "✓ KeyValueLists (deprecated):",
  SampleData.KeyValueLists.States ? "Still works" : "FAILED"
);

// Test API methods with types
const fromMethod: (uri: string, apiKey: string) => Promise<any> =
  SampleData.from;
console.log(
  "\n✓ SampleData.from method exists:",
  typeof fromMethod === "function" ? "Yes" : "No"
);

const fetchMethod: <T>(uri: string, options?: any) => Promise<T> =
  SampleData.fetch;
console.log(
  "✓ SampleData.fetch method exists:",
  typeof fetchMethod === "function" ? "Yes" : "No"
);

console.log("\n✅ TypeScript package test complete!");
