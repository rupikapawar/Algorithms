console.log(product([1, 2], [3, 4]));
function product(A, B) {
    var res = [];
    for (var i = 0; i < A.length; i++) {
        for (var j = 0; j < B.length; j++) {
            res.push([A[i], B[j]]);
        }
    }
    return res;
}
