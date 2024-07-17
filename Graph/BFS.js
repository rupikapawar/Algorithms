var bfsgraph = {
    a: ['b', 'c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
};
breadthFirstSearch(bfsgraph, 'a');
console.log("recursion");
recursionBFS(bfsgraph, 'a');
function breadthFirstSearch(graph, source) {
    var queue = [source];
    while (queue.length > 0) {
        var current = queue.shift();
        console.log(current);
        queue.push.apply(queue, graph[current]);
        // for(let neighbor of graph[current]) {
        //     queue.push(neighbor);
        // }
    }
}
function recursionBFS(graph, source) {
    console.log(source);
    for (var _i = 0, _a = graph[source]; _i < _a.length; _i++) {
        var neighbor = _a[_i];
        recursionBFS(graph, neighbor);
    }
}
