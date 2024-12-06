# i45 Sample Data

NodeJS package: ()[https://www.npmjs.com/package/i45-sample-data]

This is a library of sample datasets that can be used during testing and development. The datasets are in various formats such as lists, key/value lists, and object arrays.

## Installation

```javascript
npm i i45-sample-data
```

## Usage

```javascript
import { SampleData } from "i45-sample-data";

console.log("SampleData", SampleData.JsonData.States); // outputs a list of states information to the console.
console.log("SampleData", SampleData.KeyValueLists.States); // outputs a list of states and abbreviations to the console.
console.log("SampleData", SampleData.Lists.Astronomy); // outputs a list of astronomical terms to the console.
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

## Using with a React Component (App.jsx)

```javascript
import "./App.css";
import { SampleData } from "i45-sample-data";

function App() {
  console.log("SampleData", SampleData.JsonData.States); // outputs a list of states information to the console.
  console.log("SampleData", SampleData.KeyValueLists.States); // outputs a list of states and abbreviations to the console.
  console.log("SampleData", SampleData.Lists.Astronomy); // outputs a list of astronomical terms to the console.

  // iterate over a list of trivia questions and create divs with the information.
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
