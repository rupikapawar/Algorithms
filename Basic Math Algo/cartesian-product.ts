
console.log(product([1,2], [3,4]));

function product(A, B) {
    const res: any = [];
    for(let  i = 0; i< A.length ; i++) {
        for (let j = 0; j < B.length; j++) {
            res.push([A[i], B[j]])
            
        }
    }
    return res;

}