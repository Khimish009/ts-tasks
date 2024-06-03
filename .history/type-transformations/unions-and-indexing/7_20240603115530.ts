import { Equal, Expect } from "../helpers/type-utils";

export const fakeDataDefaults = {
  String: "Default string",
  Int: 1,
  Float: 1.14,
  Boolean: true,
  ID: "id",
};

type fakeDataDefaults = typeof fakeDataDefaults;

export type StringType = fakeDataDefaults["String"];
export type IntType = fakeDataDefaults["String"];
export type FloatType = fakeDataDefaults["String"];
export type BooleanType = fakeDataDefaults["String"];
export type IDType = fakeDataDefaults["String"];

type tests = [
  Expect<Equal<StringType, string>>,
  Expect<Equal<IntType, number>>,
  Expect<Equal<FloatType, number>>,
  Expect<Equal<BooleanType, boolean>>,
  Expect<Equal<IDType, string>>
];
