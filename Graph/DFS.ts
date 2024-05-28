const dfsgraph = {
    a: ['c','b'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
}

depthFirst(dfsgraph, 'a')
console.log("recursion");

recursionDFS(dfsgraph, 'a')


function depthFirst(graph, source) {
    const stack = [source];

    while(stack.length  > 0) {
        const current = stack.pop();
        console.log(current);

        for(let neighbor of graph[current]) {
            stack.push(neighbor);
        }
    }
}

function recursionDFS(graph, source) {
    console.log(source);
    for(let neighbor of graph[source]) {
        recursionDFS(graph, neighbor)
    }
    
}