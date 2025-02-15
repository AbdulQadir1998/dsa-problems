// https://www.geeksforgeeks.org/pairs-difference-less-k/

export const differenceLessThan_K = (arr = [], k) => {

  arr.sort((a, b) => a > b ? 1: -1);

  let count = 0;

  for (let i = 0; i < arr.length - 1; i++) {

    let l = i;
    let r = arr.length - 1;

    while (l < r) {
      if (Math.abs(arr[l] - arr[r]) < k) {
        count = count + (r - l);
        l++
      } 
      else {
        r--;
      }
    }
  }

  return count;
};

// console.log(differenceLessThan_K([1, 10, 4, 2], 3));


// https://www.geeksforgeeks.org/program-check-array-sorted-not-iterative-recursive/

export const checkArraySorted = (arr = []) => {

  let count = 0;

  while (arr[count] <= arr[count+1]) {
    count++;
  }

  if (count === arr.length - 1) {
    return 'YES';
  } else {
    return "NO";
  }
};

// console.log(checkArraySorted([20, 21, 45, 89, 89, 90]));


// https://www.geeksforgeeks.org/sort-elements-by-frequency/

export const sortByFrequency = (arr = []) => {
  const frequency = {};

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] in frequency) {
      frequency[arr[i]] = frequency[arr[i]] + 1
    } else {
      frequency[arr[i]] = 1
    }
  }

  const sortedArray = Object.entries(frequency).sort((a, b) => {
    if (a[1] > b[1]) {
      return -1;
    } else {
      return 1;
    }
  });

  const res = [];

  sortedArray.forEach(([key, value]) => {
    while (value > 0) {
      res.push(+key);
      value--;
    }
  });

  return res;
};

// console.log(sortByFrequency([2, 5, 2, 8, 5, 6, 8, 8]));


// https://www.geeksforgeeks.org/merging-two-unsorted-arrays-sorted-order/

export const mergeTwoUnSortedArray = (arr1 = [], arr2 = []) => {

  const res = [];
  const arr = [...arr1, ...arr2];

  for (let i = 0; i < arr.length; i++) {

    if (res.length === 0) {

      res.push(arr[i]);

    } else {

      let j = 0;

      while (j < res.length) {
        if (arr[i] <= res[j]) {
          break;
        }
        j++;
      }

      res.splice(j, 0, arr[i]);
    }
  }

  return res;
};

// console.log(mergeTwoUnSortedArray([10, 5, 15], [20, 3, 2]));


// https://www.geeksforgeeks.org/two-elements-whose-sum-is-closest-to-zero/

export const sumClosestToZero = (arr = []) => {

  arr.sort((a, b) => a > b ? 1 : -1);

  let sum;

  let l = 0;
  let r = arr.length - 1;
  let minSum = Number.MAX_VALUE;
  let minL, minR;

  while (l < r) {
    sum = arr[l] + arr[r];
    if (Math.abs(sum) < Math.abs(minSum)) {
      minSum = sum;
      minL = arr[l];
      minR = arr[r];
    }
    if (sum < 0) {
      l++;
    } 
    else {
      r--;
    }

  }

  return [minL, minR];
};

// console.log(sumClosestToZero([1, 60, -10, 70, -80, 85]));


// https://www.geeksforgeeks.org/minimum-swaps-required-sort-binary-array/

export const swapToSortBinaryArray = (arr = []) => {

  let count = 0;

  for (let i = arr.length - 1; i >=0; i--) {

    if (arr[i] === 0) {

      for (let j = i; j >=0; j--) {
        if (arr[j] === 1) {
          count++;
        }
      }
    }
  }

  return count;
};

// console.log(swapToSortBinaryArray([0, 0, 1, 0, 1, 0, 1, 1]));


// https://www.geeksforgeeks.org/check-interval-completely-overlaps/

export const overlapingIntervals = (arr = []) => {
  const sortedArray = arr.sort((a, b) => {
    if (a[0] >= b[0]) {
      return 1;
    } else {
      return -1;
    }
  });


  for (let i = 0; i < sortedArray.length - 1; i++) {
    if (sortedArray[i][0] ===  sortedArray[i+1][0] 
        && sortedArray[i][1] <=  sortedArray[i+1][1]) {

      return true;
    }
  }

  return false;
};

// console.log(overlapingIntervals([[1, 3], [1, 7], [4, 8], [2, 5]]));


// https://www.geeksforgeeks.org/making-elements-of-two-arrays-same-with-minimum-incrementdecrement/

export const makeELementsSame = (arr1 = [], arr2 = []) => {

  arr1.sort((a, b) => a > b ? 1 : -1);
  arr2.sort((a, b) => a > b ? 1 : -1);

  let count = 0;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] < arr2[i] || arr1[i] > arr2[i]) {
      count = count + Math.abs(arr1[i] - arr2[i]);
    }
  }

  return count;
};

// console.log(makeELementsSame([1, 1, 2, 5], [1, 1, 1, 2]));

