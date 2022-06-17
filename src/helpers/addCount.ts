import { Count } from "../types/Count";

export function addCount(a: Count, b: Count): Count {
  if (typeof a === "object") {
    if (typeof b === "object") {
      return [a[0] + b[0], a[1] + b[1]];
    } else {
      return [a[0] + b, a[1] + b];
    }
  } else {
    if (typeof b === "object") {
      return [a + b[0], a + b[1]];
    } else {
      return a + b;
    }
  }
}
