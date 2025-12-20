import { KeyCodes } from "./keycodes";
import { States } from "./states";
import { Albums } from "./albums";
import { Movies } from "./movies";

export class Objects {
  constructor() {}
  static KeyCodes: any = KeyCodes ? KeyCodes : {};
  static States: any = States ? States : {};
  static Albums: any[] = Albums ? Albums : [];
  static Movies: any = Movies ? Movies : {};
}
