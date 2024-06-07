import { Equal, Expect } from "../helpers/type-utils";

type YouSayGoodbyeAndISayHello<T> = unknown;

type tests = [
  Expect<Equal<YouSayGoodbyeAndISayHello<"hello">, "goodbye">>,
  Expect<Equal<YouSayGoodbyeAndISayHello<"goodbye">, "hello">>,
];