export const removeDuplicates = <T extends number | string>(arr: T[]): T[] => {
  return [...new Set(arr)]; // Cleaner, avoids redundant shallow copying
};
