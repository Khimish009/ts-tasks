import { Equal, Expect } from "../helpers/type-utils";

interface Example {
  name: string;
  age: number;
  id: string;
  organisationId: string;
  groupId: string;
}

type OnlyIdKeys<T> = { [K in keyof T as Exclude<K, `${string}Id`>]: T[K] };

type tests = [
  Expect<
    Equal<
      OnlyIdKeys<Example>,
      {
        // id: string;
        organisationId: string;
        groupId: string;
      }
    >
  >,
  Expect<Equal<OnlyIdKeys<{}>, {}>>
];