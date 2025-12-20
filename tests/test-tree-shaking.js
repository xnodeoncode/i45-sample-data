// Test tree-shakeable individual imports
import { Books, TriviaQuestions } from "../dist/collections.js";
import { Astronomy, States as StatesList } from "../dist/lists.js";
import { States as StatesDict, Countries } from "../dist/dictionaries.js";
import { KeyCodes, Movies } from "../dist/objects.js";

console.log("Testing tree-shakeable imports...\n");

// Test collections
console.log("✓ Books from collections:", Books.length, "items");
console.log(
  "✓ TriviaQuestions from collections:",
  TriviaQuestions.length,
  "items"
);

// Test lists
console.log("✓ Astronomy from lists:", Astronomy.length, "items");
console.log("✓ States from lists:", StatesList.length, "items");

// Test dictionaries
console.log("✓ States dictionary:", Object.keys(StatesDict).length, "items");
console.log("✓ Countries dictionary:", Object.keys(Countries).length, "items");

// Test objects
console.log("✓ KeyCodes:", Object.keys(KeyCodes).length > 0 ? "OK" : "FAIL");
console.log("✓ Movies:", Object.keys(Movies).length > 0 ? "OK" : "FAIL");

console.log("\n✅ Tree-shakeable imports test complete!");
