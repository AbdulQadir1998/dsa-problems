// Prefix Sum

const prefixSum = (arr = []) => {

    const prefix = {};
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
        prefix[i] = sum;
    }

    console.log(prefix);
}

// prefixSum([15, 10, 25, 5, 10, 20]);


// Suffix Sum

const suffixSum = (arr = []) => {

    const suffix = {};
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }

    for (let i = 0; i < arr.length; i++) {
        suffix[i] = sum;
        sum = sum - arr[i];
    }

    console.log(suffix);
}

// suffixSum([15, 10, 25, 5, 10, 20]);

