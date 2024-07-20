import { Equal, Expect } from "../helpers/type-utils";

interface FruitMap {
  apple: "red";
  banana: "yellow";
  orange: "orange";
}

type TransformedFruit = `${T in keyof typFruitMap}:${}`;

type tests = [
  Expect<
    Equal<TransformedFruit, "apple:red" | "banana:yellow" | "orange:orange">
  >,
];
