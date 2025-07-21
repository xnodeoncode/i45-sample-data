import { KeyCodes } from "./keycodes.js";
import { States } from "./states.js";

export class Objects {
  constructor() {}
  static KeyCodes = KeyCodes ? KeyCodes : {};
  static States = States ? States : {};
}
