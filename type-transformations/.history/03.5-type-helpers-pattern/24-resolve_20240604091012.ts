import { Equal, Expect } from "../helpers/type-utils";

type GetParametersAndReturnType<T> = {
  params: Parameters<T>;
  returnValue: ReturnType<T>;
};

const tests1 = () => "2"

type test2 = typeof tests1

type test22 = typeof tests1


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