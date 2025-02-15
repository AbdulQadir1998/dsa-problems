// Convert BST to Min Heap
// https://www.geeksforgeeks.org/convert-bst-min-heap/

class Node {
    constructor() {
        this.data = 0;
        this.left = null;
        this.right = null;
    }
}

function getNode(data) {
    var newNode = new Node();
    newNode.data = data;
    newNode.left = newNode.right = null;
    return newNode;
}

const convertBST_ToHeap = (root) => {

    const inorder = (root, arr) => {

        if (root === null) {
            return;
        }

        inorder(root.left, arr);
        arr.push(root.data);
        inorder(root.right, arr);
    }

    const convert = (root, arr, index) => {
        if (root === null) {
            return;
        }

        root.data = arr[index[0]];
        index[0] += 1;
        convert(root.left, arr, index);
        convert(root.right, arr, index);
    }

    let arr = [];
    inorder(root, arr);

    convert(root, arr, [0]);

    console.log(root);
}

// Driver program to test above
// BST formation
var root = getNode(4);
root.left = getNode(2);
root.right = getNode(6);
root.left.left = getNode(1);
root.left.right = getNode(3);
root.right.left = getNode(5);
root.right.right = getNode(7);

// convertBST_ToHeap(root);



// https://www.geeksforgeeks.org/k-th-largest-sum-contiguous-subarray/

const { MinHeap } = require('./min-heap');

const KthLargestSumSubarray = (arr = [], k) => {
    const pq = new MinHeap();

    let sum = 0;

    for(let i = 0; i < arr.length; i++) {

        sum = 0;

        for(let j = i; j < arr.length; j++) {
            sum = sum + arr[j];

            if (pq.heap.length < k) {
                pq.add(sum);

            } else {
                if (sum > pq.getPeek()) {
                    pq.remove();
                    pq.add(sum);
                }
            }
        }
    }

    return pq.getPeek();
};

let ans = KthLargestSumSubarray([2,3,6,4,7,1], 3);

// console.log(ans);

