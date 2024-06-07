import { Equal, Expect } from "../helpers/type-utils";

type GetDataValue<T> = T extends {} ? T[keyof T] : never;

type test = Get

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
