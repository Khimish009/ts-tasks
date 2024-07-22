type MyExclude<T, U> = U extends T ? U : never

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '../utils'

type Test = MyExclude<'a' | 'b' | 'c', 'a'>

type cases = [
  Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a'>, 'b' | 'c'>>,
  Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a' | 'b'>, 'c'>>,
  Expect<Equal<MyExclude<string | number | (() => void), Function>, string | number>>,
]