# i45 Sample Data

[Node JS Package](https://www.npmjs.com/package/i45-sample-data)

A library of sample datasets that can be used during testing and development.

## Installation

```javascript
// use the --save-dev parameter to save as a development dependency only.
npm i i45-sample-data --save-dev
```

## Usage

```javascript
import { SampleData } from "i45-sample-data";

// outputs a list of astronomical terms.
console.log("Astronomy", SampleData.Lists.Astronomy);

// outputs a list of states and abbreviations.
console.log("States", SampleData.KeyValueLists.States);

// outputs an array of states with other information.
console.log("States", SampleData.JsonData.States);

// outputs an array of students and grades.
console.log("Students", SampleData.JsonData.Students);

// outputs an array of countries with other information
console.log("Countries", SampleData.JsonData.Countries);

// outputs a KeyCodes object with keyboard codes grouped by function.
console.log("Key Codes", SampleData.Objects.KeyCodes);

// sample api call.
console.log(
  "JSON placeholder text",
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
        {SampleData.JsonData.TriviaQuestions.map((index, question) => (
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

## Simple API Call

The **from** method makes a get request using the browser's [fetch api](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) and returns the results in JSON format.

An optional API_KEY can be passed as a second parameter.

NOTE: This method makes an HTTP Get request and, if present, passes the x-api-key in the request header. To make an HTTP Post request, or to include other headers such as custom content types, see the section [API Call with Custom Headers](#api-call-with-custom-headers).

```javascript
import { SampleData } from "i45-sample-data";

// Make an async API call to the provided endpoint.
var data = await SampleData.from("https://jsonplaceholder.typicode.com/posts");

//or with an API_KEY

var data = await SampleData.from(
  "https://jsonplaceholder.typicode.com/posts",
  "YOUR_API_KEY"
);

// the data is returned in json format.
console.log(data);
```

## API Call with Custom Headers

The **fetch** method is a wrapper for the browser's [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) that accepts a URL and a [Headers](https://developer.mozilla.org/en-US/docs/Web/API/Headers) object, and returns a [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) object.

The [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) object may contain results in other formats, including HTML.

See the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) MDN Web Docs for more information on using [Headers](https://developer.mozilla.org/en-US/docs/Web/API/Headers) and [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) objects.

```javascript
import { SampleData } from "i45-sample-data";

// The optional headers object contains an x-api-key that in passed as YOUR_API_KEY.
data = await SampleData.fetch("https://jsonplaceholder.typicode.com/posts", {
  headers: { "Content-Type": "application/json", "x-api-key": "YOUR_API_KEY" },
});

// The fetch method returns a Response object, which allows the results to be converted into the required format when consumed.
console.log("Data from API", data.json());
```
