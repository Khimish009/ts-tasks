import { Equal, Expect } from "../helpers/type-utils";

type Fruit = "apple" | "banana" | "orange";

// bad s
type AppleOrBanana<T> = T extends "apple" | "banana" ? T : never;

type tests = [Expect<Equal<AppleOrBanana, "apple" | "banana">>];
