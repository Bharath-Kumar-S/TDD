const arr = [
  { id: 1, userName: "Bharath" },
  { id: 2, userName: "Kumar" },
  { id: 3, userName: "Vijayan" },
  { id: 4, userName: "Ramya" },
];

console.log(arr.find((e) => e.id === 2)?.userName);
