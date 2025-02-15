// Count Unique path in maze;

const countUniquePaths = (m, n) => {

    const solve = (i, j) => {
        if (i === m-1 && j === n-1) {
            return 1;
        }

        if (i >= m && j >= n) {
            return 0;
        }

        let ans1 = 0, ans2 = 0;

        if (i < m-1) {
            ans1 = solve(i+1, j);
        }
        if (j < n-1) {
            ans2 = solve (i, j+1);
        }

        return ans1 + ans2;
    }

    return solve(0, 0);
};

// console.log(countUniquePaths(3,7));


// Print Maze Path / Rat in a maze (Down, Right, Diagonal)

const printMazePaths = (m, n) => {

    const solve = (i, j, op) => {
        if (i === m-1 && j === n-1) {
            console.log(op);
            return;
        }

        if (i >= m && j >= n) {
            return
        }

        if (i < m-1 && j < n-1) {
            solve(i+1, j+1, op+'D');
        }

        if (i < m-1) {
            solve(i+1, j, op+'V');
        }
        

        if (j < n-1) {
            solve (i, j+1, op+'H');
        }
    }

    solve(0, 0, '');
};

// console.log(printMazePaths(3,3));


// Tiling Floor Problem

const tiling = (n, m) => {
    if (n === m) {
        return 2;
    }

    if (n < m) {
        return 1
    }

    let horizontal = tiling(n-1, m);
    let vertical = tiling(n-m, m);

    return horizontal + vertical;
}

// console.log(tiling(4, 2));

