var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
console.log(quick([-6, 20, 8, -2, 4]));
console.log(quick([-6, 20, 8, -2, 4, 5, 8, 2, -9, -0, 98]));
function quick(array) {
    if (array.length < 2)
        return array;
    var pivot = array[array.length - 1];
    var left = [];
    var right = [];
    for (var index = 0; index < array.length - 1; index++) {
        var element = array[index];
        if (element < pivot)
            left.push(element);
        else
            right.push(element);
    }
    return __spreadArray(__spreadArray(__spreadArray([], quick(left), true), [pivot], false), quick(right), true);
}
