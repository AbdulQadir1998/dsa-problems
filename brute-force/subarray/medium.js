// https://www.geeksforgeeks.org/length-of-longest-subarray-whose-sum-is-not-divisible-by-integer-k/

export const subArraySum_DivisibleBy_K = (arr, k) => {

  let len = 0;
  let sum = 0;
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    sum = 0;
    count = 0;
    for (let j = i; j < arr.length; j++) {
      sum = sum + arr[j];

      if (sum % k !== 0) {
        count++
        len = Math.max(len, count);
      } else {
        count++;
      }
    }
  }

  return len > 0 ? len : -1;
};

// console.log(subArraySum_DivisibleBy_K([8, 4, 3, 1, 5, 9, 2], 2));


// https://www.geeksforgeeks.org/split-array-into-two-subarrays-such-that-difference-of-their-sum-is-minimum/

export const splitArray = (arr) => {
  let leftSum = 0;
  let rightSum = 0;
  let diff = Number.MAX_VALUE;

  for (let i = 0; i < arr.length; i++) {
    leftSum = leftSum + arr[i];
  }

  for (let i = arr.length - 1; i > 0; i--) {
    rightSum = rightSum + arr[i];
    leftSum = leftSum - arr[i];

    if (Math.abs(leftSum - rightSum) < diff) {
      diff = Math.abs(leftSum - rightSum);
    }
  }

  return diff;
};

// console.log(splitArray([7, 9, 5, 10]));


// https://www.geeksforgeeks.org/longest-subarray-consisting-of-unique-elements-from-an-array/

export const subArrayWithUniqueElements = (arr) => {
  let uniques = {};
  let len = 0;

  for (let i = 0; i < arr.length; i++) {
    uniques = {};

    for (let j = i; j < arr.length; j++) {

      if (arr[j] in uniques) {
        len = Math.max(len, j - i);
        break;
      } else {
        uniques[arr[j]] = j;
      }
    }
  }

  return len;
};

// console.log(subArrayWithUniqueElements(
//   [1, 2, 4, 4, 5, 6, 7, 8, 3, 4, 5, 3, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4]
// ));


// https://www.geeksforgeeks.org/length-of-longest-subarray-having-frequency-of-every-element-equal-to-k/

export const longestFrequencyEqualTo_K = (arr, k) => {
  let uniques = {};
  let sum = 0;
  let expectedSum = 0;
  let len = 0;

  for (let i = 0; i < arr.length; i++) {

    uniques = {};
    sum = 0;
    expectedSum = 0;

    for (let j = i; j < arr.length; j++) {

      sum = sum + arr[j];

      if (arr[j] in uniques) {
        
        if (sum === expectedSum) {
          len = Math.max(len, j - i + 1);
        }
      } else {
        uniques[arr[j]] = j;
        expectedSum = expectedSum + (arr[j] * k);
      }
    }
  }

  return len;
};

// console.log(longestFrequencyEqualTo_K([3, 5, 2, 2, 4, 6, 4, 6, 5], 2));


// https://www.geeksforgeeks.org/length-of-smallest-subarray-to-be-removed-such-that-the-remaining-array-is-sorted/

export const smallestSubArrayToBeRemoved = (arr) => {

  let left  = 0;
  let right = arr.length - 1;

  while (left < arr.length && arr[left] >= arr[left+1]) {
    left++;
  }
  if (left === arr.length - 1) {
    return arr.length - 1;
  }

  left  = 0;
  while (left < arr.length && arr[left] <= arr[left+1]) {
    left++;
  }
  if (left === arr.length - 1) {
    return 0;
  }
  
  while (right > left && arr[right] >= arr[right - 1]) {
    right--;
  }
  if (right === 0) {
    return 0;
  }

  let minLen = Math.min(arr.length - 1 - left, right);

  let i = 0; let j = right;

  while (i <= left && j < arr.length) {

    if (arr[i] <= arr[j]) {
      minLen = Math.min(minLen, j - i - 1);
      i++;
    } else {
      j++;
    }
  }

  return minLen;
};

// console.log(smallestSubArrayToBeRemoved([1, 2, 3, 10, 4, 2, 3, 5]));

