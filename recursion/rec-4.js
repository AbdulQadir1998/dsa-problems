
// const swap = (str, i, j) => {
//     let arr = str.split('');
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//     return arr.join('');
// }

// const permutations = (str, index, arr) => {
    
//     if (index === str.length-1) {
//         arr.push(str);
//         return;
//     }
    
//     for (let j = index; j < str.length; j++) {
//         let str1 = swap(str, index, j);
//         console.log(str1)
//         permutations(str1, index+1, arr);
        
//         // backtracking in case of array instead of string
//         // swap(arr, index, j);
//     }
// }

// const str = 'abc';
// const arr = [];

// permutations(str, 0, arr);

// console.log(arr);


//////////////////////////////////////////////////////////////////////////