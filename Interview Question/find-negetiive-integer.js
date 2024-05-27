// Amazon Question
// Find the number of negative integer
// In a row-wise and column-wise sorted matrix

// Input: 
// [-3, -2, -1, 1]
// [-2, 2,  3, 4]
// [4, 5 , 7,  8]

// Output: 4

// Time: O(nm)


const countNegative = (arr) => {
    let count = 0;
    const row = arr[0].length;
    const column = arr.length;
    let i = 0;
    let j = row-1;

    while (i<column && j>= 0) {
        if(arr[i][j] < 0){
            count+= j+1;
            i++;
        }
        else {
            j--;
        }
    }
    return count;
}

const res = countNegative([
    [-3, -2, -1, 1],
    [-2, 2,  3, 4],
    [4, 5 , 7,  8]
])
console.log(res);




//Time: O(n+m)