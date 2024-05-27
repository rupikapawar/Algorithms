const findLargest = (window, array) => {
    let i = 0;
    let j = 0;
    const max = [];
    const result = [];
    while(j< array.length) {
        //remove all the elements which are less the elm at j
        while (max.length > 0 && max[max.length-1]< array[j]) max.pop();
        max.push(array[j]);
        if(j-i+1 < window) j++;
        
        else if(j-i+1 === window ){
            //push the max to res array (which is stored in front of list)
            result.push(max[0]);
            if(max[0] === array[i]) max.shift();
            i++;
            j++;
        }
    }
    return result;
}
const res  = findLargest(3, [1,6,9,5,1,1,5,3,7]);
console.log(res);

// window 3
// array [1,2,6,9,1,1,5,6,7]