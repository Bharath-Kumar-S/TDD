export const sortArray = <T extends number | string>(
  arr: T[],
  order = 1,
): T[] => {
  return arr.sort((a, b) => {
    if (typeof a === "number" && typeof b === "number") {
      return order ? a - b : b - a;
    }
    return order
      ? String(a).localeCompare(String(b))
      : String(b).localeCompare(String(a));
  });
};
