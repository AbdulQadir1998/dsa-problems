// https://www.geeksforgeeks.org/two-pointers-technique/
// https://www.geeksforgeeks.org/maximum-triplet-sum-array/
// https://www.geeksforgeeks.org/roof-top/
// https://www.geeksforgeeks.org/number-among-n-numbers-numbers-divisible/

// https://www.geeksforgeeks.org/find-common-elements-three-sorted-arrays/

export const commonThreeElements = (arr1 = [], arr2 = [], arr3 = []) => {
  const res = [];

  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i]) && arr3.includes(arr1[i])) {
      res.push(arr1[i]);
    }
  }

  return res;
};

// console.log(commonThreeElements(
//   [1, 5, 10, 20, 40, 80],
//   [6, 7, 20, 80, 100],
//   [3, 4, 10, 20, 30, 70, 80, 120]
// ));


// https://www.geeksforgeeks.org/leaders-in-an-array/

export const leadersInArray = (arr = []) => {

  let maxFromRight = arr[arr.length-1]
  const res = [];
  res.push(maxFromRight);

  for (let i = arr.length - 2; i >= 0; i--) {
    if (arr[i] > maxFromRight) {
      res.push(arr[i]);
      maxFromRight = arr[i];
    }
  }

  return res;
};

// console.log(leadersInArray([16, 17, 4, 3, 5, 2]));


// https://www.geeksforgeeks.org/check-for-majority-element-in-a-sorted-array/

export const majorityElement = (arr = [], x) => {
  const midLen = Math.floor(arr.length/2);

  if (arr[midLen] === x) {
    return true;
  } else {
    return false;
  }
};

// console.log(majorityElement([1, 2, 3, 3, 3, 3, 10], 3));


// https://www.geeksforgeeks.org/given-sorted-array-number-x-find-pair-array-whose-sum-closest-x/

export const pairSumClosestTo_X = (arr = [], x) => {

  let l = 0, r = arr.length - 1;
  let diff = Number.MAX_VALUE;
  let first, second;

  while (l < r) {
    if (Math.abs(arr[l] + arr[r] - x) < diff) {
      diff = Math.abs(arr[l] + arr[r] - x);
      first = arr[l];
      second = arr[r];
    }

    else if (arr[l] + arr[r] > x) {
      r--;
    }
    else {
      l++;
    }
  }

  return [first, second];
};

// console.log(pairSumClosestTo_X([10, 22, 28, 29, 30, 40], 54));


// https://www.geeksforgeeks.org/maximum-sum-increasing-order-elements-n-arrays/

export const maximumSum = (arr = []) => {

  let sum = 0;
  let count = arr.length - 1;

  let max = Math.max(...arr[arr.length - 1]);

  sum = sum + max;

  for (let i = arr.length - 2; i >= 0; i--) {

    let temp = arr[i];
    let previousMax = Number.MIN_VALUE;

    for (let j = 0; j < temp.length; j++) {

      if (temp[j] < max && temp[j] > previousMax) {
        previousMax = temp[j];
      }
    }

    if (previousMax !== Number.MIN_VALUE) {
      sum = sum + previousMax;
      max = previousMax;
      count--;
    }
  }

  if (count === 0) {
    return sum;
  } else {
    return 0;
  }
};

// console.log(maximumSum([
//   [1, 7, 3, 4],
//   [4, 2, 5, 1],
//   [9, 5, 1, 8]
// ]));


// https://www.geeksforgeeks.org/closest-numbers-list-unsorted-integers/

export const closestNumbers = (arr = []) => {

  arr.sort((a, b) => a-b);

  let minDiff = Number.MAX_VALUE;

  for (let i = 0; i < arr.length - 1; i++) {

    if (arr[i + 1] - arr[i] < minDiff) {
      minDiff = arr[i + 1] - arr[i];
    }
  }

  const res = [];

  for (let i = 0; i < arr.length - 1; i++) {

    if (arr[i+1] - arr[i] === minDiff) {
      res.push([arr[i], arr[i+1]]);
    }
  }

  return res;
};

// console.log(closestNumbers([5, 4, 3, 2]));


// https://www.geeksforgeeks.org/repeatedly-search-element-doubling-every-successful-search/

export const doublingElement = (arr = [], x) => {

  arr.sort((a, b) => a-b);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === x) {
      x = x * 2;
    }
  }

  return x;
};

// console.log(doublingElement([1, 6, 5, 2, 12], 6));


// https://www.geeksforgeeks.org/maximum-sum-of-pairwise-product-in-an-array-with-negative-allowed/

export const maxSumNegativeAllowed = (arr = []) => {

  arr.sort((a, b) => a > b ? 1 : -1);

  let sum = 0;
  let i;

  for (i = 0; i < arr.length; i+=2) {
    if (arr[i] >= 0 || arr[i+1] >= 0 ) {
      break;
    }
    else {
      sum = sum + arr[i] * arr[i+1];
    }
  }

  let j;

  for (j = arr.length - 1; j >= 0; j-=2) {
    if (arr[j] <= 0 || arr[j-1] <= 0 ) {
      break;
    }
    else {
      sum = sum + arr[j] * arr[j-1];
    }
  }


  if (j-i+1 === 3) {
    sum = sum + (arr[i] * arr[i+1]) + arr[j];
  }
  if (j-i+1 === 2) {
    sum = sum + (arr[i] * arr[j])
  }
  
  return sum;
 
};

// console.log(maxSumNegativeAllowed([-7, -4, -1, 0, 4, 5, 9]));

