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
