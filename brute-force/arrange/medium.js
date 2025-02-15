// https://www.geeksforgeeks.org/minimum-swaps-required-bring-elements-less-equal-k-together/

export const minSwaps = (arr, n, k) => {
  // Find the count of single / adjacent elements satisfing cond. arr[i] <= k
  // if count is 1 then return 0 means no swaps required
  // else remove max value from count array as we'll not swap single / adjacent elements with max count
  // we will swap single / adjacent elements with lesser count ...
  // by taking some of all lesser counts

  let count = 1;
  const indexes = [];
  for (let i = 0; i < n; i++) {
    if (arr[i] <= k && arr[i+1] <= k) {
      count++;
    } else {
      if (count !== 1 || arr[i] <= k) {
        indexes.push(count);
        count = 1;
      }
    }
  }

  if (indexes.length === 1) {
    return 0;
  } else {
    const max = Math.max(...indexes);
    const maxIndex = indexes.indexOf(max);
    indexes.splice(maxIndex, 1);
    return indexes.reduce((x,y) => x+y, 0);
  }
};

// console.log(minSwaps([2, 7, 9, 5, 8, 7, 4], 7 , 7));


// https://www.geeksforgeeks.org/replace-two-consecutive-equal-values-one-greater/

export const replaceTwoConsecutiveWithOneGreater = (arr, n) => {
  let flag = true;
  while (flag) {
    for (let i = 0; i < n ; i++) {
      if (i+1 === n) {
        flag = false;
        break;
      }
      if (arr[i] === arr[i+1]) {
        n--;
        arr[i] = arr[i] + 1;
        arr.splice(i+1, 1);
        break;
      }
    }
  }
  return arr;
};

// console.log(replaceTwoConsecutiveWithOneGreater([5, 2, 1, 1, 2, 2], 6));


// https://www.geeksforgeeks.org/reorder-a-array-according-to-given-indexes/

export const reorderAccToIndexes = (arr, indicies) => {
  // Pick index from 0 - (n-1)
  // On each index, Swap the elements in the arr and indicies until the indicies[index] !== index
  // This means swap until all index should be in the right position in indicies[] or in right order
  // e.g, indicies should be in order [0,1,2,3,4] 

  for (let i = 0; i < indicies.length; i++) {

    while (indicies[i] !== i) {
      let index = indicies[i];

      let temp = arr[i];
      arr[i] = arr[index];
      arr[index] = temp;

      let tmp = indicies[i];
      indicies[i] = indicies[index];
      indicies[index] = tmp;
    }
  }
  return [arr, indicies];
};

// console.log(
//   reorderAccToIndexes(
//     [50, 40, 70, 60, 90],
//     [3,  0,  4,  1,  2]
//   )
// );


