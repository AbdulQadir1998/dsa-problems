// https://www.geeksforgeeks.org/kth-smallestlargest-element-unsorted-array/

export const KthSmallest = (arr, k) => {
  arr.sort((a,b) => a - b);
  const set = new Set(arr);
  const values = set.values();
  
  while (k > 1) {
    values.next();
    k--;
  }
  return values.next().value;
};

// console.log(KthSmallest([7, 10, 4, 3, 20, 15], 4));


// https://www.geeksforgeeks.org/find-the-largest-three-elements-in-an-array/


// https://www.geeksforgeeks.org/find-elements-array-least-two-greater-elements/

export const findElementsHaveTwoGreater = (arr, n) => {
  let frist = Number.MIN_VALUE; 
  let second = Number.MIN_VALUE;
  const result = [];

  for (let i = 0; i < n; i++) {
    if (arr[i] > frist) {
      second = frist;
      frist = arr[i];
    } 
    else if (arr[i] > second && arr[i] !== frist) {
      second = arr[i];
    }
  }

  for (let i = 0; i < n; i++) {
    if (arr[i] < second) {
      result.push(arr[i]);
    }
  }

  return result;
};

// console.log(findElementsHaveTwoGreater([7, -2, 3, 4, 9, -1], 6));


