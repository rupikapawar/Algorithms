// A message containing letters from A-Z is being encoded to numbers using the following mapping:

// Input:  digits[] = "121"
// Output: 3
//  The possible decodings are "ABA", "AU", "LA"

// Input: digits[] = "1234"
// Output: 3
// The possible decodings are "ABCD", "LCD", "AWD"


const numDecodings = (digit) => {
    const len =  digit.length;
    const memo = Array(len).fill(null);
    return countDecode(digit, len, memo);
}

const countDecode = (digit, k, memo) => {
    // base cases
    if(k <=1) return 1;
    
    let s = digit.length - k;
    // for base condition "01123" should return 0
    if(digit[s] === '0') return 0;
    
    if(memo[s] !== null) return memo[s];
    
    let count = 0;
    // If the last digit is not 0, then last digit must add to the number of words
    count = countDecode(digit, k-1, memo);
    // If the last two digits form a number smaller than or equal to 26, then consider last two digits and recur
    if(k >= 2 && +`${digit[s]}${digit[s+1]}`){
        count += countDecode(digit, k-2, memo);
    }
    memo[k] = count;

    return count;
}

const res = numDecodings('1234');
console.log(res);

// Time O(n)