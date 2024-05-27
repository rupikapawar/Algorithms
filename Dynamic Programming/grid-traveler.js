const gridTraveler = (m, n) => {
    if(n===1 && m === 1) return 1;
    if(n==0 || m === 0) return 0;
    return gridTraveler(m-1, n) + gridTraveler(m, n-1);
}

const res = gridTraveler(2,3);
console.log(res);

// gridTraveler(2,3) -> 3


const gridTravelerOptimize = (m, n, memo={}) => {
    const key = m+','+n
    if(key in memo) return memo[key];
    if(n===1 && m === 1) return 1;
    if(n==0 || m === 0) return 0;
    memo[key] = gridTraveler(m-1, n, memo) + gridTraveler(m, n-1, memo);
    return memo[key]
}

const res2= gridTravelerOptimize(10,10);
console.log(res2);

// Brute Force
// Time: O(2^n+m)
// Space: O(n+m)

// Time: O(m*n)
// Space: O(n+m)
