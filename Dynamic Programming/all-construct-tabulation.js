const allConstruct = (target, wordBank) => {
    const table = Array(target.length + 1).fill().map(() => []);
    table[0] = [[]];
    for (let i = 0; i <= target.length; i++) {
        for (const word of wordBank) {
            if (target.slice(i, i+word.length) === word) {
                const newCombination = table[i].map((subArray) => [...subArray, word])
                table[i + word.length].push(...newCombination);
            }
        }
    }
    return table[target.length];
}
const res = allConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl', 'e']);
console.log(res);

const res2 = allConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd', 'ef', 'c']);
console.log(res2);

// TIme: O(n^m)
// Space: O(n^m)

