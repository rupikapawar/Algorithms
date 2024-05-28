var graph = {
    a: ['c', 'b'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
};
depthFirst(graph, 'a');
console.log("recursion");
recursionDFS(graph, 'a');
function depthFirst(graph, source) {
    var stack = [source];
    while (stack.length > 0) {
        var current = stack.pop();
        console.log(current);
        for (var _i = 0, _a = graph[current]; _i < _a.length; _i++) {
            var neighbor = _a[_i];
            stack.push(neighbor);
        }
    }
}
function recursionDFS(graph, source) {
    console.log(source);
    for (var _i = 0, _a = graph[source]; _i < _a.length; _i++) {
        var neighbor = _a[_i];
        recursionDFS(graph, neighbor);
    }
}
