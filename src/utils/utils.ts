export const invokeAll = (...args: (() => void | never)[]): void =>
  args.forEach((a) => a());

export const keysTyped = <T>(obj: T): (keyof T)[] =>
  Object.keys(obj) as (keyof T)[];

export const entriesTyped = <T>(obj: T): [keyof T, T[keyof T]][] =>
  Object.entries(obj) as [keyof T, T[keyof T]][];

export const sum = (numbers: Iterable<number>): number => {
  let res = 0;
  for (const number of numbers) {
    res += number;
  }
  return res;
};

export const avg = (numbers: number[]): number => {
  const s = sum(numbers);
  return numbers.length ? s / numbers.length : 0;
};

export const intRange = (length: number): number[] =>
  Array.from({ length }).map((_, idx) => idx);

export const randomFilter =
  <T extends unknown>(probability: number): ((val: T) => boolean) =>
  () =>
    Math.random() < probability / 100;

const getRandomInt = (min: number, max: number): number => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const randomElement = <T>(array: T[]): T =>
  array[getRandomInt(0, array.length - 1)];

export const addInRing = (n: number, add: number, ringSize: number): number =>
  n + add >= ringSize ? 0 : n + add < 0 ? ringSize - 1 : n + add;

export const isValued = <T extends unknown>(val?: T | null | undefined): val is T => val !== undefined && val !== null;

export const noop = (): void => {};

export type RequireFields<T extends unknown, K extends keyof T> = T & {
  [R in K]-?: NonNullable<T[R]>;
};

export type ChangeReturnType<F extends (...p: never) => unknown, NewReturnType> = (
  ...p: Parameters<F>
) => NewReturnType;


export type PickFunctions<T> = {
  [K in keyof T as T[K] extends (...args: never[]) => unknown ? K : never]: T[K];
};

export type OmitKeys<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
