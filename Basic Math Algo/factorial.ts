
const n =5;
console.log(factorial(n));
console.log(recFact(n));



function factorial(n: any) {
    let result = 1;
    for(let i=1; i<n+1; i++) {
        result = result*i;
    }
    return result;
}

function recFact(n) {
    if(n < 2) return 1;
    return n * recFact(n-1);
}