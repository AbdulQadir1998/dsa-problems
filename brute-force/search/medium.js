// https://www.geeksforgeeks.org/find-triplets-array-whose-sum-equal-zero/

export const tripletsWithZeroSum = (arr = []) => {

  const res = [];
  
  arr.sort((a ,b) => a > b ? 1 : -1);

  let l, r, x;

  for (let i = 0; i < arr.length - 1; i++) {

    x = arr[i];
    l = i+1;
    r = arr.length - 1;

    while (l < r) {
      if (x + arr[l] + arr[r] === 0) {
        res.push([x, arr[l], arr[r]]);
        l++;
        r--;
      }

      else if (x + arr[l] + arr[r] < 0) {
        l++;
      } 
      else {
        r--;
      }
    }
  }

  return res;
};

// console.log(tripletsWithZeroSum([0, -1, 2, -3, 1]));


// https://www.geeksforgeeks.org/count-triplets-with-sum-smaller-that-a-given-value/

export const tripletsSumSmallerThan_SUM = (arr = [], sum) => {
  
  let count = 0;
  arr.sort((a ,b) => a > b ? 1 : -1);

  let l, r, x;

  for (let i = 0; i < arr.length - 1; i++) {

    x = arr[i];
    l = i+1;
    r = arr.length - 1;

    while (l < r) {
      if (x + arr[l] + arr[r] >= sum) {
        r--;
      } 
      else {
        // This is important. For current (l, r ), all elements previous than r 
        // can be added to l get tripletSum less than sum
        count = count + Math.abs(r-l);
        l++;
      }
    }
  }

  return count;

};

// console.log(tripletsSumSmallerThan_SUM([5, 1, 3, 4, 7], 12));


// https://www.geeksforgeeks.org/print-maximum-shortest-distance/

export const maxShortestDistance = (arr = [], k) => {

  let min = Number.MAX_VALUE;
  let size = arr.length;

  for (let i = 0; i < arr.length - 1; i++) {

    for (let j = i+1; j < arr.length; j++) {

      if (arr[i] + arr[j] === k) {

        let dist1 = i+1 < size - i ? i+1 : size - i;
        let dist2 = j+1 < size - j ? j+1 : size - j;

        let maxDist = Math.max(dist1, dist2);
        min = Math.min(min, maxDist);
      }
    }
  }

  return min;
};

// console.log(maxShortestDistance([2, 4, 3, 2, 1], 5));


// https://www.geeksforgeeks.org/k-th-missing-element-in-sorted-array/

export const kthMissing = (arr = [], k) => {
  const res = [];

  const calculateMissing = (start, end) => {
    while (start+1 < end) {
      res.push(start+1);
      start++;
    }
  }

  let count = 0;

  if (arr[0] !== 1) {
    res.push(1);
    count++;
  }

  for (let i = 0; i < arr.length - 1; i++) {

    if (arr[i+1] - arr[i] !== 1) {

      calculateMissing(arr[i], arr[i+1]);
      count = count + (arr[i+1] - arr[i] - 1);
    }

    if (count >= k) {
      break;
    }
  }


  return res[k-1];
};

// console.log(kthMissing([2, 3, 5, 9, 10, 11, 12], 4));

