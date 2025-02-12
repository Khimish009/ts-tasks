import { Equal, Expect } from "../helpers/type-utils";

interface Example {
  name: string;
  age: number;
  id: string;
  organisationId: string;
  groupId: string;
}
// my solution
// type OnlyIdKeys<T> = { [K in keyof T as Extract<K, `${string}Id` | 'id'>]: T[K] };

type SearchForId = `${string}${'id' | 'Id'}`

type OnlyIdKeys<T> = { 
  [K in keyof T as K extends SearchForId ? K : never]: T[K]
}

type tests = [
  Expect<
    Equal<
      OnlyIdKeys<Example>,
      {
        id: string;
        organisationId: string;
        groupId: string;
      }
    >
  >,
  Expect<Equal<OnlyIdKeys<{}>, {}>>
];
