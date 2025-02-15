////////////////////////////////////////////////////////////


// const stringReversal = (inp, index, op) => {
//     if (index === inp.length) {
//         console.log(op);
//         return;
//     }
    
//     let op1 = inp[index]+op;
//     stringReversal(inp, index+1, op1);
// }

// stringReversal('the simple engineer', 0, '');



////////////////////////////////////////////////////////////



// const isPalindrom = (inp, index1, index2) => {
//     if (index1 === Math.floor(inp.length/2)) {
//         return true;
//     }
    
//     if (inp[index1] === inp[index2]) {
//         return isPalindrom(inp, index1+1, index2-1);
//     }
    
//     return false;
// }

// const inp = 'kayak'
// console.log(isPalindrom(inp, 0, inp.length-1));



///////////////////////////////////////////////////////////////////////



// const decimaToBinary = (inp) => {
//     // console.log(inp)
//     if (inp === 1) {
//         return '1';
//     }
    
//     if (inp % 2 === 0) {
        
//         const ans = decimaToBinary(Math.floor(inp/2));
//         return ans + '0';
        
//     }
//     else if (inp % 2 === 1) {
//         const ans = decimaToBinary(Math.floor(inp/2));
//         return ans + '1';
//     }
// }

// const inp = 19
// console.log(decimaToBinary(inp));



/////////////////////////////////////////////////////////////////////



// const sumOfN = (n, sum) => {
//     if (n === 0) {
//         return sum;
//     }
    
//     sum = sum + n;
//     return sumOfN(n-1, sum);
// }

// console.log(sumOfN(10, 0));



////////////////////////////////////////////////////////////////////////


// const fab = (a,b,n) => {
    
//     if (n === 0) {
//         return;
//     }
    
//     let c = a+b;
//     console.log(c);
//     fab(b,c,n-1);
// }

// let a = 0, b = 1, n =8;
// console.log(a);
// console.log(b);
// fab(a,b,n-2);

///////////////////////////////////////////////////////////////

