const countConstruct = (target, wordBank) => {
    const table = Array(target.length  + 1).fill(0);
    table[0] = 1;
    for (let i = 0; i <= target.length; i++) {
        for (let word of wordBank) {
            if (target.slice(i, i+word.length) === word) {
                table[i+ word.length] += table[i];
            }
        }
    }
    return table[target.length];
} 


const res = countConstruct('abcdef', ['ab', 'abc', 'cd','def', 'abcd', 'ef']);
const res2 = countConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'eeee', 'eeeeeee']);
const res3 = countConstruct('aabbccddeeff', ['aa', 'a', 'b', 'c', 'd', 'e', 'f']);

console.log(res);
console.log(res2);
console.log(res3);