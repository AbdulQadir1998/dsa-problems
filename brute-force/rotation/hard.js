// https://www.geeksforgeeks.org/count-of-possible-rotations-of-given-array-to-remove-largest-element-from-first-half/

export const rotationsToRemoveMaxFromFirstHalf = (arr, n) => {

  // The idea is to find distance between maximum elements 
  // and simply check if the range is greater than half of array size.
  // If yes, rotation is possible, or else rotation is not possible.

  // N/2 :- means number of rotations will be half of rotations/arraySize to keep max in right half
  // right - left :- means number of rotations when right half max will come into the first/left half

  let max = -1;
  let left = -1; 
  let right = -1;

  for(let i = 0; i < n; i++){
    if (max < arr[i]) {
      max = arr[i];
    }
  }

  for (let i = 0; i < n; i++) {
    if (arr[i] === max) {
      left = i;
      break;
    }
  }

  for (let i = n-1; i >= 0; i--) {
    if (arr[i] === max) {
      right = i;
      break;
    }
  }

  const numberofRotations = (n/2) - (right-left);

  if (numberofRotations <= 0) {
    return 0;
  }
  return numberofRotations;
};

// console.log(rotationsToRemoveMaxFromFirstHalf([3,3,5,3,3,3], 6));
// console.log(rotationsToRemoveMaxFromFirstHalf([8, 8, 9, 8, 8, 9], 6));

