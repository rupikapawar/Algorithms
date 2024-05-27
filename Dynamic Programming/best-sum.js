const bestSum = (target, numbers) => {
    if(target === 0) return [];
    if(target < 0) return null;
    let shortestCombination = null;
    for(let num of numbers) {
        const remainder = target - num;
        const remainderCombination = bestSum(remainder, numbers);
        if(remainderCombination !== null ){
            const combination =[...remainderCombination, num];
            if(shortestCombination === null || combination.length < shortestCombination.length) {
                shortestCombination = combination;
            }
        }
    }
    return shortestCombination;
}

const res = bestSum(7, [5,3,4,7]);
console.log(res);



const bestSumOptimized = (target, numbers, memo= {}) => {
    if(target in memo) return memo[target];
    if(target === 0) return [];
    if(target < 0) return null;
    let shortestCombination = null;
    for(let num of numbers) {
        const remainder = target - num;
        const remainderCombination = bestSum(remainder, numbers, memo);
        if(remainderCombination !== null ){
            const combination =[...remainderCombination, num];
            if(shortestCombination === null || combination.length < shortestCombination.length) {
                shortestCombination = combination;
            }
        }
    }
    memo[target] = shortestCombination;

    return shortestCombination;
}

const res2 = bestSumOptimized(7, [5,3,4,7]);
console.log(res2);

// bestSum(7, [5,3,4,7]); -> [7]

// m: target sum
// n: numbers.length

// Brute Force
// Time: O(n^m * m)
// Space: O(m^2)

// Memoization
// Time: O(m^2 *n)
// Space: O(m^2)
