// BST

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f


class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

// DFS - Recursive

const dfs = (root, res = []) => {

    if (!root) return;

    res.push(root.val);

    if (root.left) dfs(root.left, res);
    if (root.right) dfs(root.right, res);
};

// const res = [];
// dfs(a, res);
// console.log(res);


const bfs = (root, res) => {
    const queue = [root];

    while (queue.length > 0) {
        const current = queue.shift();
        res.push(current.val);

        if (current.left) queue.push(current.left);
        if (current.right) queue.push(current.right);
    }
}

// const res = [];
// bfs(a, res);
// console.log(res);


//      a
//    /   \
//   b     c
//  / \     \
// d   e     f

// DFS

const findTarget = (root, target) => {

    if (!root) return false;

    if (root.val === target) return true;

    let ans1 = findTarget(root.left, target);
    let ans2 = findTarget(root.right, target);

    return ans1 || ans2;
};

// console.log(findTarget(a, 'd'));


// BFS

const findKey = (root, target) => {

    const queue = [root];

    while (queue.length > 0) {
        const current = queue.shift();
        if (current.val === target) return true;
        if (current.left) queue.push(current.left);
        if (current.right) queue.push(current.right);
    }

    return false;
};

// console.log(findKey(a, 'e'));

