import { Equal, Expect } from "../helpers/type-utils";

type Fruit = "apple" | "banana" | "orange";

// bad solution
// type AppleOrBanana<T> = T extends "apple" | "banana" ? T : never;

// best solution
type AppleOrBanana = 

type tests = [Expect<Equal<AppleOrBanana, "apple" | "banana">>];