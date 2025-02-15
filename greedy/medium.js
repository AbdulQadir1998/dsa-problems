
const { MaxHeap } = require('../heap/max-heap') ;

// https://www.geeksforgeeks.org/minimum-incrementdecrement-to-make-array-non-increasing/

const min_Inc_Dec = (arr = []) => {

  let pq = new MaxHeap();
  let ans = 0;

  for (let i = arr.length-1; i >= 0; i--) {

    if (pq.heap.length && pq.getPeek() > arr[i]) {
      ans = ans + Math.abs(pq.getPeek() - arr[i]);

      pq.remove();
    }

    pq.add(arr[i]);
  }

  console.log(ans);
};

// min_Inc_Dec([3, 1, 2, 1]);


// https://www.geeksforgeeks.org/sum-area-rectangles-possible-array/

const possibleRectangle = (arr = []) => {

  arr.sort((a, b) => a > b ? 1 : -1);

  const getWidth = (a, b) => {
    let w = 0;

    if (arr[a] === arr[b]) {
      w = arr[a];
    }

    if (arr[a] !== arr[b] && Math.abs(arr[a] - arr[b]) === 1) {
      w = arr[a];
    }

    return w;
  };

  const getHeight = (a, b) => {
    let h = 0;

    if (arr[a] === arr[b]) {
      h = arr[a];
    }

    if (arr[a] !== arr[b] && Math.abs(arr[a] - arr[b]) === 1) {
      h = arr[a];
    }

    return h;
  };


  let sum = 0;
  let width = 0;
  let height = 0;

  let i = 0;
  let j = 3;

  while (j < arr.length) {
    
    width = getWidth(i, i+1);
    height = getHeight(i+2, i+3);

    sum+= (width * height);
    i = j+1;
    j = j+4;
  }

  console.log(sum);

};

// possibleRectangle([10, 10, 10, 10, 11, 10, 11, 10]);

