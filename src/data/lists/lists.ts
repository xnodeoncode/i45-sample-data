import { Astronomy } from "./astronomy";
import { Simpsons } from "./simpsons";
import { States } from "./states";

export class Lists {
  constructor() {}
  static Astronomy: string[] = Astronomy ? Astronomy : [];
  static States: string[] = States ? States : [];
  static Simpsons: string[] = Simpsons ? Simpsons : [];
}
