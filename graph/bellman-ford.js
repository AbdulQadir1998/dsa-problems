// https://www.geeksforgeeks.org/bellman-ford-algorithm-dp-23/

const pathBellman = (edges, dist, src, V) => {

    dist[src] = 0;

    for (let i = 1; i <= V-1; i++) {

        for (let [src, dest, weight] of edges) {

            if (dist[src] === Number.MAX_VALUE) {
                continue;
            }

            if (dist[src] + weight < dist[dest]) {
                dist[dest] = dist[src] + weight;
            }
        }

    }

    let flag = false;

    for (let [src, dest, weight] of edges) {
        
        if (dist[src] + weight < dist[dest]) {
            dist[dest] = dist[src] + weight;
            flag = true;
            break;
        }
    }

    return flag;
}

const bellmanFord = () => {

    const edges = [
        [0,1,-1],
        [0,2,4],
        [1,2,3],
        [1,3,2],
        [1,4,2],
        [3,2,5],
        [3,1,1],
        [4,3,-3]
    ];

    // Edges with negative cycle

    // const edges = [
    //     [1, 2, 3],
    //     [1, 3, 5],
    //     [2, 3, 1],
    //     [3, 4, 2],
    //     [4, 2, -6],
    // ];

    const V = 5;
    const src = 0;
    const dist = {};

    for (let i = 0; i < V; i++) {
        dist[i] = Number.MAX_VALUE;
    };

    const ans = pathBellman(edges, dist, src, V);

    if (!ans) {
        console.log(dist);
    } else {
        console.log('Graph contains negative cycle');
    }

};

// bellmanFord();

