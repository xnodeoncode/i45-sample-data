/******************************************************************
 *
 * Main.js
 * Some of the lists included in this package are from the following sources:
 * https://gist.github.com/mshafrir/2646763
 * https://gist.github.com/jpriebe/d62a45e29f24e843c974
 * https://gist.github.com/nanotaboada
 * https://dummyjson.com/
 * https://www.mockaroo.com/
 * https://www.generatedata.com/
 * https://gist.github.com/keeguon/2310008
 * https://jsonplaceholder.typicode.com/guide/
 *
 */

import { Lists } from "./lists/lists.js";
import { JSONData } from "./json-data/json-data.js";
import { KeyValueLists } from "./key-values/key-values.js";
import { Objects } from "./objects/objects.js";

export class SampleData {
  constructor() {}
  static Lists = Lists;
  static JsonData = JSONData;
  static KeyValueLists = KeyValueLists;
  static Objects = Objects;
  static from = async (uri, apiKey) => {
    try {
      const response = await fetch(uri, {
        headers: {
          "Content-Type": "application/json",
          "x-api-key": apiKey,
        },
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  };
}
