import { States } from "./states";
import { Countries } from "./countries";
export class KeyValueLists {
  constructor() {}
  static States: Record<string, string> = States ? States : {};
  static Countries: Record<string, string> = Countries ? Countries : {};
}
