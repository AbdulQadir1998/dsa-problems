// dfs

const dfs = (graph, visited, ans, curr) => {

    visited[curr] = true;

    for (let value of graph[curr]) {

        if (!visited[value]) {
            dfs(graph, visited, ans, value);
        }
    }

    ans.push(curr);
};

const topol_dfs = () => {
    const adj = {
        1: [2,3],
        2: [4],
        3: [4],
        4: [5,6],
        5: [6],
        6: [],
    }

    const visited = {};
    const ans = [];

    for (let key of Object.keys(adj)) {
        visited[key] = false;
    }

    dfs(adj, visited, ans, 1);
    console.log(ans.reverse())
};

// topol_dfs();


// Kahn's Algorithm

const bfs = (graph, indegree, ans) => {

    const queue = [];

    for (let key of Object.keys(indegree)) {
        if (indegree[key] === 0) {
            queue.push(parseInt(key));
        };
    }

    while (queue.length) {

        const temp = queue.shift();
        ans.push(temp);

        for (let value of graph[temp]) {
            indegree[value] = indegree[value] - 1;

            if (indegree[value] === 0) {
                queue.push(value);
            }
        }
    }
};

const addEdge = (u, v, adj) => {
    // direction false for undirected
    // direction ture for directed

    if (u in adj == false) {
        adj[u] = [v];
    } else {
        adj[u] = [...adj[u], v];
    }

    if (v in adj == false) {
        adj[v] = [];
    }
}

const kahnsAlgorithm = () => {
    const edges = [
        [5,0],
        [4,0],
        [5,2],
        [4,1],
        [2,3],
        [3,1],
    ]

    const indegree = {};

    for (let i = 0; i < edges.length; i++) {
        indegree[edges[i][0]] = (indegree[edges[i][0]] || 0);
        indegree[edges[i][1]] = (indegree[edges[i][1]] || 0) + 1;
    }

    const adj = {};

    for (let i = 0; i < edges.length; i++) {
        addEdge(edges[i][0], edges[i][1], adj);
    }

    const ans = [];

    bfs(adj, indegree, ans);

    console.log(ans);
};

// kahnsAlgorithm();


// https://www.geeksforgeeks.org/minimum-time-taken-by-each-job-to-be-completed-given-by-a-directed-acyclic-graph/

const bfsTopo = (graph, indegree) => {

    const queue = [];
    const time = {};

    for (let key of Object.keys(indegree)) {
        if (indegree[key] === 0) {
            queue.push(key);
            time[key] = 1;
        }
    }
    while (queue.length) {

        let temp = queue.shift();

        for (let value of graph[temp]) {
            indegree[value]--;

            if (indegree[value] === 0) {
                time[value] = time[temp] + 1;
                queue.push(value);
            }
        }
    }

    console.log(Object.values(time));
}

const minTimeToComplete = () => {

    const edges = [
        [1,3],
        [1,4],
        [1,5],
        [2,3],
        [2,8],
        [2,9],
        [3,6],
        [4,6],
        [4,8],
        [5,8],
        [6,7],
        [7,8],
        [8,10],
    ];

    const indegree = {};
    const adj = {};

    for (let i = 0; i < edges.length; i++) {
        indegree[edges[i][0]] = indegree[edges[i][0]] || 0;
        indegree[edges[i][1]] = (indegree[edges[i][1]] || 0) + 1;
        addEdge(edges[i][0], edges[i][1], adj);
    }

    bfsTopo(adj, indegree);
};

// minTimeToComplete();

