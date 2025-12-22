// Test helper methods
import { SampleData } from "../dist/index.js";
import { DataHelpers } from "../dist/helpers.js";

console.log("Testing Helper Methods...\n");

// Test SampleData.random()
console.log("=== SampleData Helper Methods ===");
const randomBook = SampleData.random(SampleData.Collections.Books);
console.log("✓ SampleData.random():", randomBook.title);

const threeQuestions = SampleData.randomMultiple(
  SampleData.Collections.TriviaQuestions,
  3
);
console.log("✓ SampleData.randomMultiple(3):", threeQuestions.length, "items");

const shuffledStates = SampleData.shuffle(SampleData.Lists.States);
console.log("✓ SampleData.shuffle():", shuffledStates.length, "items shuffled");

// Test DataHelpers
console.log("\n=== DataHelpers Utility Methods ===");

// filterBy
const easyQuestions = DataHelpers.filterBy(
  SampleData.Collections.TriviaQuestions,
  "difficulty",
  "easy"
);
console.log(
  "✓ DataHelpers.filterBy('difficulty', 'easy'):",
  easyQuestions.length,
  "items"
);

// numeric range
const longBooks = DataHelpers.range(
  SampleData.Collections.Books,
  "pages",
  400,
  500
);
console.log(
  "✓ DataHelpers.range('pages', 400, 500'):",
  longBooks.length,
  "items"
);

// text range
const mediumBooks = DataHelpers.range(
  SampleData.Collections.Books,
  "title",
  "M",
  "R"
);
console.log(
  "✓ DataHelpers.range('title', 'M', 'R'):",
  mediumBooks.length,
  "items",
  mediumBooks
);

// filterWhere
const intermediateQuestions = DataHelpers.filterWhere(
  SampleData.Collections.TriviaQuestions,
  (i) => i.difficulty == "easy" || i.difficulty == "medium"
);
console.log(
  "✓ DataHelpers.filterWhere((i) => i.difficulty == 'easy' || i.difficulty == 'medium'):",
  intermediateQuestions.length,
  "items",
  intermediateQuestions
);

// search
const scienceQuestions = DataHelpers.search(
  SampleData.Collections.TriviaQuestions,
  "science",
  ["category", "question"]
);
console.log(
  "✓ DataHelpers.search('science'):",
  scienceQuestions.length,
  "items"
);

// groupBy
const byDifficulty = DataHelpers.groupBy(
  SampleData.Collections.TriviaQuestions,
  "difficulty"
);
console.log(
  "✓ DataHelpers.groupBy('difficulty'):",
  Object.keys(byDifficulty).length,
  "groups"
);

// countBy
const counts = DataHelpers.countBy(
  SampleData.Collections.TriviaQuestions,
  "difficulty"
);
console.log(
  "✓ DataHelpers.countBy('difficulty'):",
  Object.keys(counts).length,
  "categories"
);

// sortBy
const sortedByTitle = DataHelpers.sortBy(
  SampleData.Collections.Books,
  "title",
  "asc"
);
console.log("✓ DataHelpers.sortBy('title', 'asc'):", sortedByTitle[0].title);

// paginate
const page1 = DataHelpers.paginate(SampleData.Collections.Books, 1, 3);
console.log(
  "✓ DataHelpers.paginate(page: 1, size: 3):",
  page1.data.length,
  "items, hasNext:",
  page1.hasNext
);

// unique
const uniqueDifficulties = DataHelpers.unique(
  SampleData.Collections.TriviaQuestions,
  "difficulty"
);
console.log(
  "✓ DataHelpers.unique('difficulty'):",
  uniqueDifficulties.length,
  "unique values"
);

// pluck
const bookTitles = DataHelpers.pluck(
  SampleData.Collections.Books,
  "title",
  "author"
);
console.log(
  "✓ DataHelpers.pluck('title', 'author'):",
  bookTitles.length,
  "items"
);

console.log("\n✅ All helper methods working correctly!");
