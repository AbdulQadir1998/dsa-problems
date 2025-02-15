// Find all pairs exist in two sorted arrays where element from arr1 is smaller than or equal to element from arr2

const findPairs = (arr1 = [], arr2 = []) => {
    let p1 = 0;
    let p2 = 0;
    const pairs = [];

    while (p1 !== arr1.length && p2 !== arr2.length) {

        if (arr1[p1] <= arr2[p2]) {

            let j = p2;
            while (j < arr2.length) {
                pairs.push([arr1[p1], arr2[j]]);
                j++;
            }
            p1++;

        } else {
            p2++;
        }
    }

    console.log(pairs);

}
  
// const array1 = [1, 3, 5, 7];
// const array2 = [2, 4, 6];
// findPairs(array1, array2);


// https://www.geeksforgeeks.org/given-two-sorted-arrays-number-x-find-pair-whose-sum-closest-x/

const pairSumClosestToX = (arr1 = [], arr2 = [], x) => {

    // Treat both arrays as one and take left and right pointers
    // Check if current diff is min then update the result
    // Otherwise move closer to X;

    let left = 0;
    let right = arr2.length-1;
    let min = Number.MAX_VALUE;
    let a, b;

    while (left < arr1.length && right >= 0) {

        if (Math.abs(arr1[left]+arr2[right]-x) < min) {
            min = Math.abs(arr1[left]+arr2[right]-x);
            a = arr1[left];
            b = arr2[right]; 
        }

        if (arr1[left] + arr2[right] > x) {
            right--;
        } else {
            left++;
        }
    }

    console.log(a, b);
};

// pairSumClosestToX([1, 4, 5, 7], [10, 20, 30, 40], 32);

