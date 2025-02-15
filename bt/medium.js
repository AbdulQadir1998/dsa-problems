// Path to a target Node

const dfs = (root, p, res) => {

    if (root === null) {
        return false;
    }

    
    res.push(root.val);
    if (root.val === p.val) {
        return true;
    }

    let ans1 = dfs(root.left, p, res);
    let ans2 = dfs(root.right, p, res);

    if (!ans1 && !ans2) {
        res.pop();
        return false;
    } else {
        return true;
    }
}

