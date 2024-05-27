const canSum = (target, numbers) => {
    if(target === 0) return true;
    if(target < 0) return false;
    for(let num of numbers) {
        const remainder = target - num;
        if (canSum(remainder, numbers) === true) return true;
    }
    return false;
}

const res = canSum(7, [5,3,4,7]);
console.log(res);

// canSum(7, [5,3,4,7]) -> true

const canSumOptimize = (target, numbers, memo = {}) => {
    if(target in memo) return true;
    if(target === 0) return true;
    if(target < 0) return false;
    for(let num of numbers) {
        const remainder = target - num;
        if (canSum(remainder, numbers, memo) === true) {
            memo[target]  = true;
            return true;
        }
    }
    memo[target] = false;
    return false;
}

const res2 = canSumOptimize(8, [2,2,2,3,5]);
console.log(res2);




// m: target sum
// n: numbers.length

// Brute Force
// Time: O(n^m)
// Space: O(m)

// Memoization
// Time: O(m*n)
// Space: O(m)
