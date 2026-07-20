type User = {
  id: number;
  fname: string;
  lname: string;
  phn: number;
  address: string;
};

const user: User = {
  id: 1,
  fname: "Bharath",
  lname: "Kumar",
  phn: 900304,
  address: "#, jdvcjdbclksdcdc, 5628384",
};

console.log(user.id, user.fname, user.lname, user.phn, user.address);

// instead of using user. everytime,
// it does not change when the object changes
const { id, fname, lname, phn, address } = user;
user.id = 2;
console.log(id, fname, lname, phn, address);
console.log(user.id);

// we can use diff name for variable
// also we set default value
const { id: ident, phn: phone = 111111 } = user;
console.log(ident, phone);

// pick a value and have remaining in other object
const { id: newId, ...remaining } = user;
console.log(newId);
console.log(remaining);
