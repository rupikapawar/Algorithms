const countConstruct = (target, wordBank, memo={}) => {
    if(target in memo) return memo[target];
    if(target === '') return 1;
    let totalCount = 0;

    for(word of wordBank) {
        if (target.indexOf(word) === 0) {
            const count = countConstruct(target.slice(word.length), wordBank, memo);
            totalCount += count;
            memo[target] = totalCount;
            
        }
    }
    memo[target] = totalCount;
    return totalCount;
}

const res = countConstruct('abcdef', ['ab', 'abc', 'cd','def', 'abcd', 'ef']);
const res2 = countConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'eeee', 'eeeeeee']);
const res3 = countConstruct('aabbccddeeff', ['aa', 'a', 'b', 'c', 'd', 'e', 'f']);

console.log(res);
console.log(res2);
console.log(res3);


// cdef, [ab, abc, cd, def, abcd] -> 1
// eeeeeee, [e] -> 1

// Brute Force
// TIme: O(n^m * m)
// Space: O(m^2)

// Memorized
// TIme: O(n * m^2)
// Space: O(m^2)