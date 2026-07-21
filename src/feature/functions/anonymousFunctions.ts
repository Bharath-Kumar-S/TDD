// without anonymous function
const filterGreaterThanFive = (num: number) => {
  return num > 5;
};

let res = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].filter(filterGreaterThanFive);
console.log(res);

// with anonymous function
// go for it when we are going to reuse it
let res2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].filter((num) => num > 5);
console.log(res2);
