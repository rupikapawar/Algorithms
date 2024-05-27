// Find first recurring character from String
// "ABCA" -> "A"
// "BCABA" ->  "B"
// "ABC" -> null

const FirstRecurringChar = (str) => {
    const set = new Set();
    for (let char of str) {
        if(set.has(char)) return char;
        set.add(char);
    }
    return null
}

const res =  FirstRecurringChar("ABCA");
const res1 =  FirstRecurringChar("BCABA");
const res2 =  FirstRecurringChar("ABC");


console.log({res},{res1},{res2});

// Time: O(n) -> while loop
// Space: O(1) -> set