// https://www.geeksforgeeks.org/largest-sum-contiguous-subarray/

export const maxSum_SubArray = (arr, n) => {

  // calculate sum = sum + arr[i];
  // if sum > prev_sum then update prev_sum
  // if sum <= 0 then sum will be 0 because it doesn't make sense to keep sum of subArray
  // having sum 0 or negative

  let maxSumSoFar = Number.MIN_VALUE;
  let sum = 0;

  for (let i = 0; i < n; i++) {
    sum = sum + arr[i];

    if (sum > maxSumSoFar) {
      maxSumSoFar = sum
    }
    if (sum <=0 ) {
      sum = 0;
    }
  }

  return maxSumSoFar;
};

// console.log(maxSum_SubArray([-2, -3, 4, -1, -2, 1, 5, -3], 8));


// https://www.geeksforgeeks.org/longest-span-sum-two-binary-arrays/

export const longestSpanTwoArrays_SameSum = (arr1, arr2) => {
  let sum1 = 0; let sum2 = 0;
  let span = Number.MIN_VALUE; let tempSpan;

  for (let i = 0; i < arr1.length; i++) {
    
    for (let j = i; j < arr1.length; j++) {

      sum1 = sum1 + arr1[j];
      sum2 = sum2 + arr2[j];

      if (sum1 === sum2) {
        tempSpan = (j - i) + 1;
        if (tempSpan > span) {
          span = tempSpan;
        }
      }
    }

    sum1 = 0; sum2 = 0;
  }

  return span;
};

// console.log(longestSpanTwoArrays_SameSum(
//   [0, 1, 0, 1, 1, 1, 1], 
//   [1, 1, 1, 1, 1, 0, 1]
// ));


// https://www.geeksforgeeks.org/count-minimum-steps-get-given-desired-array/

export const minimumSteps = (arr) => {

  /**
    * Idea is to make all elements in the target array 0

    * Take the target array first. 

    * Initialize result as 0. 

    * If all are even, divide all elements by 2 
    * and increment result by 1. 

    * Find all odd elements, make them even by 
      reducing them by 1. and for every reduction,
      increment result by 1.

    * Finally, we get all zeros in target array.
  */
  let result = 0;

  while (true) {
    let zeroCount = 0;
    let evenCount = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 0) {
        zeroCount++;
      }
      if (arr[i] % 2 === 0) {
        evenCount++;
      } else {
        arr[i]--;
        result++;
      }
    }

    if (zeroCount === arr.length) {
      break;
    }

    if (evenCount === arr.length) {
      for (let i = 0; i < arr.length; i++) {
        arr[i] = Math.floor(arr[i] / 2);
      }
      result++;
    }
  }
  
  return result;
};

// console.log(minimumSteps([2, 3]));


// https://www.geeksforgeeks.org/find-minimum-number-of-merge-operations-to-make-an-array-palindrome/

export const minOperationsToMakePalindrom = (arr) => {
  let flag = true;
  let steps = 0;
  while (true) {
    let end = arr.length - 1;
    for (let i = 0; i < arr.length / 2; i++) {
      if (arr[i] !== arr[end]) {
        flag = false;
        arr[i] = arr[i] + arr[i+1];
        arr.splice(i+1, 1);
        steps++;
        break;
      }
      end--;
    }

    if (flag) {
      return steps;
    }
    flag = true;
  }
};

// console.log(minOperationsToMakePalindrom([11, 14, 15, 99]));


