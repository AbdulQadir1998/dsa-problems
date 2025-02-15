// https://www.geeksforgeeks.org/find-the-minimum-distance-between-two-numbers/

export const minDistTwoNumbers = (arr, x, y) => {
  let distance = Number.MAX_VALUE;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== x && arr[i] !== y) {
      continue;
    } else {
      for (let j = i+1; j < arr.length; j++) {

        if ((arr[i] === x && arr[j] === y) || (arr[i] === y && arr[j] === x)) {

          if ( Math.abs(j-i) < distance ) {
            distance = Math.abs(j-i) 
          }
        }
      }
    }
  }

  return distance;

};

// console.log(minDistTwoNumbers([3, 5, 4, 2, 6, 5, 6, 6, 5, 4, 8, 3], 3, 6));


export const getAllSubArrays = (arr, n) => {
  const subArrays = []
  for (let i = 0; i < n; i++) {

    for  (let j = i+1; j < n; j++) {
      subArrays.push([...arr.slice(i, j+1)]);
    }
  }

  return subArrays;
};

// console.log(getAllSubArrays([1,2,3,4,5,6,7], 7));


// https://www.geeksforgeeks.org/find-subarray-least-average/

export const subArrayLeastAvg = (arr, k) => {

  let leastAvg = Number.MAX_VALUE; let sum = 0; let count = 0;
  let i_ans; let j_ans;

  for (let i = 0; i < (arr.length-k)+1; i++) {

    for (let j = i; j < i+k; j++) {
      sum = sum + arr[j];
      count++;
    }
    if (Math.round(sum/count) < leastAvg) {
      leastAvg = Math.round(sum/count);
      i_ans = i;
      j_ans = i+(k-1);
    }
    sum = 0;
    count = 0;
  }

  return [i_ans, j_ans];
};

// console.log(subArrayLeastAvg([3, 7, 90, 20, 10, 50, 40], 3));


// https://www.geeksforgeeks.org/minimum-length-subarray-sum-greater-given-value/

export const small_SubArraySum_Greater_X = (arr, x) => {

  let minLen = Number.MAX_VALUE; let sum = 0; let tempLen = 0;

  for (let i = 0; i < arr.length; i++) {

    for (let j = i; j < arr.length; j++) {
      sum = sum + arr[j];
      if (sum > x) {
        tempLen = (j - i) + 1;
        if (tempLen < minLen) {
          minLen = tempLen;
        }
      }
    }
    sum = 0;
  }

  return minLen;
}

// console.log(small_SubArraySum_Greater_X([1, 11, 100, 1, 0, 200, 3, 2, 1, 250], 280));


// https://www.geeksforgeeks.org/size-subarray-maximum-sum/

export const subArrayWithMaxSum = (arr) => {
  let sum = 0; let max_sum = Number.MIN_VALUE;
  let start = 0; let len = 0;

  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];

    if (sum > max_sum) {
      max_sum = sum;
      len = i - start;
    }
    if (sum <= 0) {
      sum = 0;
      start = i;
    }
  }

  return len ? len : len+1;
};

// console.log(subArrayWithMaxSum([-2, -3, 4, -1, -2, 1, 5, -3]));


