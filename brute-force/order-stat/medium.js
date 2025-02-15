// Find k pairs with smallest sums in two arrays

export const kPairsSmallestSum = (arr1, arr2, k) => {
  const result = {};
  let sum = -1;
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      let newSum = arr1[i] + arr2[j];
      if (k > 0) {
        k--;
        result[newSum] = [arr1[i], arr2[j]];
        if (sum < newSum) {
          sum = newSum;
        }
      } else {
        if (newSum < sum) {
          delete result[sum];
          result[newSum] = [arr1[i], arr2[j]];
          sum = Math.max(...Object.keys(result))
        }
      }
    }
  }
  return Object.values(result);
};

// console.log(
//   kPairsSmallestSum(
//     [1, 7, 11],
//     [2, 4, 16],
//     3
//   )
// );


// https://www.geeksforgeeks.org/maximum-sum-such-that-no-two-elements-are-adjacent/

export const sticklerThief = (arr, n) => {
  // Start loop from pos 1
  // Add arr[i] and exclude which is max of one less than prev two positions. 
  // i.e max(arr[i-2], arr[i]-3);
  // Calculate exclude before nex iteration

  let excluded = 0;
  let included = arr[0];

  for (let i = 1; i < n; i++) {
    let prevIncluded = included;
    included = arr[i] + excluded;
    excluded = prevIncluded > excluded ? prevIncluded : excluded;
  }

  return included > excluded ? included : excluded;
};

// console.log(sticklerThief([5, 10, 100, 10, 5], 5));
// console.log(sticklerThief([5, 110, 100, 10, 5], 5));


// https://www.geeksforgeeks.org/count-strictly-increasing-subarrays/

export const countIncreasingSubArray = (arr, n) => {
  let count = 0;
  for (let i = 0; i < n-1; i++) {
    for (let j = i; j < n; j++) {
      if (arr[j] < arr[j+1]) {
        count++;
      } else {
        break;
      }
    }
  }
  return count;
};

// console.log(countIncreasingSubArray([1, 2, 3, 4], 4));


// https://www.geeksforgeeks.org/given-two-sorted-arrays-number-x-find-pair-whose-sum-closest-x/

export const closestSumToX = (arr1, arr2, x) => {
  let res_l; let res_r;
  let diff = Number.MAX_VALUE;
  let left = 0;
  let right = arr2.length - 1;

  // Start from left side of ar1[] and
  // right side of ar2[] 

  while (left < arr1.length && right > 0) {
    let sum = Math.abs(arr1[left] + arr2[right] - x);

    // If this sum formed by this pair is closer to
    // x than the previously
    // found closest, then update
    // res_l, res_r and diff
    
    if (sum < diff) {
      res_l = arr1[left];
      res_r = arr2[right];
      diff = sum;
    }

    // If sum of this pair is more than x,
    // move to smaller side

    if (arr1[left] + arr2[right] > x) {
      right--;
    } else {    // move to the greater side
      left++;
    }
  }
  return [res_l, res_r];
};

// arrays should be sorted
// console.log(closestSumToX([1, 4, 5, 7], [10, 20, 30, 40], 32));


