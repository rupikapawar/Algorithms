const howSum =  (target, numbers) => {
    if(target === 0) return [];
    if(target< 0) return null;

    for(let num of numbers) {
        const remainder = target-num;
        const remainderResult = howSum(remainder, numbers);
        if(remainderResult !== null) {
            return [...remainderResult, num];
        }
    }
    return null;
}

const res = howSum(7, [5,3,4,7]);
console.log(res);



const howSumOptimize =  (target, numbers, memo={}) => {
    if(target in memo) return memo[target];
    if(target === 0) return [];
    if(target< 0) return null;

    for(let num of numbers) {
        const remainder = target-num;
        const remainderResult = howSumOptimize(remainder, numbers, memo);
        if(remainderResult !== null) {
            memo[target] = [...remainderResult, num];
            return memo[target];
        }
    }
    memo[target] = null;
    return null;
}

const res2 = howSumOptimize(7, [5,3,4,7]);
console.log(res2);

// canSum(7, [5,3,4,7]) -> [4,3] or [7]

// m: targetSum;
// n: numbers.length;

// Brute Force
// Time: (n^m +m)
// Space: (m)

// Memoised
// Time: (n * m^2)
// Space: (m^2)