// https://www.geeksforgeeks.org/mean-range-array/

export const meanOfRanges = (arr, ranges) => {
  let start; let end;
  const means = [];
  let sum = 0;
  let count = 0;
  for (const range of ranges) {
    start = range[0]; end = range[1];

    for (let i = start-1; i <= end; i++) {
      sum = sum + arr[i];
      count++;
    }
    means.push(Math.round(sum/count)); // formula of mean
    sum = 0;
    count = 0;
  }

  return means;
};

// console.log(meanOfRanges(
//   [1, 2, 3, 4, 5],
//   [[1,2], [1,3], [1,4]]
// ));


// https://www.geeksforgeeks.org/queries-number-distinct-elements-subarray/

export const distinctElements = (arr, start, end) => {
  let s = new Set();

  for (let i = start; i <= end; i++) {
    if (!s.has(arr[i])) {
      s.add(arr[i]);
    }
  }
  return s.size;
};

// console.log(distinctElements([1, 1, 2, 1, 3], 2, 4));


// https://www.geeksforgeeks.org/total-numbers-no-repeated-digits-range/

export const noRepeatedDigitInRange = (start, end) => {

  const hasRepeatedDigit = (numb) => {
    let s = new Set();
    let digit;
    while (numb !== 0) {
      digit = numb % 10;
      
      if (s.has(digit)) {
        return true;
      } else {
        s.add(digit);
      }
      numb = Math.floor(numb / 10);
    }
    return false;
  }

  let count = 0;

  for (let i = start; i <= end; i++) {
    if (!hasRepeatedDigit(i)) {
      count++;
    }
  }

  return count;
};

// console.log(noRepeatedDigitInRange(1, 100));


// https://www.geeksforgeeks.org/count-elements-which-divide-all-numbers-in-range-l-r/

export const countElements = (arr, start, end) => {
  let divisor; let count = 0;
  let flag = true;

  for ( let i = start-1; i < end; i++) {

    divisor = arr[i];

    for (let j = start-1; j< end; j++) {
      if (arr[j] % divisor !== 0) {
        flag = false
        break;
      }
    }

    if (!flag) {
      flag = true;
    } else {
      count++;
    }
  }

  return count;
};

// console.log(countElements([3, 4, 2, 2, 4, 6], 2, 6));


