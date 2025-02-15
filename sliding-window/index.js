// Variable Size Window

// Largest Subarray Sum equal to K (Only positive numbers in Array)

const largestSumSubarray = (arr = [], k) => {

    let i = 0;
    let j = 0;
    let max = -1;
    let sum = 0;

    while (j < arr.length) {
        sum = sum + arr[j];

        if (sum < k) {
            j++;
        }

        if (sum === k) {
            max = Math.max(max, j-i+1);
            j++;
        }

        if (sum > k) {
            while (sum > k) {
                sum = sum - arr[i];
                i++;
            }
            j++;
        }
    }

    max = Math.max(max, j-i);
    console.log(max);
};

// largestSumSubarray([5,4,1,1,1,2,3], 5);

