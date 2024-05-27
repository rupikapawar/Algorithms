console.log("-------Fibonacci Series--------");
// 1 1 2 3 5 8 13 21 34
// Time complexity O(2^n)
// Space complexity O(n)

const fib = (n) => {
    if (n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}


const result  = fib(4)
console.log("Fib of 4 is ", result);

console.log("-------Fibonacci Series By Dynamic Programming--------");


const fibonacci = (n, memo = {}) => {
    if(n in memo) return memo[n];
    if (n <= 2) return 1;
    memo[n] = fibonacci(n-1, memo) + fibonacci(n-2, memo);
    return memo[n];
}

console.log("Fib of 4 is ", fibonacci(40));
