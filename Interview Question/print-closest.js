// Input:  ar1[] = {1, 4, 5, 7};
//         ar2[] = {10, 20, 30, 40};
//         x = 32      
// Output:  1 and 30

// Input:  ar1[] = {1, 4, 5, 7};
//         ar2[] = {10, 20, 30, 40};
//         x = 50      
// Output:  7 and 40

const printClosest = (arr1, arr2, x) => {
    let diff = Number.MAX_VALUE;
    let row = arr1.length -1;
    let col = 0;
    let res1; 
    let res2;
    while (col < arr2.length && row >= 0) {
        if(Math.abs(arr1[row]+ arr2[col] - x) < diff) {
            res1 = arr1[row];
            res2 = arr2[col];
            diff= Math.abs(arr1[row]+ arr2[col] - x)
        }
        if(arr1[row]+ arr2[col] > x) row--;
        else col++;
    }
    return [res1, res2]
}

const res = printClosest([1,4,5,7], [10,20,30,40], 32)
console.log(res);