// Binary Search

export const BinarySearch = (arr = [], x) => {
  let start = 0;
  let mid;
  let end = arr.length - 1;

  while (start <= end) {
    mid = Math.floor((start + end) / 2);

    if (arr[mid] === x) {
      return `${x} found`;
    }

    else if (x > arr[mid]) {
      start = mid + 1;
    }

    else if (x < arr[mid]) {
      end = mid - 1;
    }
  }

  console.log('Not found');
};

console.log(BinarySearch([1,2,3,4,5,6,7,8,9,10], 9));
