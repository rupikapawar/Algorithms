const allConstruct = (target, wordBank) => {
    if(target === '') return [[]];
    const result = [];
    for(let word of wordBank) {
        
        if(target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);
            const suffixWays = allConstruct(suffix, wordBank);
            const targetWays = suffixWays.map(way => [word, ...way]);
            result.push(...targetWays);
        }
    }
    return result;
}

const res = allConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl', 'e']);
console.log(res);




const allConstructOptimize = (target, wordBank, memo={}) => {
    if(target in memo) return memo[target];
    if(target === '') return [[]];
    const result = [];
    for(let word of wordBank) {
        
        if(target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);
            const suffixWays = allConstructOptimize(suffix, wordBank, memo);
            const targetWays = suffixWays.map(way => [word, ...way]);
            result.push(...targetWays);
        }
    }
    memo[target] = result;
    return result;
}

const res1 = allConstruct('aaaaaaaaaaaaaa', ['aa', 'a','a',]);
console.log(res1);

// purple, ['purp', 'p', 'ur', 'le', 'purpl'];
// [
//     ['purp', 'le'],
//     ['p', 'ur', 'p', 'le']
// ]

// m: target.length
// n: wordBank.length

// Brute Force
// TIme: O(n^m)
// Space: O(m)

// Memorized
// TIme: O(n^m)
// Space: O(m)
