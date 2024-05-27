const lenOfLongSubarray = (sum, array) => {
    let i = 0; let j = 0;
    let window = 0;
    let currentSum = 0;
    while (j< array.length) {
        currentSum = currentSum + array[j];
        if(currentSum > sum) { 
            while (currentSum >= sum) {
                currentSum = currentSum - array[i]; 
                i++;
            }
        }
        if(sum - currentSum ===0 && j-1+1 >= window){
            window = j-i+1; 
            currentSum = currentSum - array[i];
            i++;
        }
        j++;
    }
    return  window;
}

const res = lenOfLongSubarray(5,[1,3,1,2,3,1]);
console.log(res);