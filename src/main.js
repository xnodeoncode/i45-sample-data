/******************************************************************
 *
 * Main.js
 * Some of the lists included in this package are from the following sources:
 * https://gist.github.com/mshafrir/2646763
 * https://gist.github.com/jpriebe/d62a45e29f24e843c974
 */

import { Lists } from "./lists/lists.js";
import { JSONData } from "./json-data/json-data.js";
import { KeyValueLists } from "./key-values/key-values.js";

export class SampleData {
  constructor() {}
  static Lists = Lists;
  static JsonData = JSONData;
  static KeyValueLists = KeyValueLists;
}
