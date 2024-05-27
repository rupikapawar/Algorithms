const bestSum = (target, numbers) => {
	const table = Array(target+1).fill(null);
	table[0] = [];
	for(let i = 0; i<= target; i++) {
		if(table[i] !== null) {
			for(num of numbers) {
				const combination = [...table[i], num]
				if(!table[i+num] || table[i+num].length > combination.length ) {
					table[i+num] = combination;
                }
            }
        }
    }
    return table[target];
}


const res = bestSum(7, [5,3,4,7]);
console.log(res);
