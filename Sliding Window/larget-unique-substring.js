const largestUniqueSubstring = (s) => {
    let i = 0;
    let j = 0;
    const set =  new Set();
    let max = 0;
    while (j< s.length) {
        if(!set.has(s[j])) {
            set.add(s[j]);
            max = Math.max(max, j-i+1);
            j++;
        } else {
            set.delete(s[i]);
            i++;
        }
    }
    return max;
}

// abcabcbb
// 3
 const res = largestUniqueSubstring('abcabcbb');
 console.log(res);