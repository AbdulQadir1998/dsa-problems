// Print all shortest distance from source to each node

const bfsDistances = (graph, visited, dist, src) => {

    visited[src] = true;
    dist[src] = 0;
    const queue = [src];
    let temp;

    while (queue.length) {

        temp = queue.shift();

        for (let value of graph[temp]) {
            if (!visited[value]) {
                visited[value] = true;
                dist[value] = dist[temp] + 1;
                queue.push(value);
            }
        }
    }
}

const shortestDistances = () => {
    // const adj = {
    //     1: [2,3,4],
    //     2: [1,5],
    //     3: [1,8],
    //     4: [1,6],
    //     5: [2,8],
    //     6: [4,7],
    //     7: [6,8],
    //     8: [3,5,7],
    // }

    const adj = {
        0: [1,2],
        1: [3,2],
        2: [3,4,5],
        3: [4],
        4: [5],
        5: [],
    }

    const visited = {};
    const dist = {};

    for (let key of Object.keys(adj)) {
        visited[key] = false;
        dist[key] = Number.MAX_VALUE;
    }

    bfsDistances(adj, visited, dist, 1);
    console.log(dist);
}

// shortestDistances();


// Shortest Path Distance in a graph from src to dest

const bfsDistance = (graph, visited, src, dest) => {

    visited[src] = true;
    const queue = [{ node: src, dist: 0 }];
    let temp;

    while (queue.length) {

        temp = queue.shift();
        if (temp.node === dest) {
            return temp.dist;
        }

        for (let value of graph[temp.node]) {
            if (!visited[value]) {
                visited[value] = true;
                
                queue.push({ node: value, dist: temp.dist + 1 });
            }
        }
    }
}

const shortestDist = () => {
    // const adj = {
    //     1: [2,3,4],
    //     2: [1,5],
    //     3: [1,8],
    //     4: [1,6],
    //     5: [2,8],
    //     6: [4,7],
    //     7: [6,8],
    //     8: [3,5,7],
    // }

    const adj = {
        0: [1,2],
        1: [3,2],
        2: [3,4,5],
        3: [4],
        4: [5],
        5: [],
    }

    const visited = {};

    for (let key of Object.keys(adj)) {
        visited[key] = false;
    }

    let ans = bfsDistance(adj, visited, 1, 5);

    console.log(ans);
}

// shortestDist();


// Shortest Path in an unweighted graph from src to dest

const bfsPath = (graph, visited, parent, src, dest) => {

    visited[src] = true;
    parent[src] = -1;
    const queue = [src];
    let temp;

    while (queue.length) {

        temp = queue.shift();

        for (let value of graph[temp]) {
            if (!visited[value]) {
                visited[value] = true;
                parent[value] = temp;
                queue.push(value);
            }
        }
    }

    let currNode = dest;
    let ans = [];
    ans.push(currNode);

    while (currNode !== src) {
        currNode = parent[currNode];
        ans.push(currNode);
    }

    return ans.reverse();

};

const shortestPath = () => {
    // const adj = {
    //     1: [2,3,4],
    //     2: [1,5],
    //     3: [1,8],
    //     4: [1,6],
    //     5: [2,8],
    //     6: [4,7],
    //     7: [6,8],
    //     8: [3,5,7],
    // }

    const adj = {
        0: [1,2],
        1: [3,2],
        2: [3,4,5],
        3: [4],
        4: [5],
        5: [],
    }

    const visited = {};
    const parent = {};

    for (let key of Object.keys(adj)) {
        visited[key] = false;
    }

    let ans = bfsPath(adj, visited, parent, 1, 5);

    console.log(ans);
}

// shortestPath();


// Print All Paths from src to target in a Directed Graph

const dfsPath = (graph, src, dest, res, temp) => {

    temp.push(src);

    if (src === dest) {
        res.push([...temp]);
        
    } else {

        for (let value of graph[src]) {

            dfsPath(graph, value, dest, res, temp);
        }
    }
    temp.pop();
}

const allPaths = () => {
    const adj = {
        1: [2,3,4],
        2: [5],
        3: [8],
        4: [6],
        5: [],
        6: [7],
        7: [8],
        8: [5],
    }


    const res = [];

    dfsPath(adj, 1, 5, res, []);

    console.log(res);
}

// allPaths();


// Shortest Path in weighted Directed Acyclic Graph (Topo Sort and BFS)

const prepareList = (edges, graph) => {
  
  for (const [source, dest, weight] of edges) {
    if (!graph[source]) {
      graph[source] = [];
    }
    
    graph[source].push({ dest, weight } );
    
    if (!graph[dest]) {
      graph[dest] = [];
    }
  }
  
};

const topoSort = (graph, visited, stack, src) => {

    visited[src] = true;

    for (let { dest, weight } of graph[src]) {
        if (!visited[dest]) {
            topoSort(graph, visited, stack, dest);
        }
    }

    stack.push(src);
};

const bfs = (graph, stack, dist, src) => {

    dist[src] = 0;

    while (stack.length) {
        let top = stack.pop();

        if (dist[top] !== Number.MAX_VALUE) {

            for (let { dest, weight } of graph[top]) {

                // By reversing this condition below we can find longest path in DAG
                // Also we have to set all dist values to MIN_VALUE in all of the Program

                if (dist[top] + weight < dist[dest]) { 
                    dist[dest] = dist[top] + weight;
                }
            }
        }
    }
};

const shortestPathDistInDAC = () => {
    const edges = [
        [0,1,5],
        [0,2,3],
        [1,2,2],
        [1,3,6],
        [2,3,7],
        [2,4,4],
        [2,5,2],
        [3,4,-1],
        [4,5,-2],
    ];

    const adj = {};

    prepareList(edges, adj);

    const visited = {};
    const dist = {};

    for (let key of Object.keys(adj)) {
        visited[key] = false;
        dist[key] = Number.MAX_VALUE;
    }

    const stack = [];

    for (let key of Object.keys(adj)) {
        if (!visited[key]) {
            topoSort(adj, visited, stack, parseInt(key));
        }
    }

    bfs(adj, stack, dist, 1);

    console.log(dist);

};

// shortestPathDistInDAC();

