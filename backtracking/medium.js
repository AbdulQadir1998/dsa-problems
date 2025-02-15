// Maze with Obstacles;

const mazeObstacles = (maze, m, n) => {

    const solve = (i, j, op) => {
        if (i === m - 1 && j === n - 1) {
            console.log(op);
            return;
        }

        if (i >= m && j >= n) {
            return;
        }

        if (maze[i][j] === 1) {
            return;
        }

        if (i < m - 1) {
            solve(i + 1, j, op + 'D');
        }

        if (j < n - 1) {
            solve(i, j + 1, op + 'R');
        }
    }

    solve(0, 0, '');
};

// const maze = [[0,0,0],[0,1,0],[0,0,0]];
// let m = maze.length;
// let n = maze[0].length;
// console.log(mazeObstacles(maze, m, n));


// Include All Paths

const allMazePaths = (maze, m, n) => {

    const solve = (i, j, op) => {
        if (i === m - 1 && j === n - 1) {
            console.log(op);
            return;
        }

        if (i >= m && j >= n) {
            return;
        }

        if (maze[i][j] === 1) {
            return;
        }

        maze[i][j] = 1;

        if (i < m - 1) {
            solve(i + 1, j, op + 'D');
        }

        if (j > 0) {
            solve(i, j - 1, op + 'L')
        }

        if (j < n - 1) {
            solve(i, j + 1, op + 'R');
        }

        if (i > 0) {
            solve(i - 1, j, op + 'U')
        }

        maze[i][j] = 0;
    }

    solve(0, 0, '');
};

// const maze = [[0,0,0],[0,0,0],[0,0,0]];
// let m = maze.length;
// let n = maze[0].length;
// console.log(allMazePaths(maze, m, n));


// Print Matrix with Path

const printMatrixPath = (maze, paths, m, n) => {

    const solve = (i, j, path) => {
        if (i === m - 1 && j === n - 1) {
            paths[i][j] = path;
            for (let a = 0; a < m; a++) {
                console.log(paths[a]);
            }
            console.log('//////////////////////////////////////')
            return;
        }

        if (i >= m && j >= n) {
            return;
        }

        if (!maze[i][j]) {
            return;
        }

        maze[i][j] = false;
        paths[i][j] = path;

        if (i < m - 1) {
            solve(i + 1, j, path + 1);
        }

        if (j > 0) {
            solve(i, j - 1, path + 1)
        }

        if (j < n - 1) {
            solve(i, j + 1, path + 1);
        }

        if (i > 0) {
            solve(i - 1, j, path + 1)
        }

        maze[i][j] = true;
        paths[i][j] = 0;
    }

    solve(0, 0, 1);
};

// const maze = [[true, true, true], [true, true, true], [true, true, true]];
// const paths = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
// let m = maze.length;
// let n = maze[0].length;
// console.log(printMatrixPath(maze, paths, m, n));

