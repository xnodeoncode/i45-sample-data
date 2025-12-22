# i45 Sample Data | Revision List

## December 6, 2024

### v0.0.0-alpha.1

- Initial pre-release build.

### v0.0.0-alpha.2

- Update README.md.
- Added GitHub urls.

### v0.0.0-alpha.3

- Updated README.md.
- Added more sample data.

### v0.0.0-alpha.4

- Added samples for Students and Countries.
- Implemented REST API call.

### v0.0.0-alpha.5

- Added Fetch REST API method wrapper. The method accepts the same parameters as the native fetch api and returns the response object.
- This allows more flexibility in making API calls.

## December 21, 2024

### v1.0.1

- Minor bug fixes.

## May 07, 2025

### v1.0.2

- Minor bug fixes.

### v1.0.3

- Minor bug fixes.

## May 08, 2025

### v2.0.0

- Refactored **KeyCodes** object to reduce the depth.
  - After import use **KeyCodes.ArrowKeys.Up** instead of _KeyCodes.KeyCodes.ArrowKeys.Up_.
  - There is no backward compatibility.
- Added **States** to object collection.
  - State information can be accessed using **SampleData.Objects.States.Michigan** syntax.

### v2.0.1

- Minor bug fixes.

### v2.1.0

- Added album collection to objects.

### v2.1.1

- Minor bug fixes.

### v2.1.2

- Added daily weather sample.

### v2.1.3

- Added movie list.

## December 19, 2025

### v2.2.0

- **Added comprehensive TypeScript support** with full type definitions for all datasets.
  - Exported 18+ TypeScript interfaces covering all collections, objects, and dictionaries.
  - Consumers can now import types: `import { type Book, type TriviaQuestion, SampleData } from 'i45-sample-data'`
  - Full IntelliSense and autocomplete support in TypeScript projects.
  - Type definitions include: Book, TriviaQuestion, Album, Song, Player, Recipe, Student, State, Country, DailyWeather, KeyCodes, Movie, and more.
  - Properly typed optional and nullable fields for accurate data modeling.
  - Generic type support for `SampleData.fetch<T>()` method.
- **100% backward compatible** - No breaking changes for existing JavaScript or TypeScript consumers.
- All type declarations automatically included in package distribution.

### v2.2.1

- **Updated README.md** with comprehensive TypeScript usage examples.
  - Added TypeScript import examples with type annotations.
  - Documented all available type interfaces.
  - Updated React component example with proper TypeScript syntax.
  - Replaced deprecated property references with current recommended APIs (Collections/Dictionaries).
  - Added backward compatibility section for deprecated properties.
  - Included feature highlights (TypeScript support, ESM, tree-shakeable).
  - Fixed fetch API example to show generic type parameter usage.

### v3.0.0

**BREAKING CHANGES:**

- Error handling behavior changes may affect consumers not properly handling errors.
- HTTP non-2xx responses now throw errors instead of attempting to parse.
- Invalid content types now throw errors before parsing attempts.

- **Added Node.js compatibility** for isomorphic package support.
  - Replaced `window.fetch` with `globalThis.fetch` for cross-environment compatibility.
  - Package now works in Node.js 18+ (with native fetch) and all modern browsers.
  - Added helpful error messages when fetch is unavailable in older environments.
  - Improved error handling - both `from()` and `fetch()` methods now properly throw errors.
- **Enhanced package.json metadata** for better tooling support.
  - Added explicit `main` field for CommonJS/Node.js compatibility.
  - Added explicit `module` field for ES module bundlers.
  - Added explicit `types` field for TypeScript definition discovery.
  - Enhanced `exports` field with explicit `import` and `types` conditions.
- **Added .npmignore** to exclude development files from published package.
  - Excludes test files, build configs, and documentation not needed by consumers.
  - Reduces package size and improves install times.
- **Significantly improved error handling** in `from()` and `fetch()` methods.
  - Added input validation for URI parameter with clear error messages.
  - Added HTTP status code validation with detailed error messages including status code, status text, and URI.
  - Added Content-Type validation to ensure responses are JSON before parsing.
  - Improved error propagation - preserves Error instances and stack traces.
  - Better error context - all error messages now include the failing URI for easier debugging.
  - Removed console.error calls to let consumers handle logging appropriately.
- **Made `apiKey` parameter optional** in `from()` method.
  - API key is no longer required - only provide it when calling authenticated endpoints.
  - The `x-api-key` header is only included when an API key is provided.
  - Supports both public and authenticated API calls.

### v3.1.0

- **Added tree-shakeable individual imports** for optimized bundle sizes.
  - New subpath exports: `i45-sample-data/collections`, `i45-sample-data/lists`, `i45-sample-data/dictionaries`, `i45-sample-data/objects`, `i45-sample-data/helpers`.
  - Import only the specific datasets you need instead of the entire library.
  - Example: `import { Books, TriviaQuestions } from 'i45-sample-data/collections'`
  - Reduces bundle size significantly when using modern bundlers (webpack, Vite, Rollup).
  - All types are re-exported from subpath imports for full TypeScript support.
- **Added helper methods to SampleData class** for working with sample data.
  - `SampleData.random<T>(dataset)` - Get a random item from any array dataset.
  - `SampleData.randomMultiple<T>(dataset, count)` - Get multiple random items.
  - `SampleData.shuffle<T>(dataset)` - Randomly shuffle an array (returns new array).
  - Methods include input validation with clear error messages.
  - All methods are fully typed with TypeScript generics.
- **Added DataHelpers class** for generic data manipulation (`i45-sample-data/helpers`).
  - `filterBy()` - Filter items by property value.
  - `search()` - Search across multiple string properties.
  - `filterWhere()` - Filter by custom predicate function.
  - `groupBy()` - Group items by property value.
  - `countBy()` - Count items by property value.
  - `sortBy()` - Sort array by property (asc/desc).
  - `paginate()` - Paginate array data with metadata.
  - `unique()` - Get unique values for a property.
  - `pluck()` - Extract specific properties from objects.
  - All methods work with any array data, not just sample data.
  - Tree-shakeable - only imported when explicitly needed.
- **Updated README.md** with comprehensive usage examples.
  - Added examples showing both standard and tree-shakeable import patterns.
  - Documented helper methods with practical examples.
  - Included TypeScript examples with tree-shakeable imports.
  - Documented bundle size optimization benefits.
- **100% backward compatible** - No breaking changes, pure feature additions.

### v3.1.1

- **Added range() method to DataHelpers**
  - `range()` - Filter items by property based on a range of values.
- **Updated Test Methods**
  - Added test methods to support the `filterWhere()` and the new `range()` methods.
- **Updated README.md**
  - Documented updates to helper methods with examples.
