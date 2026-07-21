const counter = (count = 0) => {
  return () => {
    count += 1;
    return count;
  };
};

const subsCounter = counter(0);
console.log(subsCounter());
console.log(subsCounter());

const disCounter = counter(5);
console.log(disCounter());
console.log(disCounter());
