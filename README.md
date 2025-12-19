# i45 Sample Data

[Node JS Package](https://www.npmjs.com/package/i45-sample-data)

A library of sample datasets that can be used during testing and development. Fully typed with TypeScript definitions included.

## Installation

```bash
npm i i45-sample-data --save-dev
```

## Features

- ✅ **Fully TypeScript supported** with comprehensive type definitions
- ✅ **ES Modules** (ESM) support
- ✅ **Tree-shakeable** exports with individual imports
- ✅ **Zero dependencies** for production
- ✅ **18+ dataset types** with proper interfaces
- ✅ **Optimized bundle size** - import only what you need

## Bundle Size

The package is optimized for tree-shaking to minimize your production bundle:

```javascript
// ⚠️ Full import - bundles all datasets (~40-50KB minified)
import { SampleData } from "i45-sample-data";

// ✅ Tree-shakeable - only bundles what you use (~2-10KB each)
import { Books } from "i45-sample-data/collections";
import { Astronomy } from "i45-sample-data/lists";
import { DataHelpers } from "i45-sample-data/helpers";
```

**Tips for minimal bundle size:**

- Use individual imports (`/collections`, `/lists`, etc.) instead of the main entry point
- Only import the datasets you actually use
- Helper methods add ~2KB when imported

**Package marked with `sideEffects: false`** for optimal tree-shaking with modern bundlers (webpack, Rollup, Vite, esbuild).

## Usage

### Standard Import (Full Library)

```javascript
import { SampleData } from "i45-sample-data";

// Lists - Simple string arrays
console.log("Astronomy", SampleData.Lists.Astronomy);
console.log("States", SampleData.Lists.States);

// Dictionaries - Key-value pairs
console.log("States", SampleData.Dictionaries.States);
console.log("Countries", SampleData.Dictionaries.Countries);

// Collections - Arrays of objects
console.log("Books", SampleData.Collections.Books);
console.log("Students", SampleData.Collections.Students);
console.log("Countries", SampleData.Collections.Countries);
console.log("TriviaQuestions", SampleData.Collections.TriviaQuestions);
console.log("Albums", SampleData.Collections.Albums);
console.log("Songs", SampleData.Collections.Songs);
console.log("Players", SampleData.Collections.Players);
console.log("Recipes", SampleData.Collections.Recipes);
console.log("States", SampleData.Collections.States);
console.log("DailyWeather", SampleData.Collections.DailyWeather);

// Objects - Structured data
console.log("KeyCodes", SampleData.Objects.KeyCodes);
console.log("States", SampleData.Objects.States);
console.log("Movies", SampleData.Objects.Movies);
```

### Tree-Shakeable Imports (Optimized Bundle Size)

Import only the datasets you need to minimize your bundle size:

```javascript
// Import specific collections
import { Books, TriviaQuestions, Students } from "i45-sample-data/collections";

// Import specific lists
import { Astronomy, States } from "i45-sample-data/lists";

// Import specific dictionaries
import { Countries } from "i45-sample-data/dictionaries";

// Import specific objects
import { KeyCodes, Movies } from "i45-sample-data/objects";

console.log("Books:", Books);
console.log("Astronomy:", Astronomy);
```

### TypeScript with Tree-Shaking

```typescript
import { Books, type Book } from "i45-sample-data/collections";
import { Astronomy } from "i45-sample-data/lists";

// Type-safe access with minimal bundle size
const books: Book[] = Books;
const astronomyTerms: string[] = Astronomy;

console.log(books[0].title);
```

### TypeScript (Standard Import)

```javascript
import { SampleData } from "i45-sample-data";

// Lists - Simple string arrays
console.log("Astronomy", SampleData.Lists.Astronomy);
console.log("States", SampleData.Lists.States);

// Dictionaries - Key-value pairs
console.log("States", SampleData.Dictionaries.States);
console.log("Countries", SampleData.Dictionaries.Countries);

// Collections - Arrays of objects
console.log("Books", SampleData.Collections.Books);
console.log("Students", SampleData.Collections.Students);
console.log("Countries", SampleData.Collections.Countries);
console.log("TriviaQuestions", SampleData.Collections.TriviaQuestions);
console.log("Albums", SampleData.Collections.Albums);
console.log("Songs", SampleData.Collections.Songs);
console.log("Players", SampleData.Collections.Players);
console.log("Recipes", SampleData.Collections.Recipes);
console.log("States", SampleData.Collections.States);
console.log("DailyWeather", SampleData.Collections.DailyWeather);

// Objects - Structured data
console.log("KeyCodes", SampleData.Objects.KeyCodes);
console.log("States", SampleData.Objects.States);
console.log("Movies", SampleData.Objects.Movies);
```

### TypeScript

```typescript
import {
  SampleData,
  type Book,
  type TriviaQuestion,
  type Student,
} from "i45-sample-data";

// Type-safe access to data
const books: Book[] = SampleData.Collections.Books;
const firstBook: Book = books[0];

// Intellisense works perfectly
console.log(firstBook.title, firstBook.author, firstBook.isbn);

// Type-safe function parameters
function displayQuestion(question: TriviaQuestion): void {
  console.log(`${question.category}: ${question.question}`);
  console.log(`Difficulty: ${question.difficulty}`);
}

// Generic fetch with type parameter
type ApiResponse = { data: Student[] };
const result = await SampleData.fetch<ApiResponse>(
  "https://api.example.com/students"
);
```

## Helper Methods

### SampleData Helper Methods

Convenience methods for working with sample data:

```typescript
import { SampleData } from "i45-sample-data";

// Get a random book
const randomBook = SampleData.random(SampleData.Collections.Books);

// Get 3 random trivia questions
const questions = SampleData.randomMultiple(
  SampleData.Collections.TriviaQuestions,
  3
);

// Shuffle the states list
const shuffledStates = SampleData.shuffle(SampleData.Lists.States);
```

### DataHelpers for Advanced Manipulation

Import `DataHelpers` for advanced data manipulation utilities:

```typescript
import { TriviaQuestions } from "i45-sample-data/collections";
import { DataHelpers } from "i45-sample-data/helpers";

// Filter by difficulty
const easyQuestions = DataHelpers.filterBy(
  TriviaQuestions,
  "difficulty",
  "easy"
);

// Search across multiple fields
const science = DataHelpers.search(TriviaQuestions, "science", [
  "category",
  "question",
]);

// Group by difficulty
const grouped = DataHelpers.groupBy(TriviaQuestions, "difficulty");
// { easy: [...], medium: [...], hard: [...] }

// Paginate results
const page1 = DataHelpers.paginate(TriviaQuestions, 1, 5);
// { data: [...5 items], page: 1, total: 10, hasNext: true, ... }

// Sort by property
const sorted = DataHelpers.sortBy(TriviaQuestions, "difficulty", "asc");

// Get unique values
const difficulties = DataHelpers.unique(TriviaQuestions, "difficulty");

// Extract specific fields
const simplified = DataHelpers.pluck(TriviaQuestions, "question", "difficulty");
```

**Available DataHelper methods:**

- `filterBy()` - Filter by property value
- `search()` - Search across string fields
- `filterWhere()` - Filter with custom function
- `groupBy()` - Group by property
- `countBy()` - Count occurrences
- `sortBy()` - Sort by property
- `paginate()` - Paginate with metadata
- `unique()` - Get unique values
- `pluck()` - Extract properties

## Available Types

All TypeScript interfaces are exported for use in your projects:

- `Book` - ISBN, title, author, publisher details
- `TriviaQuestion` - Trivia questions with difficulty and category
- `Album` - Music album information
- `Song` - Song metadata with audio features
- `Player` - Soccer player data
- `Recipe` - Cooking recipes with ingredients and instructions
- `Student` - Student records with grades
- `State` - US state information
- `Country` - Country data with currency and language
- `DailyWeather` - Weather forecast data
- `KeyCodes` - Keyboard key code mappings
- `Movie` - Movie metadata
- And more...

## Sample Output

```javascript
console.log(SampleData.Collections.TriviaQuestions);

// output
[
  {
    type: "multiple",
    difficulty: "easy",
    category: "Science &amp; Nature",
    question:
      "The element involved in making human blood red is which of the following?",
    correct_answer: "Iron",
    incorrect_answers: ["Copper", "Iridium", "Gold"],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Entertainment: Video Games",
    question:
      "How many flagship monsters appear in Monster Hunter Gernerations?",
    correct_answer: "4",
    incorrect_answers: ["3", "5", "6"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Entertainment: Video Games",
    question:
      "'Gimmick!' is a Japanese Famicom game in the cartridge. What is it called?",
    correct_answer: "FME-7",
    incorrect_answers: ["VRC6", "VRC7", "MMC5"],
  },
  {
    type: "boolean",
    difficulty: "medium",
    category: "Animals",
    question: "Finnish Lapphund dogs were used for herding reindeer.",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },
];
```

## Using in React Component (App.tsx)

```typescript
import "./App.css";
import { SampleData, type TriviaQuestion } from "i45-sample-data";

function App() {
  const questions: TriviaQuestion[] = SampleData.Collections.TriviaQuestions;

  return (
    <>
      <div>
        {questions.map((question, index) => (
          <div id={`q-${index}`} key={index} className="question-div">
            <h3>{question.question}</h3>
            <p>Category: {question.category}</p>
            <p>Difficulty: {question.difficulty}</p>
            <p>Type: {question.type}</p>
            <p>Correct Answer: {question.correct_answer}</p>
            <p>Incorrect Answers: {question.incorrect_answers.join(", ")}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
```

## Simple API Call

The **from** method makes a get request using the [fetch api](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) and returns the results in JSON format.

The `apiKey` parameter is optional - only provide it if your API requires authentication.

**Signature:** `SampleData.from(uri: string, apiKey?: string): Promise<any>`

NOTE: This method makes an HTTP Get request and, if an API key is provided, passes it in the `x-api-key` request header. To make an HTTP Post request, or to include other headers such as custom content types, see the section [API Call with Custom Headers](#api-call-with-custom-headers).

```javascript
import { SampleData } from "i45-sample-data";

// Make an async API call to a public endpoint (no API key needed)
const data = await SampleData.from(
  "https://jsonplaceholder.typicode.com/posts"
);
console.log(data);

// Or with an API key for authenticated endpoints
const protectedData = await SampleData.from(
  "https://api.example.com/protected",
  "YOUR_API_KEY"
);
console.log(protectedData);
```

## API Call with Custom Headers

options object, and returns a typed [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response).

See the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) MDN Web Docs for more information.

```typescript
import { SampleData } from "i45-sample-data";

// With TypeScript, you can specify the response type
type Post = { id: number; title: string; body: string; userId: number };

const data = await SampleData.fetch<Post[]>(
  "https://jsonplaceholder.typicode.com/posts",
  {
    headers: {
      "Content-Type": "application/json",
      "x-api-key": "YOUR_API_KEY",
    },
  }
);

// data is now typed as Post[]
console.log("Data from API", data);
```

## Backward Compatibility

The following deprecated properties are still available but not recommended:

```javascript
// ⚠️ Deprecated - Use Collections instead
SampleData.JsonData.Books;

// ⚠️ Deprecated - Use Dictionaries instead
SampleData.KeyValueLists.States;

// ✅ Recommended
SampleData.Collections.Books;
SampleData.Dictionaries.States;
```

## License

ISC
