// https://www.geeksforgeeks.org/minimum-number-of-jumps-to-reach-end-of-a-given-array/

export const minStepsToReachEnd = (arr) => {
  let i = 0;
  let steps = 1;

  while (i < arr.length) {
    let value = arr[i];
    console.log(arr.slice(i+1, i+value+1));
    let max = Math.max(...arr.slice(i+1, i+value+1));
    if (i+max >= arr.length -1) {
      steps++;
      return steps;
    }
    i = arr.indexOf(max);
    steps++;
  }
};

console.log(minStepsToReachEnd([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]));
