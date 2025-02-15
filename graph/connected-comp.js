// dfs

const dfs = (graph, visited, curr) => {

    visited[curr] = true;

    for (let value of graph[curr]) {

        if (!visited[value]) {
            dfs(graph, visited, value);
        }
    }
}

const connectedComps = () => {
    const adj = {
        3: [],
        4: [6],
        6: [4,5,7,8],
        8: [6],
        7: [6],
        5: [6],
        1: [2],
        2: [1],
    }

    const visited = {};

    for (let key of Object.keys(adj)) {
        visited[key] = false;
    }

    let count = 0;

    for (let key of Object.keys(adj)) {
        if (!visited[key]) {
            count++;
            dfs(adj, visited, key);
        }
    }

    console.log(count);

};

// connectedComps();


// Largest Component in a graph

const dfsTraverse = (graph, visited, curr, size) => {

    visited[curr] = true;
    size[0]+=1;

    for (let value of graph[curr]) {

        if (!visited[value]) {
            dfsTraverse(graph, visited, value, size);
        }
    }
}

const largestComp = () => {
    const adj = {
        0: [8,1,5],
        1: [0],
        5: [0,8],
        8: [0,5],
        2: [3,4],
        3: [2,4],
        4: [3,3],
    }

    const visited = {};

    for (let key of Object.keys(adj)) {
        visited[key] = false;
    }

    let max = 0;
    let size;

    for (let key of Object.keys(adj)) {
        if (!visited[key]) {
            size = [0];
            dfsTraverse(adj, visited, key, size);
            max = Math.max(max, size[0]);
        }
    }


};

largestComp();

