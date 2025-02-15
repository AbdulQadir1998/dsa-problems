// const firstLast = (str,f, l, idx, s) => {
    
//     if (idx === str.length) {
//         console.log(f,l);
//         return;
//     }
    
//     if (f === -1 && str[idx] === s) {
//         f = idx;
//     }
//     else if (str[idx] === s) {
//         l = idx;
//     }

//     firstLast(str,f,l,idx+1,s);
// }

// let first = -1;
// let last = -1;
// let str = 'abaacdaefaah';
// firstLast(str,first, last, 0, 'a');


/////////////////////////////////////////////////////////////////


// const isSorted = (arr, index) => {
    
//     if (index === arr.length-1) {
//         return true;
//     }
    
//     if (arr[index] > arr[index+1]) {
//         return false;
//     }
    
//     return isSorted(arr, index+1)
    

// }

// const arr = [1,2,4,3,5];
// console.log(isSorted(arr, 0));


///////////////////////////////////////////////////////////////


// const moveX = (str, index, count, op) => {
//     if (index === str.length) {
//         for (let i = 0; i < count; i++) {
//             op = op + 'x';
//         }
//         return op;
//     }
    
//     if (str[index] === 'x') {
//         count++;
//     } else {
//         op = op + str[index];
//     }
    
//     return moveX(str, index+1, count, op);
// }

// const str = 'axbxcxx';

// console.log(moveX(str, 0, 0, ''));


////////////////////////////////////////////////////////////


// const removeDuplicates = (str, index, op, uniq) => {
    
//     if (index === str.length) {
//         console.log(op);
//         return;
//     }
    
//     let op1 = op;
//     if (str[index] in uniq === false) {
//         op1 = op1+str[index];
//         uniq[str[index]] = 0;
//     }
//     removeDuplicates(str, index+1, op1, uniq);
// }

// const str = '1211334215';

// removeDuplicates(str, 0, '', {});


///////////////////////////////////////////////////////////////////


// const keypadComb = (str, index, op, keypad) => {
    
//     if (index === str.length) {
//         console.log(op);
//         return;
//     }
    
//     let temp = keypad[str[index]];
    
//     for (let i = 0; i < temp.length; i++) {
//         keypadComb(str, index+1, op+temp[i], keypad);
//     }
// }

// const keypad = {
//     0: '.',
//     1: 'abc',
//     2: 'def',
//     3: 'ghi',
//     4: 'jkl',
//     5: 'mno',
//     6: 'pqrs',
//     7: 'tu',
//     8: 'vwx',
//     9: 'yz'
// };

// let str = '26';
// keypadComb(str, 0, '', keypad);


//////////////////////////////////////////////////////////////////////////



// const binarySearch = (arr, x, start, end) => {
    
//     if (start >= end) {
//         console.log('Not found');
//         return;
//     }
//     let mid = Math.floor((start+end)/2);
//     if (arr[mid] === x) {
//         console.log('Found at index', mid);
//         return;
//     }
//     if (x < arr[mid]) {
//         end = mid - 1;
//     } else {
//         start = mid + 1;
//     }
    
//     binarySearch(arr, x, start, end);
// }

// const arr = [1,2,3,4,5,6,7,8,9,10];

// binarySearch(arr, 2, 0, arr.length-1);


////////////////////////////////////////////////////////////////

