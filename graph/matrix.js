// DFS on Matrix

const dfs = (matrix, r, c, visited) => {
    const pos = r + ',' + c;
    if (visited[pos]) {
        return;
    }

    if (r < 0 || r >= matrix.length || c < 0 || c >= matrix[0].length) {
        return;
    }

    visited[pos] = true;
    console.log(matrix[r][c]);
    dfs(matrix, r-1, c, visited);
    dfs(matrix, r+1, c, visited);
    dfs(matrix, r, c-1, visited);
    dfs(matrix, r, c+1, visited);

    return;
};

const dfsTraversal = () => {
    const matrix = [
        [1,2,3],
        [4,5,6],
        [7,8,9],
    ]

    const visited = {}
    
    dfs(matrix, 1, 1, visited); // 5,2,1,4,7,8,9,6,3

};

// dfsTraversal();


// BFS on Matrix

const bfs = (matrix, row, col, visited) => {

    const isValid = (i, j) => {
        if (i < 0 || i >= matrix.length || j < 0 || j >= matrix[0].length) {
            return false;
        }

        return true;
    }

    const isVisited = (i, j) => {
        const pos = i + ',' + j;

        if (visited[pos]) {
            return true
        }

        return false;
    }

    let pos = row + ',' + col;
    visited[pos] = true;
    const queue = [{ val: matrix[row][col], r: row, c: col }];

    let temp;

    while (queue.length) {

        temp = queue.shift();
        let r = temp.r;
        let c = temp.c;
        console.log(temp.val);

        if (!isVisited(r-1, c) && isValid(r-1, c)) {
            pos = (r-1) + ',' + c;
            visited[pos] = true;
            queue.push({ val: matrix[r-1][c], r: r-1, c });
        }

        if (!isVisited(r+1, c) && isValid(r+1, c)) {
            pos = (r+1) + ',' + c;
            visited[pos] = true;
            queue.push({ val: matrix[r+1][c], r: r+1, c });
        }

        if (!isVisited(r, c-1) && isValid(r, c-1)) {
            pos = r + ',' + (c-1);
            visited[pos] = true;
            queue.push({ val: matrix[r][c-1], r, c: c-1 });
        }

        if (!isVisited(r, c+1) && isValid(r, c+1)) {
            pos = r + ',' + (c+1);
            visited[pos] = true;
            queue.push({ val: matrix[r][c+1], r, c: c+1 });
        }

    }
};

const bfsTraversal = () => {
    const matrix = [
        [1,2,3],
        [4,5,6],
        [7,8,9],
    ]

    const visited = {}
    
    bfs(matrix, 1, 1, visited); // 5,2,8,4,6,1,3,7,9
};

// bfsTraversal();


// Find Maximum Connected Cells

const dfsMatrix = (matrix, r, c, visited) => {
    const pos = r + ',' + c;
    if (visited[pos]) {
        return 0;
    }

    if (r < 0 || r >= matrix.length || c < 0 || c >= matrix[0].length) {
        return 0;
    }

    if (matrix[r][c] === 0) {
        return 0;
    }

    visited[pos] = true;

    let ans1 = dfsMatrix(matrix, r-1, c, visited);
    let ans2 = dfsMatrix(matrix, r+1, c, visited);
    let ans3 = dfsMatrix(matrix, r, c-1, visited);
    let ans4 = dfsMatrix(matrix, r, c+1, visited);

    let ans5 = dfsMatrix(matrix, r-1, c-1, visited);
    let ans6 = dfsMatrix(matrix, r-1, c+1, visited);
    let ans7 = dfsMatrix(matrix, r+1, c-1, visited);
    let ans8 = dfsMatrix(matrix, r+1, c+1, visited);

    return (ans1+ans2+ans3+ans4+ans5+ans6+ans7+ans8+1);
};

const maxConnected = () => {
    const matrix = [
        [0,0,0,1,1,0,0],
        [0,1,0,0,1,1,0],
        [1,1,0,1,0,0,1],
        [0,0,0,0,0,1,0],
        [1,1,0,0,0,0,0],
        [0,0,0,1,0,0,0],
    ]

    const visited = {}
    let max = Number.MIN_VALUE;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] !== 0) {
                let ans = dfsMatrix(matrix, i, j, visited);
                if (ans !== 0) {
                    max = Math.max(max, ans);
                }
            }
            
        }
    }

    console.log(max);
}

// maxConnected();

