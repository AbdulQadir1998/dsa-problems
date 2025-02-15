// https://www.geeksforgeeks.org/largest-permutation-k-swaps/

const largestPerm = (arr = [], k) => {

    const swap = (i, j, num = []) => {
        let temp = num[i];
        num[i] = num[j];
        num[j] = temp;
    }

    const hash = {};

    for (let i = 0; i < arr.length; i++) {
        hash[arr[i]] = i; 
    }

    let max = arr.length;

    for (let i = 0; i < arr.length; i++) {

        let j = hash[max];

        if (i !== j) {
            k--;

            swap(i, j, arr);
            
            let temp  = hash[arr[i]];
            hash[arr[i]] = hash[arr[j]];
            hash[arr[j]] = temp;
        }

        max--;

        if (k === 0) {
            break;
        }
    }

    console.log(arr);
};

// largestPerm([4, 5, 2, 1, 3], 3);

