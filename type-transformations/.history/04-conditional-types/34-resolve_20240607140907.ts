import { Equal, Expect } from "../helpers/type-utils";

type Fruit = "apple" | "banana" | "orange";

type AppleOrBanana<T> = T extends "apple" | "banana" ? infer T : never;

type tests = [Expect<Equal<AppleOrBanana, "apple" | "banana">>];
