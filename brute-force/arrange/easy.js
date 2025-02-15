// https://www.geeksforgeeks.org/move-zeroes-end-array/

export const moveZerosToEnd = (arr, n) => {
  // Logic is to move the non-zero elements towards right

  for (let i = 1; i < n; i++) {
    if (arr[i] !== 0) {
      let index = i;
      while (arr[index - 1] === 0) {
        let temp = arr[index];
        arr[index] = arr[index - 1];
        arr[index - 1] = temp;
        index --;
      }
    }
  }
  return arr;
};

// console.log(moveZerosToEnd([0,2,0,0,5,0,4,0], 8));


//https://www.geeksforgeeks.org/rearrange-array-such-that-even-positioned-are-greater-than-odd/

export const reArrangePositioned = (arr, n) => {
  // if a > b, b > c then a > c

  for (let i = 1; i < n; i++) {
    if ((i+1) % 2 === 0) {
      if (arr[i] < arr[i-1]) {
        let temp = arr[i];
        arr[i] = arr[i-1];
        arr[i-1] = temp;
      }
    } else {
      if (arr[i] > arr[i-1]) {
        let temp = arr[i];
        arr[i] = arr[i-1];
        arr[i-1] = temp;
      }
    }
  }
  return arr;
};

// console.log(reArrangePositioned([ 1, 3, 2, 2, 5 ], 5));


// https://www.geeksforgeeks.org/rearrange-array-order-smallest-largest-2nd-smallest-2nd-largest/

export const reArrangeSmallLargeOrder = (arr, n) => {
  const response = [];
  arr.sort();
  let length = n - 1;
  for (let i = 0; i < n / 2; i++) {
    if (arr[i] === arr[length]) {
      response.push(arr[i]);
      break;
    }
    response.push(arr[i]);
    response.push(arr[length]);
    length--;
  }
  return response;
};

// console.log(reArrangeSmallLargeOrder([5, 8, 1, 4, 2, 9, 3, 7, 6], 9));


// https://www.geeksforgeeks.org/rearrange-array-even-index-elements-smaller-odd-index-elements-greater/

// This program is inverse of reArrangePositioned();


// https://www.geeksforgeeks.org/rearrange-array-maximum-minimum-form/

// This program is inverse of reArrangeSmallLargeOrder();


// https://www.geeksforgeeks.org/replace-every-element-with-the-greatest-on-right-side/

export const nextGreatest = (arr, n) => {
  for (let i = 0; i < n-1 ; i++) {
    for (let j = i + 1; j < n; j++) {
      if (arr[i] < arr[j]) {
        arr[i] = arr[j];
        break;
      }
    }
  }
  return arr;
};

// console.log(nextGreatest([16, 17, 4, 3, 5, 2], 6));


