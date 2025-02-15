// BFS

const bfsUD = (graph, visited, curr) => {

    const queue = [curr];
    const parent = { curr: -1 };
    visited[curr] = true;;
    let temp;

    while (queue.length > 0) {

        temp = queue.shift();

        for (let value of graph[temp]) {
            if (visited[value] && value !== parent[temp]) {
                return true;
            }

            else if (!visited[value]) {
                visited[value] = true;
                parent[value] = temp;
                queue.push(value);
            }
        }
    }

    return false;

};

const cycle_bfs_UD = () => {

    const adj = {
        4: [5],
        5: [4, 6, 7],
        6: [5, 8],
        7: [5, 8],
        8: [7, 9],
        9: [8]
    }

    const visited = {};

    for (let key of Object.keys(adj)) {
        visited[key] = false;
    }

    let ans = bfsUD(adj, visited, 4);
    console.log(ans);
};

// cycle_bfs_UD();


// DFS

const dfsUD = (graph, visited, curr, parent) => {

    visited[curr] = true;

    for (let value of graph[curr]) {

        if (visited[value] && value !== parent) {

            return true;

        } else if (!visited[value]) {

            if (dfsUD(graph, visited, value, curr)) {
                return true;
            }
        }
    }

    return false;
};

const cycle_dfs_UD = () => {

    const adj = {
        4: [5],
        5: [4, 6, 7],
        6: [5, 8],
        7: [5, 8],
        8: [7, 9],
        9: [8]
    }

    const visited = {};

    for (let key of Object.keys(adj)) {
        visited[key] = false;
    }

    let ans = dfsUD(adj, visited, 4, -1);
    console.log(ans);
};

// cycle_dfs_UD();


// DFS

const dfsD = (graph, visited, dfsVisited, curr) => {

    visited[curr] = true;
    dfsVisited[curr] = true;

    for (let value of graph[curr]) {

        if (visited[value] && dfsVisited[value]) {

            return true;

        } else if (!visited[value]) {

            if (dfsD(graph, visited, dfsVisited, value)) {
                return true;
            }
        }
    }

    dfsVisited[curr] = false;

    return false;
};

const cycle_dfs_D = () => {

    const adj = {
        '0': ['10'],
        '1': [],
        '3': ['18'],
        '4': [],
        '5': ['5'],
        '6': ['11'],
        '10': [],
        '11': ['14'],
        '13': ['1'],
        '14': [],
        '15': ['1'],
        '17': ['4'],
        '18': []
    };

    const V = 20;

    const visited = {};
    const dfsVisited = {};

    for (let i = 0; i < V; i++) {
        if (!visited[i] && adj[i] && dfsD(adj, visited, dfsVisited, i)) {
            console.log(true);
            return;
        }
    }

    console.log(false);
};

// cycle_dfs_D();

