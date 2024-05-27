// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Incrementing by one gives 123 + 1 = 124.
// Thus, the result should be [1,2,4].


// Input: digits = [9]
// Output: [1,0]
// Explanation: The array represents the integer 9.
// Incrementing by one gives 9 + 1 = 10.
// Thus, the result should be [1,0].

const plusOne =  (arr) => {
    let carry = 1;
    let result = Array(arr.length);
    for (let i = arr.length -1 ; i >= 0; i--) {
        const total = arr[i] + carry;
        if(total === 10) carry= 1;
        else carry = 0;
        result[i] = total%10;
    }
    
    if(carry === 1) {
        result = [1, ...result];
    };
    return result;
}

const res =  plusOne([9,9,9])
console.log(res);