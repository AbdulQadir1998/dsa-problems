// https://www.geeksforgeeks.org/split-array-two-equal-sum-subarrays/

export const twoEqualSumSubArray = (arr) => {
  let leftSum = 0;

  for (let i = 0; i < arr.length; i++) {
    leftSum = leftSum + arr[i];
  }

  let rightSum = 0;
  let breakingIndex = -1;

  for (let i = arr.length - 1; i > 0; i--) {
    rightSum = rightSum + arr[i];
    leftSum = leftSum - arr[i];

    if (leftSum === rightSum) {
      breakingIndex = i;
      break;
    }
  }
  if (breakingIndex !== -1) {
    console.log('First');
    for (let i = 0; i < breakingIndex; i++) {
      console.log(arr[i]);
    }
    console.log('Second');
    for (let i = breakingIndex; i < arr.length; i++) {
      console.log(arr[i]);
    }
  }
  
  if (breakingIndex === -1) {
    return -1;
  }
};

// console.log(twoEqualSumSubArray([1 , 2 , 3 , 4 , 5 , 5 ]));


// https://www.geeksforgeeks.org/sort-an-array-where-a-subarray-of-a-sorted-array-is-in-reverse-order/

export const sortSubArray = (arr) => {
  let start = -1; let end = -1;

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i+1]) {
      start = i;
      break;
    }
  }

  for (let i = start; i < arr.length - 1; i++) {
    if (arr[i] < arr[i+1]) {
      end = i;
      break;
    }
  }

  for (let i = start; i < end; i++) {
    let temp = arr[i];
    arr[i] = arr[end];
    arr[end] = temp;
    end--;
  }

  return arr;

};

// console.log(sortSubArray([1, 7, 6, 5, 4, 3, 2, 8]));


// https://www.geeksforgeeks.org/count-subarrays-with-all-elements-greater-than-k/

export const subArraysElementsGreaterThan_K = (arr, k) => {
  let count = 0;
  let res = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > k) {
      count++;
    }
    else {
      res += (count) * (count + 1) / 2;
      count = 0;
    }
  }

  if (count != 0) {
    res += (count) * (count + 1) / 2;
  }
  return res;
};

// console.log(subArraysElementsGreaterThan_K([3, 4, 5, 6, 7, 2, 10, 11], 5));


// https://www.geeksforgeeks.org/check-whether-an-array-is-subarray-of-another-array/

export const checkArrayIsSubArray = (arr2, arr1) => {
  let flag = false;

  for (let i = 0; i < arr1.length; i++) {
    let index = i;
    for (let j = 0; j < arr2.length; j++) {

      if (arr1[index] !== arr2[j]) {
        flag = false;
        break;
      } else {
        index++
      }
    }

    if (flag) {
      break;
    } else {
      if ( i === arr1.length -1) {
        break;
      }
      flag = true;
    }
  }
  
  if (flag) {
    return 'yes';
  } else {
    return 'no';
  }
};

// console.log(checkArrayIsSubArray([3, 0, 5, 1], [2, 3, 0, 3, 0, 5, 1, 1, 2]));


// https://www.geeksforgeeks.org/length-of-the-longest-alternating-even-odd-subarray/

export const longestEvenOdd = (arr) => {
  let count = 1;
  let len = 1;
  for (let i = 0; i < arr.length - 1; i++) {
    if ((arr[i] + arr[i+1]) % 2 === 1) {
      count++;
    } else {
      len = Math.max(len, count);
      count = 1;
    }
  }

  return len > 1 ? len : "no"; 
};

// console.log(longestEvenOdd([1, 2, 3, 4, 5, 7, 9]));


// https://www.geeksforgeeks.org/count-of-subarrays-which-start-and-end-with-the-same-element/

export const startEndSameElement = (arr) => {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    count++;
    for (let j = i+1; j < arr.length; j++) {

      if (arr[i] === arr[j]) {
        count++;
      }
    }
  }

  return count;
};

// console.log(startEndSameElement([1, 5, 6, 1, 9, 5, 8, 10, 8, 9]));


// https://www.geeksforgeeks.org/split-array-into-k-disjoint-subarrays-such-that-sum-of-each-subarray-is-odd/

export const splitInto_K_DisjointSubArray = (arr, k) => {
  let oddCount = 0;
  let res = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1) {
      oddCount++;
    }
  }

  if (oddCount < k) {
    return "no";
  }

  if (oddCount > k && (oddCount-k) % 2 === 1) { // remember condition
    return "no";
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1) {
      res.push(i + 1);
      k--;
    }
    if (k === 0) {
      break;
    }
  }

  return res;
};

// console.log(splitInto_K_DisjointSubArray([7, 2, 11, 4, 19], 3));

