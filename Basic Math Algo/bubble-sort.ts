
console.log(bubble([-6,20, 8, -2, 4]));
console.log(bubble([-6,20, 8, -2, 4, 5, 8, 2, -9, -0, 98]));

function bubble(array) {
    let swapped;
    do {
        swapped = false;
        for(let i = 0; i< array.length; i++) {
            if(array[i] > array[i+1]) {
                const temp = array[i]
                array[i] = array[i+1];
                array[i+1] = temp;
                swapped = true;
            }
        }
    } while(swapped)

    return array;
}