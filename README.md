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
- ✅ **Tree-shakeable** exports
- ✅ **Zero dependencies** for production
- ✅ **18+ dataset types** with proper interfaces

## Usage

### JavaScript

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

```

```
