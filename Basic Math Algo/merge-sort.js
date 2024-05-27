var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
console.log(merge([-6, 20, 8, -2, 4]));
console.log(merge([-6, 20, 8, -2, 4, 5, 8, 2, -9, -0, 98]));
function merge(arr) {
    if (arr.length < 2)
        return arr;
    var mid = Math.floor(arr.length / 2);
    var left = arr.slice(0, mid);
    var right = arr.slice(mid);
    return sort(merge(left), merge(right));
}
function sort(left, right) {
    var temp = [];
    while (left.length && right.length) {
        if (left[0] <= right[0])
            temp.push(left.shift());
        else
            temp.push(right.shift());
    }
    return __spreadArray(__spreadArray(__spreadArray([], temp, true), left, true), right, true);
}
