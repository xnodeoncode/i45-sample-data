# i45 Sample Data

[Node JS Package](https://www.npmjs.com/package/i45-sample-data)

A library of sample datasets that can be used during testing and development.

## Installation

```javascript
npm i i45-sample-data
```

## Usage

```javascript
import { SampleData } from "i45-sample-data";

console.log("Astronomy", SampleData.Lists.Astronomy); // outputs a list of astronomical terms.
console.log("States", SampleData.KeyValueLists.States); // outputs a list of states and abbreviations.
console.log("States", SampleData.JsonData.States); // outputs an array of states with other information.
console.log("Students", SampleData.JsonData.Students); // outputs an array of students and grades.
console.log("Countries", SampleData.JsonData.Countries); // outputs an array of countries with other information
console.log("Key Codes", SampleData.Objects.KeyCodes); // outputs a KeyCodes object with keyboard codes grouped by function.

console.log(
  "Rest API call",
  await SampleData.from("https://jsonplaceholder.typicode.com/posts")
);
```

## Sample Output

```javascript
console.log(SampleData.JsonData.TriviaQuestions);

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

## Using a React Component (App.jsx)

```javascript
import "./App.css";
import { SampleData } from "i45-sample-data";

function App() {
  // iterate over a list of trivia questions.
  return (
    <>
      <div>
        {SampleData.JsonData.TriviaQuestions.map((question, index) => (
          <div id={index} key={index} className="question-div">
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

## Simple REST API Call

The from method makes a get request using the browser's [fetch api](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) and returns the results in JSON format.

An optional API_KEY can be passed as a second parameter.

NOTE: This method only makes a get request and only passes the x-api-key in the request. To make a post request, or to include other headers such as custom content types, see the section [REST API Call with Custom Headers](#rest-api-call-with-custom-headers).

```javascript
import { SampleData } from "i45-sample-data";

// Make an async REST API call to the provided endpoint.
var data = await SampleData.from("https://jsonplaceholder.typicode.com/posts");

//or

var data = await SampleData.from(
  "https://jsonplaceholder.typicode.com/posts",
  "YOUR_API_KEY"
);
```

## REST API Call with Custom Headers

The fetch method is a wrapper for the browser's [fetch api](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) that accepts a url and a [headers](https://developer.mozilla.org/en-US/docs/Web/API/Headers) object, and returns a response object.

The [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) object may contain results in other formats, not only JSON.

See the [FETCH API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) MDN Web Docs for more information on using [headers](https://developer.mozilla.org/en-US/docs/Web/API/Headers).

```javascript
import { SampleData } from "i45-sample-data";

// The optional headers object contains an x-api-key that in passed as YOUR_API_KEY.
data = await SampleData.from("https://jsonplaceholder.typicode.com/posts", {
  headers: { "Content-Type": "application/json", "x-api-key": "YOUR_API_KEY" },
});

console.log("Data from API", data);
```

## Sources

The sample data in this package is pulled from various sources:

- [Nano Taboada](https://gist.github.com/nanotaboada)
- [Dummy APIs](https://dummyjson.com/docs/recipes)
- [Jason Priebe](https://gist.github.com/jpriebe)
- [Michael Shafrir](https://gist.github.com/mshafrir/2646763)
- [Felix Bellanger](https://gist.github.com/keeguon)
- [Open Trivia Database](https://opentdb.com/)
- [JSON Placeholder](https://jsonplaceholder.typicode.com)
