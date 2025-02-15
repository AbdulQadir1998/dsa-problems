// https://www.geeksforgeeks.org/longest-subarray-with-gcd-greater-than-1/

export const longestSubArrayWithGCD = (arr) => {
  const calculateGCD = (a, b) => {
    if (b == 0) return a;
    return calculateGCD(b, a % b);
  }

  let maxLen = 0;
  let gcd = 0;

  for (let i = 0; i < arr.length - 1; i++) {

    gcd = 0;
    for (let j = i; j < arr.length; j++) {

      gcd = calculateGCD(gcd, arr[j]);

      if (gcd > 1) maxLen = Math.max(maxLen, j - i + 1);
      else break
    }
  }

  return maxLen
};

// console.log(longestSubArrayWithGCD([410, 52, 51, 180, 222, 33, 33]));


// https://www.geeksforgeeks.org/largest-subarray-with-equal-number-of-0s-and-1s/

export const subArrayEqualZerosAndOnes = (arr) => {
  let sum = 0;
  const sums = { sum: -1 };
  let len = 0
  let maxLen = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      sum = sum + (-1);
    } else if (arr[i] === 1) {
      sum = sum + 1;
    }

    if (sum in sums) {
      let index = sums[sum];
      len = i - index;

      if (len > maxLen) {
        maxLen = len;
      }
    } else {
      sums[sum] = i;
    }
  }

  return maxLen;
};

// console.log(subArrayEqualZerosAndOnes([0,0,1,0,1,0,1,1,0,0,1,1,1]));


// https://www.geeksforgeeks.org/longest-subarray-of-an-array-which-is-a-subsequence-in-another-array/

export const subArrayIsSubsequence = (arr1, arr2) => {
  let index = Number.MIN_VALUE;
  let count = 0;
  let len = 0;
  let flag = false;

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {

      if (arr1[i] === arr2[j] && j > index) {
        index = j;
        count++;
        flag = true;
        break;
      }
    }

    if (flag) {
      len = Math.max(len, count);
    } else {
      index = arr2.indexOf(arr1[i]);
      count = 1;
    }

    flag = false;
  }

  return len;
};

// console.log(subArrayIsSubsequence(
//   [3, 2, 4, 7, 1, 5, 6, 8, 10, 9],
//   [9, 2, 4, 3, 1, 5, 6, 8, 10, 7]
// ));


// https://www.geeksforgeeks.org/longest-subarray-in-which-all-elements-are-smaller-than-k/

export const subArrayAllElementsLessthan_K = (arr, k) => {
  let len = 0;
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < k) {
      count++;
    } else {
      len = Math.max(len, count);
      count = 0
    }
  }

  return len;
};

// console.log(subArrayAllElementsLessthan_K([1, 8, 3, 5, 2, 2, 1, 13], 6));


// https://www.geeksforgeeks.org/length-of-smallest-subarray-to-be-removed-to-make-sum-of-remaining-elements-divisible-by-k/

export const smallesSubArrayRemoved = (arr, k) => {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }

  let newK = sum % k;

  let len = Number.MAX_VALUE;

  for (let i = 0; i < arr.length - 1; i++) {
    sum = 0;
    for (let j = i; j < arr.length; j++) {
      sum = sum + arr[j];
      if (sum === newK) {
        len = Math.min(len, (j-i)+1);
        break;
      }
    }
  }

  return len;
};

// console.log(smallesSubArrayRemoved([3, 6, 7, 1], 9));

