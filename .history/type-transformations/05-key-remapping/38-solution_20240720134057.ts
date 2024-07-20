import { Equal, Expect } from "../helpers/type-utils";

interface Example {
  name: string;
  age: number;
  id: string;
  organisationId: string;
  groupId: string;
}

type OnlyIdKeys<T> = { [K extends `` ? in keyof T : never]: T[K] };

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
