import { addCount } from "./addCount";

describe("addCount", () => {
  test("a & b are ranges", () => {
    expect(addCount([10, 20], [50, 80])).toEqual([60, 100]);
  });
  test("a is range & b is number", () => {
    expect(addCount([20, 50], 8)).toEqual([28, 58]);
  });
  test("a is number & a is range", () => {
    expect(addCount(23, [100, 200])).toEqual([123, 223]);
  });
  test("a & b are number", () => {
    expect(addCount(61, 12)).toEqual(73);
  });
});

export {};
