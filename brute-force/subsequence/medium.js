// https://www.geeksforgeeks.org/program-to-check-if-an-array-is-bitonic-or-not/

export const checkBitonic = (arr) => {
  let i,j;

  for ( i = 0; i < arr.length - 1; i++) {
    if (arr[i] >= arr[i+1]) {
      break;
    }
  }

  if (i === arr.length - 1) return 'no';

  for ( j = i+1; j < arr.length - 1; j++) {
    if (arr[j] <= arr[j+1]) {
      break;
    }
  }

  return j === arr.length - 1? 'yes' : 'no';
};

// console.log(checkBitonic([5, 6, 7, 8, 9, 10, 1, 2, 11]));


// https://www.geeksforgeeks.org/longest-consecutive-subsequence/

export const longestConseqSubSeq = (arr = []) => {
  let count = 1;
  let result = 0;

  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i+1] - 1) {
      count++
    } else {
      result = Math.max(result, count);
      count = 1;
    }
  }

  result = Math.max(result, count);

  return result;
};

// console.log(longestConseqSubSeq([1, 9, 3, 10, 4, 20, 2]));


// https://www.geeksforgeeks.org/sum-of-minimum-element-of-all-sub-sequences-of-a-sorted-array/

export const minEleSumOfAllSubSeq = (arr) => {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i] * Math.pow(2, arr.length - 1 - i);
  }

  return sum;
};

// console.log(minEleSumOfAllSubSeq([1, 2, 4, 5]));


// https://www.geeksforgeeks.org/minimum-cost-of-choosing-3-increasing-elements-in-an-array-of-size-n/

export const costThreeIncreasingElements = (arr1, cost) => {
  let sum = 0;
  let minCost = Number.MAX_VALUE;

  for (let i = 0; i < arr1.length; i++) {

    for (let j = i+1; j < arr1.length; j++) {

      for (let k = j+1; k < arr1.length; k++) {

        if (arr1[i] < arr1[j] && arr1[j] < arr1[k]) {
          sum = sum + cost[i] + cost[j] + cost[k];
          
          minCost = Math.min(minCost, sum);
        }
        sum = 0;
      }
      sum = 0;
    }
    sum = 0;
  }

  return minCost;
};

// console.log(costThreeIncreasingElements([2, 4, 5, 4, 10], [40, 30, 20, 10, 40]));

