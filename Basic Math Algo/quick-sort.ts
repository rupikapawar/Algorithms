
console.log(quick([-6,20, 8, -2, 4]));
console.log(quick([-6,20, 8, -2, 4, 5, 8, 2, -9, -0, 98]));

function quick(array) {
    if(array.length < 2) return array;
    const pivot = array[array.length - 1];
    const left: number[] = [];
    const right: number[] = [];
    for (let index = 0; index < array.length - 1; index++) {
        const element = array[index];
        if(element < pivot) left.push(element);
        else right.push(element)   
    }
    return [...quick(left), pivot, ...quick(right)];
}