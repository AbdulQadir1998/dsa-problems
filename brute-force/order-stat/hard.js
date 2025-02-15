// https://www.geeksforgeeks.org/sliding-window-maximum-maximum-of-all-subarrays-of-size-k/

export const slidingWindowMax = (arr, k) => {
  let max;;
  let res = [];
  for (let i = 0; i < (arr.length - k) + 1; i++) {
    max = Number.MIN_VALUE;

    for (let j = i; j < i+k; j++) {
      if (arr[j] > max) {
        max = arr[j];
      }
    }
    res.push(max);
  }

  return res;
};

// console.log(slidingWindowMax([1, 2, 3, 1, 4, 5, 2, 3, 6], 3));



// https://www.geeksforgeeks.org/find-zeroes-to-be-flipped-so-that-number-of-consecutive-1s-is-maximized/

export const flip_M_0s_ToGetMaxConsecutive_1s = (arr, size, m) => {
  let flips = [];
  let subArrayLen = 0;
  let maxLen = 0;
  let result = [];

  for (let i = 0; i < size-1; i++) {
    
    for (let j = i; j < size; j++) {

      if ((arr[j] === 0 || j === size-1) && flips.length === m) {
        subArrayLen = j - i;
        j === size-1 ? subArrayLen++ : subArrayLen;
        break;
      }
      else if (arr[j] === 0) {
        flips.push(j);
      }
    }

    if (subArrayLen > maxLen) {
      maxLen = subArrayLen;
      result = JSON.parse(JSON.stringify(flips));
    }
    flips = [];
  }

  return result;
};

// console.log(flip_M_0s_ToGetMaxConsecutive_1s([1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1], 11, 2));


