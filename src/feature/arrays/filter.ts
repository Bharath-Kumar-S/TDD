export const filter = <T extends number | string>(arr: T[], by: T): T[] => {
  return arr.filter((a) => a === by);
};

export const notFilter = <T extends number | string>(arr: T[], by: T): T[] => {
  return arr.filter((a) => a !== by);
};
