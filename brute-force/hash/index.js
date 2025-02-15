// (1) Sort object by value

const obj = {
  a: 10,
  b: 12,
  c: 5,
  d: 1,
  e: 15,
  f: 14
};

// object.entries => [[a, 10], [b, 12], [c, 5]]

const response1 = {};
const result = Object.entries(obj).sort((a, b) => {
  if (a[1] > b[1]) {
    return 1
  }
   else {
    return -1
  }
});

result.forEach(([key, value]) => response[key] = value)

console.log(response1);

/* *********************************************** */

// (2) Sort Array of objects by value

const arr = [
  {name: 'a', price: 10},
  {name: 'b', price: 12},
  {name: 'c', price: 5},
  {name: 'd', price: 6}
];

const response2 = arr.sort((a, b) => a.price > b.price? 1 : -1);

console.log(response2);