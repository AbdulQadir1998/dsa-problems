// https://www.geeksforgeeks.org/range-queries-for-frequencies-of-array-elements/

export const findFrequency = (arr, left, right, ele) => {
  let count = 0;
  for (let i = left-1; i < right ; i++) {
    if (arr[i] === ele) {
      count++;
    }
  }
  return count;
};

// console.log(findFrequency(
//   [2, 8, 6, 9, 8, 6, 8, 2, 11],
//    2 ,5, 6
//   )
// );


// https://www.geeksforgeeks.org/maximum-occurrence-given-range/

export const maxOccurenceInRange = (arr, left, right) => {
  const number = {};

  for (let i = left-1; i < right; i++) {
    if (arr[i] in number === false) {
      number[arr[i]] = 1;
    } else {
      let value = number[arr[i]];
      value++;
      number[arr[i]] = value;
    }
  }

  const result = Object.entries(number).sort((a, b) => a[1] > b[1] ? -1 : 1);
  return result[0][1];
};

// console.log(maxOccurenceInRange(
//   [-5, -5, 2, 2, 2, 2, 3, 7, 7, 7], 4 ,9
//   )
// );


// https://www.geeksforgeeks.org/count-primes-ranges/

export const primesInRange = (start, end) => {
  let numb;
  let factors = 0;
  const primes = [];

  while (start < end) {
    numb = start;

    for (let i = 1; i <= numb; i++) {
      if (numb % i === 0) {
        factors++;
      }
    }
    if (factors === 2) {
      primes.push(numb);
    }
    factors = 0;
    start++;
  }
  return primes;
};

// console.log(primesInRange(10, 200));


// https://www.geeksforgeeks.org/number-elements-less-equal-given-number-given-subarray/

export const lessThanEqualToX = (arr, start, end, x) => {
  let count = 0;
  for (let i = start; i <= end; i++) {
    if (arr[i] <= x) {
      count++;
    }
  }

  return count;
};

// console.log(lessThanEqualToX([2, 3, 4, 5], 0, 2, 2));


// https://www.geeksforgeeks.org/queries-probability-even-odd-number-given-ranges/

export const probabilityOfEvenOdd = (arr, start, end, check) => {
  let count = 0;
  const even = [];
  const odd = [];
  for (let i = start-1; i < end; i++) {
    count++;
    if (arr[i] % 2 === 0) {
      even.push(arr[i]);
    } else {
      odd.push(arr[i]);
    }
  }

  if (check === 0) {
    return `${even.length} / ${count}`;
  } else {
    return `${odd.length} / ${count}`;
  }
};

// console.log(probabilityOfEvenOdd([6, 5, 2, 1, 7], 1, 4, 0));


