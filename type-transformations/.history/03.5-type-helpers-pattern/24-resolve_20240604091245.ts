import { Equal, Expect } from "../helpers/type-utils";

type GetParametersAndReturnType<T ex> = {
  params: Parameters<T>;
  returnValue: ReturnType<T>;
};

const tests1 = () => "2"

type test2 = Parameters<typeof tests1>

type test3 = ReturnType<typeof tests1>

type test22 = test2

type test222 = test3


type tests = [
  Expect<
    Equal<
      GetParametersAndReturnType<() => string>,
      { params: []; returnValue: string }
    >
  >,
  Expect<
    Equal<
      GetParametersAndReturnType<(s: string) => void>,
      { params: [string]; returnValue: void }
    >
  >,
  Expect<
    Equal<
      GetParametersAndReturnType<(n: number, b: boolean) => number>,
      { params: [number, boolean]; returnValue: number }
    >
  >,
];