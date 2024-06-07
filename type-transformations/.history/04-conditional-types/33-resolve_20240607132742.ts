import { Equal, Expect } from "../helpers/type-utils";

const parser1 = {
  parse: () => 1,
};

const parser2 = () => "123";

const parser3 = {
  extract: () => true,
};

// Bad solution
// type GetParserResult<T> = T extends { parse: () => infer TResult }
//   ? TResult
//   : T extends () => infer TResult
//   ? TResult
//   : T extends { extract: () => infer TResult }
//   ? TResult
//   : never;

// Best solution
type GetParserResult<T>  = T extends  { parse:  ()  => infer TResult  } | { parse:  ()  => infer TResult  }

type tests = [
  Expect<Equal<GetParserResult<typeof parser1>, number>>,
  Expect<Equal<GetParserResult<typeof parser2>, string>>,
  Expect<Equal<GetParserResult<typeof parser3>, boolean>>
];
