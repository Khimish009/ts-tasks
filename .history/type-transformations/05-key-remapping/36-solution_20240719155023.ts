import { Equal, Expect } from "../helpers/type-utils";

interface Attributes {
  firstName: string;
  lastName: string;
  age: number;
}

type AttributeGetters = unknon;

type tests = [
  Expect<
    Equal<
      AttributeGetters,
      {
        firstName: () => string;
        lastName: () => string;
        age: () => number;
      }
    >
  >,
];
