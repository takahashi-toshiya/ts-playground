// Advanced conditional types and type inference examples

// 1. Extract function return type
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

function getString(): string {
  return "hello";
}

function getNumber(): number {
  return 42;
}

type StringReturn = ReturnType<typeof getString>; // string
type NumberReturn = ReturnType<typeof getNumber>; // number

// 2. Extract array element type
type ArrayElement<T> = T extends (infer U)[] ? U : never;

type NumberArray = number[];
type StringArray = string[];

type NumElement = ArrayElement<NumberArray>; // number
type StrElement = ArrayElement<StringArray>; // string

// 3. Extract Promise value type
type PromiseValue<T> = T extends Promise<infer U> ? U : T;

type AsyncString = Promise<string>;
type AsyncNumber = Promise<number>;

type StringValue = PromiseValue<AsyncString>; // string
type NumberValue = PromiseValue<AsyncNumber>; // number
type DirectValue = PromiseValue<boolean>; // boolean (not a promise)

// 4. Function parameter extraction
type FirstParameter<T> = T extends (first: infer P, ...args: any[]) => any ? P : never;

function example(name: string, age: number): void {}

type FirstParam = FirstParameter<typeof example>; // string

// 5. Tuple to Union
type TupleToUnion<T extends readonly any[]> = T[number];

type Colors = ['red', 'green', 'blue'];
type ColorUnion = TupleToUnion<Colors>; // "red" | "green" | "blue"

// 6. Complex conditional type - NonNullable implementation
type MyNonNullable<T> = T extends null | undefined ? never : T;

type MaybeString = string | null | undefined;
type DefinitelyString = MyNonNullable<MaybeString>; // string

// 7. Distributive conditional types
type ToArray<T> = T extends any ? T[] : never;

type StringOrNumber = string | number;
type Arrays = ToArray<StringOrNumber>; // string[] | number[]

// 8. Non-distributive conditional types
type ToArrayNonDistributive<T> = [T] extends [any] ? T[] : never;

type NonDistributiveArrays = ToArrayNonDistributive<StringOrNumber>; // (string | number)[]

// Usage examples and tests
const asyncValue: PromiseValue<Promise<{ id: number; name: string }>> = {
  id: 1,
  name: "Test"
};

const colorValue: ColorUnion = "red"; // Only "red", "green", or "blue" allowed

console.log("Conditional types and inference examples loaded!");
console.log("Async value:", asyncValue);
console.log("Color value:", colorValue);