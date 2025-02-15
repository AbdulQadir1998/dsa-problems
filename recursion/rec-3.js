// const arr = [1,2,3,4,5];

// const insert = (arr, ele) => {
//   if (arr.length === 0) {
//     arr.push(ele);
//     return;
//   }

//   let temp = arr.pop();
//   insert(arr, ele);
//   arr.push(temp);
//   return;
// }

// const reverseStack = (arr) => {
//   if (arr.length === 0) {
//     return;
//   }

//   let temp = arr.pop();
//   reverseStack(arr);
//   insert(arr, temp);
//   return;
// }

// console.log(reverseStack(arr));
// console.log(arr);



//////////////////////////////////////////////////////////


// const generateN_K = (n, k) => {

//   if (n === 1 && k === 1) {
//     return 0;
//   }

//   let mid = Math.pow(2, n-1) / 2;

//   if (k <= mid) {
//     return generateN_K(n-1, k);
//   } else {
//     return generateN_K(n-1, k-mid) === 0 ? 1: 0;
//   }
// }

// console.log(generateN_K(3,2))

/////////////////////////////////////////////////////////////


// const tower = (s,d,h,n) => {
//     // console.log(`moving ${n} from ${s} to ${d}`);
//   if (n === 1) {
//     console.log(`moving ${n} from ${s} to ${d}`);
//     return;
//   }

//   tower(s, h, d, n-1);
//   console.log(`moving ${n} from ${s} to ${d}`);
//   tower(h, d, s, n-1);
//   return;
// }

// console.log(tower('s', 'd', 'h', 3));


//////////////////////////////////////////////////////////////


// const subSets = (inp, op) => {

//   if (inp.length === 0) {
//     console.log(op);
//     return;
//   }

//   let op1 = op;
//   let op2 = op + inp[0];
//   inp = inp.slice(1, inp.length);

//   subSets(inp, op1);
//   subSets(inp, op2);

// }

// console.log(subSets('abc', ''));


///////////////////////////////////////////////////////


function isCharNumber(c) {
  return c >= '0' && c <= '9';
}

const letterCase = (arr, inp, op) => {

  if (inp.length === 0) {
    arr.push(op);
    return;
  }

  if (isCharNumber(inp[0])) {
    let op1 = op + inp[0];
    let inp1 = inp.slice(1,inp.length);
    letterCase(arr, inp1, op1);
  } else {
    let op1 = op + inp[0].toLowerCase();
    let op2 = op + inp[0].toUpperCase();
    let inp1 = inp.slice(1, inp.length);

    letterCase(arr, inp1, op1);
    
    letterCase(arr, inp1, op2);
  }
}

const arr = [];
console.log(letterCase(arr, 'a1B2', ''));
console.log(arr);


///////////////////////////////////////////////////////


// const balancedBrackets = (arr, O, C, op) => {

//   if ( O === 0 && C === 0) {
//     arr.push(op);
//     return;
//   }
  
//   if (O !== 0) {
//       let op1 = op + '(';
//       balancedBrackets(arr, O-1, C, op1);
//   }
  
//   if (C > O) {
//       let op2 = op+')';
//       balancedBrackets(arr, O, C-1, op2);
//   }
// }

// const arr = [];
// console.log(balancedBrackets(arr, 3, 3, ''));
// console.log(arr);


/////////////////////////////////////////////////////////


// const nDigit = (arr, ones, zeros, n, op) => {
    
//     if (n === 0) {
//         arr.push(op);
//         return;
//     }
    
//     if (ones === zeros) {
//         let op1 = op+'1';
//         nDigit(arr, ones+1, zeros, n-1, op1);
//     }
//     else if (ones > zeros) {
//         let op1 = op+'1';
//         let op2 = op+'0';
//         nDigit(arr, ones+1, zeros, n-1, op1);
//         nDigit(arr, ones, zeros+1, n-1, op2);
//     }
// }

// const arr = [];

// nDigit(arr, 0, 0, 3, '');
// console.log(arr);


//////////////////////////////////////////////////////////////


// const JProblem = (arr, n, k, index) => {
    
//     if (arr.length === 1) {
//         console.log(arr[0]);
//         return;
//     }
    
//     let index1 = (index+k) % n;
//     arr.splice(index1, 1);
//     jProblem(arr, n-1, k, index1);
// }

// let k = 7;
// let n = 40;

// const arr = [];

// for (let i = 1; i < n; i++) {
//     arr.push(i);
// }

// JProblem(arr, n, k-1, 0);


////////////////////////////////////////////////////////////////











