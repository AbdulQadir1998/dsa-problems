const arr = [1,2,3,5,6,7];

arr.push(8);
arr.push(9);
arr.push(10);

// console.log(arr);

let front = 0;

const remove = () => {

    return arr[front++];
}


// console.log(remove());
// console.log(remove());

