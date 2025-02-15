// BST

//      5
//    /   \
//   11    3
//  / \     \
// 4   15    12


class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const a = new Node(5);
const b = new Node(11);
const c = new Node(3);
const d = new Node(4);
const e = new Node(15);
const f = new Node(12);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

const minValD = (root) => {

    if (!root) return Number.MAX_VALUE;

    let currentVal = root.val;
    let ans1 = minValD(root.left);
    let ans2 = minValD(root.right);

    return Math.min(...[currentVal, ans1, ans2]);
};

// console.log(minValD(a));


const minValB = (root) => {
    const queue = [root];
    let min = Number.MAX_VALUE;

    while (queue.length > 0) {
        const current = queue.shift();
        min = Math.min(min, current.val);
        if (current.left) queue.push(current.left);
        if (current.right) queue.push(current.right);
    }

    return min;
}

// console.log(minValB(a));


// Max Sum Path

const pathSum = (root, sum) => {

    if (!root) {
        return sum;
    }

    let sum1 = sum + (root?.left?.val || 0);
    let sum2 = sum + (root?.right?.val || 0);

    let ans1 = pathSum(root.left, sum1);
    let ans2 = pathSum(root.right, sum2);

    return Math.max(...[ans1, ans2]);
};

// console.log(pathSum(a, a.val));

const countLeaf = (root, count) => {

    if (root === null) {
        return count;
    }

    count = countLeaf(root.left, count);

    if (root.left === null && root.right === null) {
        count++;
    }

    count = countLeaf(root.right, count);

    return count;
}

// console.log(countLeaf(a, 0));

