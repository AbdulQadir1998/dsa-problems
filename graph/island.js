// Island Count

const dfs = (matrix, r, c, visited) => {
    const pos = r + ',' + c;
    if (visited[pos]) {
        return false;
    }

    if (r < 0 || r > matrix.length || c < 0 || c > matrix[0].length) {
        return false;
    }

    if (matrix[r][c] === 0) {
        return false;
    }

    visited[pos] = true;
    dfs(matrix, r-1, c, visited);
    dfs(matrix, r+1, c, visited);
    dfs(matrix, r, c-1, visited);
    dfs(matrix, r, c+1, visited);

    return true;
};

const islandCount = () => {
    const matrix = [
        [0,1,0,0,1,0],
        [1,1,0,0,1,0],
        [0,1,0,0,0,0],
        [0,0,0,1,1,0],
        [0,1,0,1,1,0],
        [0,0,0,0,0,0],
    ]

    const visited = {}
    let count = 0;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (dfs(matrix, i, j, visited)) {
                count++;
            }
        }
    }

    console.log(count);
}

// islandCount();


// minimum island

const dfsMin = (matrix, r, c, visited) => {
    const pos = r + ',' + c;
    if (visited[pos]) {
        return 0;
    }

    if (r < 0 || r > matrix.length || c < 0 || c > matrix[0].length) {
        return 0;
    }

    if (matrix[r][c] === 0) {
        return 0;
    }

    visited[pos] = true;
    let ans1 = dfsMin(matrix, r-1, c, visited);
    let ans2 = dfsMin(matrix, r+1, c, visited);
    let ans3 = dfsMin(matrix, r, c-1, visited);
    let ans4 = dfsMin(matrix, r, c+1, visited);

    return (ans1 + ans2 + ans3 + ans4 + 1);
};

const minIsland = () => {
    const matrix = [
        [0,1,0,0,1,0],
        [1,1,0,0,1,0],
        [0,1,0,0,0,0],
        [0,0,0,1,1,0],
        [0,1,0,1,1,0],
        [0,0,0,0,0,0],
    ]

    const visited = {}
    let min = Number.MAX_VALUE;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] !== 0) {
                let ans = dfsMin(matrix, i, j, visited);
                if (ans !== 0) {
                    min = Math.min(min, ans);
                }
            }
            
        }
    }

    console.log(min);
}

// minIsland();

