import { Equal, Expect } from "../helpers/type-utils";

type Route = "/" | "/about" | "/admin" | "/admin/users";

type Test<T> = Record<typeof keyof T, string>;

type RoutesObject = Test<Route>;

type tests = [
  Expect<
    Equal<
      RoutesObject,
      {
        "/": "/";
        "/about": "/about";
        "/admin": "/admin";
        "/admin/users": "/admin/users";
      }
    >
  >
];