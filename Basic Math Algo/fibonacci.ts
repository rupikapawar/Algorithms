
const num =3;
console.log(fibonacci(num));
console.log(recFib(num));



function fibonacci(n: any) {
    if(n==1) return [0];
    if(n==2) return [0, 1];
    const result= [0,1];
    for(let i=2; i<n; i++) {
        const curr = result[i-1]+ result[i-2];
        result.push(curr);
    }
    return result;
}


function recFib(n) {
    if(n< 2) return n;
    return recFib(n-1) + recFib(n-2);
}