const canSum = (targetSum, numbers) => {
    const table = Array(targetSum + 1).fill(false);
    table[0] = true;
    for (let i = 0; i <= targetSum; i++) {
        if(table[i] === true) {
            for (const num of numbers) {
                table[i+num] = true;
            }
        }
    }
    return table[targetSum]
}


const res = canSum(9, [5,3,4]);
const res2 = canSum(100, [7, 14]);

console.log(res);
console.log(res2);
