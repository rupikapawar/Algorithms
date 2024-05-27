// Find maz sum of subArray
const maxSum = (window, numbers) => {
    let start = 0;
    let end = 0;
    let maxSum = 0;
    let sum = 0;
    while(end< numbers.length) {
        if(end-start+1 < window) {
            sum += numbers[end];
            end++;
        }
        else if(end-start+1 === window ) {
            end++;
            start++;
            sum = sum+numbers[end]- numbers[start];
            if(sum>maxSum) {
                maxSum=sum;
            }
        }

    }
    return maxSum;
}

const res = maxSum(3,[2,5,1,8,2,9,10]);
console.log(res);


// end-start+1 = window;
// Complexity
// Time:  O(n)
// Space: O(1)