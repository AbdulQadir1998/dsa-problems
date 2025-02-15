// Bubble sort

export const bubbleSort = (arr = []) => {

  for (let i = 0; i < arr.length - 1; i++) {

    for (let j = 0; j < arr.length - 1; j++) {

      if (arr[j] > arr[j+1]) {
        let swap = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = swap;
      }
    }
  }

  return arr;
};

// console.log(bubbleSort([3,2,1,5,6,7,2,9,1,4,8]));


// Selection Sort

export const selectionSort = (arr = []) => {

  let minIndex;

  for (let i = 0; i < arr.length - 1; i++) {
    minIndex = i;
    for (let j = i+1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    if (i !== minIndex) {
      let swap = arr[minIndex];
      arr[minIndex] = arr[i];
      arr[i] = swap;
    }
  }

  return arr;
};

// console.log(selectionSort([3,2,1,5,6,7,2,9,1,4,8]));


// https://www.geeksforgeeks.org/merge-sort/

// https://www.geeksforgeeks.org/quick-sort/?ref=lbp

