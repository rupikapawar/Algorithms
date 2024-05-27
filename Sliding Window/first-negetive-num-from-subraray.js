// Find first -ve number from sub Array from a given list
const findNegative = (k, numbers) => {
    let i =0;
    let j = 0;
    const memory =[];
    const result = [];
    while(j< numbers.length) {
        if(j-i+1 < k) {
            if(numbers[j] < 0 ) memory.push(numbers[j]);
            j++;
        }
        if(j-i+1 === k) {
            if(numbers[j] < 0 ) memory.push(numbers[j]);
            !memory.length ? result.push(0): result.push(memory[0]);
            if(memory[0] === numbers[i]) memory.shift();
            i++; j++;

        }
    }

    return result;
}

const res = findNegative(3,[12,-1,-7,9,9,10,20,30]);
console.log(res);

// Complexity
// Time: O(n);
// Space : O(n+m)