import { Equal, Expect } from "../helpers/type-utils";

type GetDataValue<T> = T[keyof ty T];

type test = GetDataValue<string>;

type tests = [
  Expect<Equal<GetDataValue<{ data: "hello" }>, "hello">>,
  Expect<Equal<GetDataValue<{ data: { name: "hello" } }>, { name: "hello" }>>,
  Expect<
    Equal<
      GetDataValue<{ data: { name: "hello"; age: 20 } }>,
      { name: "hello"; age: 20 }
    >
  >,
  // Expect that if you pass in string, it
  Expect<Equal<GetDataValue<string>, never>>
];
