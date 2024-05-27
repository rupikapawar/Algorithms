console.log(sort([-6, 20, 8, -2, 4]));
console.log(sort([-6, 20, 8, -2, 4, 5, 8, 2, -9, -0, 98]));
function sort(array) {
    var swapped;
    do {
        swapped = false;
        for (var i = 0; i < array.length; i++) {
            if (array[i] > array[i + 1]) {
                var temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
    return array;
}
