// Check if Path exist in a Undirected Graph

const pathDFS_UD = (graph, visited, current, target) => {
    
    visited[current] = true;
    if (current === target) {
        return true;
    }
    for (let value of Object.values(graph[current])) {

        if (!visited[value]) {
            let ans = pathDFS_UD(graph, visited, value, target);
            if (ans)  return ans;
        }
    }

    return false;
};

const hasPathUD = () => {
    const adj = {
        1: [2,3],
        2: [1,3],
        3: [1,2,4],
        4: [3,5,6],
        5: [4],
        6: [4],
        7: [8],
        8: [7],
    };

    const visited = {};

    for (let key of Object.keys(adj)) {
        visited[key] = false;
    }

    let ans = pathDFS_UD(adj, visited, 1, 6);
    console.log(ans);
};

// hasPathUD();


// Check if Path exist in a Directed Graph
// Same above code

const pathDFS_D = (graph, visited, current, target) => {
    
    visited[current] = true;
    if (current === target) {
        return true;
    }
    for (let value of Object.values(graph[current])) {

        if (!visited[value]) {
            let ans = pathDFS_D(graph, visited, value, target);
            if (ans)  return ans;
        }
    }

    return false;
};

const hasPathD = () => {
    const adj = {
        1: [2,3],
        2: [4],
        3: [2],
        4: [6],
        5: [4],
        6: [],
    };

    const visited = {};

    for (let key of Object.keys(adj)) {
        visited[key] = false;
    }

    let ans = pathDFS_D(adj, visited, 1, 6);
    console.log(ans);
};

// hasPathD();


// BFS
// Check if Path exist in a Directed Graph using BFS

const pathBFS_D = (graph, visited, current, target) => {

    const queue = [current];
    visited[current] = true;
    let temp;

    while (queue.length > 0) {
        temp = queue.shift();
        if (temp === target) {
            return true;
        }

        for (let value of graph[temp]) {
            if (!visited[value]) {
                visited[value] = true;

                queue.push(value);
            }
        }
    }

    return false;
}

const hasPathD_BFS = () => {
    const adj = {
        1: [2,3],
        2: [4],
        3: [2],
        4: [6],
        5: [4],
        6: [],
    };

    const visited = {};

    for (let key of Object.keys(adj)) {
        visited[key] = false;
    }

    let ans = pathBFS_D(adj, visited, 1, 6);
    console.log(ans);
};

hasPathD_BFS();

