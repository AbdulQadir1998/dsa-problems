// https://www.geeksforgeeks.org/find-whether-subarray-form-mountain-not/

export const checkMountain = (arr, start, end) => {
  let max;
  let maxIndex;
  const numbers = arr.slice(start, end);
  max = Math.max(...numbers);
  maxIndex = numbers.indexOf(max);
  let flag = true;

  for (let i = maxIndex + 1; i <= end; i++) {
    if (max < arr[i]) {
      flag = false;
      break;
    }
  }

  if (flag) {
    for (let i = maxIndex - 1; i >= start; i--) {
      if (max < arr[i]) {
        flag = false;
        break;
      }
    }
  }
  if (!flag) {
    return 'NO'
  } else {
    return 'YES'
  }
};

// console.log(checkMountain([2, 3, 2, 4, 4, 6, 3, 2], 2, 7));


