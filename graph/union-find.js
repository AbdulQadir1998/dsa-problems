// Disjoint sets, Union-Find, Union by Rank, Path Compression

const parent = {};
    
const ranks = {};

const find = (x) => {

    // Path Compression

    if (parent[x] !== x) {
        parent[x] = find(parent[x])
    }

    return parent[x];
};

const union = (x, y) => {

    let xRoot = find(x);
    let yRoot = find(y);

    if (xRoot === yRoot) {
        return true;
    }

    // Union By Rank

    if (ranks[xRoot] > ranks[yRoot]) {
        parent[yRoot] = xRoot;
    }

    else if (ranks[yRoot] > ranks[xRoot]) {
        parent[xRoot] = yRoot;

    } else {
        parent[yRoot] = xRoot;
        ranks[xRoot] = ranks[xRoot] + 1;
    }

    return false;
};

const disjointSets = () => {

    for (let i = 0; i <= 7; i++) {
        parent[i] = i;
        ranks[i] = 1;
    }

    union(0,1);
    union(2,7);
    union(3,6);
    let ans = union(0,7);
    console.log(ans);
    union(0,7);
    let ans1 = union(0,7);
    console.log(ans1);
};

// disjointSets();


// Connected Components

const connectedComp = () => {
    const edges = [[0,1], [1,2], [3,4], [0,2], [1,4]];
    let n = 5;

    for (let i = 0; i < n; i++) {
        parent[i] = i;
        ranks[i] = 1;
    }

    for (let i = 0; i < edges.length; i++) {

        if (!union(edges[i][0], edges[i][1])) {
            n--;
        }
    }

    console.log(n);
};

// connectedComp();

