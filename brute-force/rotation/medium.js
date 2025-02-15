// https://www.geeksforgeeks.org/maximum-sum-iarri-among-rotations-given-array/

export const maxSumOfAllLeftRotations = (arr, n) => {
  //your code here
  // sum = sum + (i * arr[i]);

  let max = -1;
  let temp;
  let sum;
  let count = n;
  while (count > 0) {
    for (let i = 0; i < n-1; i++) {
      temp = arr[i];
      arr[i] = arr[i+1];
      arr[i+1] = temp;
    }
    sum = 0;
    for (let i = 0;i < n; i++) {
      sum = sum + (i*arr[i]);
    }
    if (sum > max) {
      max = sum;
    }
    count = count - 1;
  }
  return max;
};


// https://www.geeksforgeeks.org/reversal-algorithm-right-rotation-array/

export const rightRotateByK_ReversalAlgo = (arr, k, n) => {
  const reverseArray = (arr, start, end) => {
    let length = end;
    console.log();
    for (let i = start; i < (end/2) + 1; i++) {
      let temp = arr[i];
      arr[i] = arr[length];
      arr[length] = temp;
      length = length - 1;
    }
  }

  reverseArray(arr, 0, n-1); // [10,9,8,7,6,5,4,3,2,1]

  reverseArray(arr, 0, k-1); // [8,9,10,7,6,5,4,3,2,1]
  reverseArray(arr, k, n-1); // [8,9,10,1,2,3,4,5,6,7]

  return arr;
};

// console.log(rightRotateByK_ReversalAlgo([1,2,3,4,5,6,7,8,9,10], 3, 10));


//https://www.geeksforgeeks.org/minimum-rotations-that-have-maximum-elements-with-value-at-most-its-index/

export const bestIndex = (arr, n) => {
  let temp;
  let count = 1;
  let maxScore = -1;
  let rotationNumber = -1;
  while (count < n+1) {
    for (let i = 0; i < n-1; i++) {
      temp = arr[i];
      arr[i] = arr[i+1];
      arr[i+1] = temp;
    }
    let score = 0;
    for (let i = 0; i < n; i++) {
      if (arr[i] <= i) {
        score++;
      }
    }
    if (maxScore < score) {
      maxScore = score;
      rotationNumber = count;
    }
    count++;
  }
  return rotationNumber;
};

// console.log(bestIndex([0, 0, 2, 4, 6], 5));

