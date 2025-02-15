// const insert = (arr, ele) => {
    
//     if (arr.length === 0 || arr[arr.length-1] <= ele) {
//         arr.push(ele);
//         return;
//     }
    
//     let temp = arr.pop();
//     insert(arr, ele);
//     arr.push(temp);
// }

// const sortArray = (arr) => {
//     if (arr.length === 0) {
//         return;
//     }
    
//     let temp = arr.pop();
//     sortArray(arr);
//     insert(arr, temp);
// }

// let arr = [4,2,3,1]
// sortArray(arr);
// console.log(arr);


//////////////////////////////////////////////////////////


// const deleteMiddle = (arr, k) => {
    
//     if (arr.length === 0) {
//         return;
//     }
    
//     let obj = {index : arr.length-1, ele: arr.pop()};
    
//     deleteMiddle(arr, k);
    
//     if (obj.index !== k) {
//         arr.push(obj.ele);
//     }
// }

// const arr = [1,2,3,4,5];
// deleteMiddle(arr, 2);
// console.log(arr);


/////////////////////////////////////////////////////////////////