
const arr = [1,2,3,5,6,7];

arr.push(8);
arr.push(9);
arr.push(10);

// console.log(arr);

arr.pop();
arr.pop();

// console.log(arr);


// https://www.geeksforgeeks.org/next-smaller-element/

const nextSmallerElements = (arr = []) => {
    const ans = [];
    const stack = [-1];

    for (let i = arr.length-1; i >= 0; i--) {

        if (arr[i] > stack[stack.length-1]) {
            ans.push(stack[stack.length-1]);
            stack.push(arr[i]);
        }

        else {
            while (stack.length !== 0 && arr[i] <= stack[stack.length-1]) {
                stack.pop();
            }

            ans.push(stack[stack.length-1]);
            stack.push(arr[i]);
        }
    }

    console.log(ans.reverse());
};

// nextSmallerElements([2,1,4,3]);


// https://www.geeksforgeeks.org/minimum-number-of-bracket-reversals-needed-to-make-an-expression-balanced/

const bracketsReversal = (s = '') => {

    if (s.length % 2 === 1) return -1;

    const stack = [];

    for (let i = 0; i < s.length; i++) {

        if (s[i] === '{') {
            stack.push(s[i]);
        }

        else {

            if (stack.length !== 0 && stack[stack.length-1] === '{') {

                stack.pop();

            } else {

                stack.push(s[i]);
            }
        }
    }

    let a = 0;
    let b = 0;
    
    // console.log(stack)

    while (stack.length !== 0) {
        let ch = stack[stack.length-1];

        if (ch === '{') {
            a++;
        }

        else {
            b++;
        }

        stack.pop();
    }

    return ((a+1)/2) + ((b+1)/2) -1;
}

// let ans = bracketsReversal('{{{}}}{{{{}}');

// console.log(ans);

