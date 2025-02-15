// https://www.geeksforgeeks.org/longest-subsequence-of-a-number-having-same-left-and-right-rotation/

export const longestSubSeqSameLeftAndRightRotation = (str = '') => {
  const arr = str.split('');

  const twoDigitNumbers = [];

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      twoDigitNumbers.push([i, j]);
    }
  }

  let index = 0;
  let len = 0;
  let maxLen = 0;
  let first, second;

  for (let i = 0; i < twoDigitNumbers.length; i++) {

    index = 0;
    len = 0;

    first = twoDigitNumbers[i][0];
    second = twoDigitNumbers[i][1];

    for (let j = 0; j < arr.length; j++) {

      if (index === 0 && arr[j] - '0' === first) {
        index = 1;
        len++;
      }
      else if (index === 1 && arr[j] - '0' === second) {
        index = 0;
        len++;
      }
    }

    if (len % 2 === 1) {
      len--;
    }

    maxLen = Math.max(maxLen, len);
  }

  return maxLen;
};

// console.log(longestSubSeqSameLeftAndRightRotation('252525'));

