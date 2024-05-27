console.log(insertion([-6, 20, 8, -2, 4]));
console.log(insertion([-6, 20, 8, -2, 4, 5, 8, 2, -9, -0, 98]));
function insertion(array) {
    var pointer = 0;
    do {
        pointer++;
        var i = pointer - 1;
        while (array[i] > array[i + 1] && i >= 0) {
            var temp = array[i + 1];
            array[i + 1] = array[i];
            array[i] = temp;
            i--;
            // console.log("arr", array);
        }
    } while (pointer !== array.length);
    return array;
}
