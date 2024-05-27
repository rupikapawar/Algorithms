var array = [-5, 2, 4, 6, 10];
var find = 6;
var result = binary(array, find);
console.log(result);
function binary(array, find) {
    return search(array, find, 0, array.length - 1);
}
function search(array, find, leftIndex, rightIndex) {
    if (leftIndex > rightIndex)
        return -1;
    var midLen = Math.floor((leftIndex + rightIndex) / 2);
    if (array[midLen] === find)
        return midLen;
    else if (find < array[midLen])
        return search(array, find, leftIndex, midLen - 1);
    return search(array, find, midLen + 1, rightIndex);
}
