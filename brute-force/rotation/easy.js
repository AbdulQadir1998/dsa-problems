// https://www.geeksforgeeks.org/c-program-cyclically-rotate-array-one/

export const cyclicallyRotateByOne = (arr,n) => {
  //code here
  // Its also a right rotation:- 
  // input = [1,2,3,4,5], output = [5,1,2,3,4]

  let temp;
  for (let i=n-1; i>0; i--) {
      temp = arr[i];
      arr[i] = arr[i-1];
      arr[i-1] = temp;
  }
  return arr;
};

// https://www.geeksforgeeks.org/quickly-find-multiple-left-rotations-of-an-array/

export const leftRotateByK = (arr,k,n) => {
  //code here
  // k: how many rotations, n: size of array

  const response = [];
  for (let i = k; i < k + n; i++) {
      response.push(arr[i%n]);
  }
  return response;
};

// https://www.geeksforgeeks.org/javascript-program-to-find-mth-element-after-k-right-rotations-of-an-array/

export const rightRotateByK = (arr,k,n) => {
  //code here
  // k: how many rotations, n: size of array
  // input = [1,2,3,4,5], k = 7, n = 5, output = [4,5,1,2,3]

  let temp;
  let j = 0;
  while (j < k) {
    for (let i=n-1; i>0; i--) {
      temp = arr[i];
      arr[i] = arr[i-1];
      arr[i-1] = temp;
    }
    j = j + 1;
  }
  return arr; // return arr[m+1];
};

