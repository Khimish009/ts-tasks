import { Equal, Expect } from "../helpers/type-utils";

const fruits = ["apple", "banana", "orange"];

type AppleOrBanana = unknown;
type Fruit = fr;

type tests = [
  Expect<Equal<AppleOrBanana, "apple" | "banana">>,
  Expect<Equal<Fruit, "apple" | "banana" | "orange">>,
];