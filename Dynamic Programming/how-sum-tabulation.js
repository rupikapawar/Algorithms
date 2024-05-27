const howSum = (target, numbers) => {
    const table =  Array(target+1).fill(null);
    table[0] = [];
    for (let i = 0; i <= target; i++) {
        if(table[i] !== null) {
            for (const num of numbers) {
                table[i+num] = [...table[i],num];                
            }
        }        
    }
    return table[target];
}

const res2 = howSum(7, [5,3,4,7]);
console.log(res2);