import { Equal, Expect } from "../helpers/type-utils";

interface Attributes {
  firstName: string;
  lastName: string;
  age: number;
}

type Test<T> = [T]

type AttributeGetters = {
  Test<Attributes>: () => Attributes[K];
};

type tests = [
  Expect<
    Equal<
      AttributeGetters,
      {
        getFirstName: () => string;
        getLastName: () => string;
        getAge: () => number;
      }
    >
  >
];
