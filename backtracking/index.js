// SubSets Sum

const subsetSum = (arr, index, op, sum, sets) => {
    if (index >= arr.length) {
        sets.push(sum);
        return;
    }

    let op1 = [...op];
    let op2 = [...op, arr[index]];
    let sum2 = sum + arr[index];

    subsetSum(arr, index+1, op1, sum, sets);
    subsetSum(arr, index+1, op2, sum2, sets);
}

const arr = [1,2,3];
const sets = []
// subsetSum(arr, 0, [], 0, sets);
// console.log(sets.sort((a, b) => a > b ? 1 : -1));



/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    
    const isValid = (board, row, col) => {
        // check row

        for (let i = 0; i < row; i++) {
            if (board[i][col] === 'Q') {
                return false
            }
        }

        // diagonal left

        const maxLeft = Math.min(row, col);

        for (let i = 1; i <= maxLeft; i++) {
            if (board[row-i][col-i] === 'Q') {
                return false
            }
        }

        // diagonal right

        const maxRight = Math.min(row, board.length - col -1);

        for (let i = 1; i <= maxRight; i++) {
            if (board[row-i][col+i] === 'Q') {
                return false
            }
        }

        // check col

        for (let i = 0; i < col; i++) {
            if (board[row][i] === 'Q') {
                return false
            }
        }

        return true;
    };

    const solve = (board, row, n, q, res) => {

        if (q === n) {
            let temp = [];
            for (let i = 0; i < n; i++) {
                temp.push(board[i].join(''))
            }
            res.push(...[temp]);
            return;
        }

        if (q > n) return;
        
        for (let i = 0; i < n; i++) {
            if (isValid(board, row, i)) {
                board[row][i] = 'Q';
                solve(board, row+1, n, q+1, res);
                board[row][i] = '.';
            }
        }

        return;
    }

    const board = [];
    let temp = [];
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            temp.push('.')
        }
        board.push(temp);
        temp = [];
    }
    const res = [];
    solve(board, 0, n, 0, res);

    return res;
};

// console.log(solveNQueens(4));

