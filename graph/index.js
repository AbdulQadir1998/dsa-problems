// https://www.geeksforgeeks.org/graph-and-its-representations/?ref=lbp

// Adj list 

const createAdjList = (n) => {

    let adj = {};

    const addEdge = (u, v, direction = false) => {
        // direction false for undirected
        // direction ture for directed

        if (u in adj == false) {
            adj[u] = [v];
        } else {
            adj[u] = [...adj[u], v];
        }


        if (!direction) {
            if (v in adj == false) {
                adj[v] = [u];
            } else {
                adj[v] = [...adj[v], u];
            }
        }
    }

    addEdge(0, 1);
    addEdge(0, 4);
    addEdge(1, 2);
    addEdge(1, 3);
    addEdge(1, 4);
    addEdge(2, 3);
    addEdge(3, 4);

    return adj;
};

// const ans = createAdjList();

// console.log(ans);


// Adj Matrix

const createAdjMatrix = (n) => {

    let matrix = [];
    let temp = []

    for (let i = 0; i < n; i++) {
        temp = []
        for (let i = 0; i < n; i++) {
            temp[i] = 0;
        }
        matrix.push(temp);
    }

    const addEdge = (u, v, direction = false) => {
        // direction false for undirected
        // direction ture for directed

        matrix[u][v] = 1;

        if (!direction) {
            matrix[v][u] = 1;
        }
    }

    addEdge(0, 1);
    addEdge(0, 4);
    addEdge(1, 2);
    addEdge(1, 3);
    addEdge(1, 4);
    addEdge(2, 3);
    addEdge(3, 4);

    return matrix;
}

// const ans = createAdjMatrix(5);

// console.log(ans);


// DFS

const dfs = (graph, visited, current) => {
    
    visited[current] = true;
    console.log(current);

    for (let value of graph[current]) {

        if (!visited[value]) {
            dfs(graph, visited, value);
        }
    }
};

const graphDFS = () => {
    const adj = {
        1: [2,3],
        2: [1,3],
        3: [1,2,4],
        4: [3,5,6],
        5: [4],
        6: [4],
    };

    const visited = {};

    for (let key of Object.keys(adj)) {
        visited[key] = false;
    }

    dfs(adj, visited, 1);
};

// graphDFS();


// BFS

const bfs = (graph, visited, current) => {

    const queue = [current];
    visited[current] = true;
    let temp;

    while (queue.length > 0) {

        temp = queue.shift();
        console.log(temp);

        for (let value of graph[temp]) {
            if (!visited[value]) {
                visited[value] = true;
                queue.push(value);
            }
        }
    }
}

const graphBFS = () => {
    const adj = {
        1: [2,3],
        2: [1,3,4],
        3: [1,2],
        4: [2,5,6],
        5: [4],
        6: [4],
    };

    const visited = {};

    for (let key of Object.keys(adj)) {
        visited[key] = false;
    }

    bfs(adj, visited, 1);
};

// graphBFS();

