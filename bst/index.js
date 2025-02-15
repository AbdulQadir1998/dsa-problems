class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const maxBST = (root) => {

    if (root.right === null) {
        return root;
    }

    return maxBST(root.right);
}

const inorderPredecessor = (root, val) => {
    
    const solve = (root, val) => {

        if (root === null) {
            pred = null
            return null;
        }

        if (root.val === val) {
            if (root.left !== null) {
                return maxBST(root.left);
            } else {
                return null;
            }
        }

        else if (val < root.val) {

            return solve(root.left, val);

        } else {

            let ans = solve(root.right, val);
            if (ans !== null) {
                return ans;
            }
            return root;
        }

    }

    return solve(root, val);
}

const minBST = (root) => {

    if (root.left === null) {
        return root;
    }

    return maxBST(root.left);
}

const inorderSuccessor = (root, val) => {
    
    const solve = (root, val) => {

        if (root === null) {
            pred = null
            return null;
        }

        if (root.val === val) {
            if (root.right !== null) {
                return minBST(root.right);
            } else {
                return null;
            }
        }

        else if (val < root.val) {

            let ans = solve(root.left, val);

            if (ans !== null) {
                return ans;
            }
            return root;

        } else {
            
            return solve(root.right, val);
        }

    }

    return solve(root, val);
}

const inorder = (root) => {

    if (root === null || !root) {
        return;
    }

    inorder(root.left);

    console.log(root.val);

    inorder(root.right);
}

const insert = (root, ele) => {

    if (root === null) {
        root = new Node(ele);
        return root;
    }

    if (ele < root.val) {
        root.left = insert(root.left, ele);
    } else {
        root.right = insert(root.right, ele);
    }

    return root;
}

const insertBST = (arr = [], root) => {
    for (let i = 0; i < arr.length; i++) {

        insert(root, arr[i]);
    }
}

let root = insert(null, 5);
insertBST([3,2,4,7,6,8], root);

// inorder(root);

// let predecessor = inorderPredecessor(root, 4);
// console.log(predecessor);

// let successor = inorderSuccessor(root, 2);
// console.log(successor);

