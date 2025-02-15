// https://www.geeksforgeeks.org/longest-subsequence-equal-numbers-0-1/

export const EqualZerosAndOnes = (arr) => {
  let zeroCount = 0;
  let onesCount = 0;

  for (let i = 0; i < arr.length; i++) {

    if (arr[i] === 0) {
      zeroCount++;
    } else if (arr[i] === 1) {
      onesCount++;
    }
  }

  let len = Math.min(zeroCount, onesCount) * 2;

  return len;

};

// console.log(EqualZerosAndOnes([1, 0, 0, 1, 0, 0, 0, 1]));


// https://www.geeksforgeeks.org/length-of-smallest-subsequence-such-that-sum-of-elements-is-greater-than-equal-to-k/

export const sumGreaterThanEqualTo_K = (arr, k) => {
  let sum = 0;
  let count = 0;

  arr.sort((a, b) => b - a);

  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
    count++;
    if (sum >= k) {
      break;
    }
  }

  return count;
};

// console.log(sumGreaterThanEqualTo_K([2, 3, 1, 5, 6, 3, 7, 9, 14, 10, 2, 5], 35));


// https://www.geeksforgeeks.org/smallest-occurring-element-in-each-subsequence/

export const smallestOccuringInEachSubSeq = (arr) => {
  arr.sort((a, b) => a - b);
  let res = [];

  for (let i = 0; i < arr.length; i++) {
    res.push(Math.pow(2, (arr.length - 1 - i) ))
  }

  return res;
};

// console.log(smallestOccuringInEachSubSeq([1, 2, 3]));


// https://www.geeksforgeeks.org/longest-subsequence-of-even-numbers-in-an-array/

export const subSeqOfEvenNumbers = (arr) => {
  let evenCount = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenCount++;
    }
  }

  return evenCount;
};

// console.log(subSeqOfEvenNumbers([6, 4, 10, 13, 9, 25]));

// https://www.geeksforgeeks.org/count-of-possible-subarrays-and-subsequences-using-given-length-of-array/

export const possibleSubArrayAndSubSeq = (N) => {
  let subArrayCount = N * (N+1) / 2;
  let subSeqCount = Math.pow(2, N);

  return [subArrayCount, subSeqCount];
};

// console.log(possibleSubArrayAndSubSeq(5));


// https://www.geeksforgeeks.org/longest-subsequence-where-index-of-next-element-is-arrarri-i/

export const indexOfNextElement = (arr) => {
  let index;
  let temp = [];
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    temp.push(arr[i]);
    index = arr[i] + i;
    while (index < arr.length) {
      temp.push(arr[index]);
      index = arr[index] + index;
    }

    if (temp.length > result.length) {
      result = [...temp];
    }
    temp = [];
  }

  return result;
};

// console.log(indexOfNextElement([1, 6, 3, 1, 12, 1, 4]));

