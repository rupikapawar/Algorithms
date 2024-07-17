const bfsgraph = {
    a: ['b','c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
}

breadthFirstSearch(bfsgraph, 'a')
console.log("recursion");

recursionBFS(bfsgraph, 'a')


function breadthFirstSearch(graph, source) {
    const queue = [source];

    while(queue.length  > 0) {
        const current = queue.shift();
        console.log(current);
        queue.push(...graph[current])

        // for(let neighbor of graph[current]) {
        //     queue.push(neighbor);
        // }
    }
}

function recursionBFS(graph, source) {
    console.log(source);
    for(let neighbor of graph[source]) {
        recursionBFS(graph, neighbor)
    }
    
}