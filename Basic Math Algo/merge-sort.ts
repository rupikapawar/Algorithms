
console.log(merge([-6,20, 8, -2, 4]));
console.log(merge([-6,20, 8, -2, 4, 5, 8, 2, -9, -0, 98]));

function merge(arr) {
    if(arr.length < 2) return arr;
    const mid  = Math.floor(arr.length/2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
    return  sort(merge(left), merge(right))

}

function sort(left, right) {
    const temp: number [] = [];
    while(left.length && right.length) {
        if(left[0] <= right[0]) temp.push(left.shift());
        else temp.push(right.shift())
    }
    return [...temp, ...left, ...right];
}