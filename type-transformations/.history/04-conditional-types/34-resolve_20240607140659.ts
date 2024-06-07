import { Equal, Expect } from "../helpers/type-utils";

type Fruit = "apple" | "banana" | "orange";

type AppleOrBanana<T> = Fruit extends "apple" | "banana" ? infer T : never;

type tests = [Expect<Equal<AppleOrBanana, "apple" | "banana">>];
