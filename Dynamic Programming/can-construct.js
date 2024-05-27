const canConstruct = (target, wordBank) => {
    if(target === '') return true;
    for (let word of wordBank) {
        if(target.indexOf(word)===0) {
            const suffix = target.slice(word.length);
            if(canConstruct(suffix, wordBank) === true) {
                return true;
            }
        }
    }
    return false;
}

const res = canConstruct('abcdef', ['ab', 'abc', 'cd','def', 'abcd', 'ef']);
console.log(res);


const canConstructOptimize = (target, wordBank, memo= {}) => {
    if(target in memo) return memo[target];
    if(target === '') return true;

    for (let word of wordBank) {
        if(target.indexOf(word)===0) {
            const suffix = target.slice(word.length);
            if(canConstruct(suffix, wordBank, memo) === true) {
                memo[target] = true;
                return true;
            }
        }
    }
    memo[target] = false;
    return false;
}

const res2 = canConstructOptimize('abcdef', ['ab', 'abc', 'cd','def', 'abcd', 'ef']);
console.log(res2);


// m: target.length
// n: wordBank.length

// Brute Force
// Time: O(n^m * m)
// Space: O(m^2)


// Brute Force
// Time: O(n * m^2)
// Space: O(m^2)
