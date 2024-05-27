// Input : point = [[3, 3], [5, -1], [-2, 4]], K = 2
// Output : [[3, 3], [-2, 4]]
// Square of Distance of origin from this point is 
// (3, 3) = 18
// (5, -1) = 26
// (-2, 4) = 20
// So the closest two points are [3, 3], [-2, 4].

// Input : point = [[1, 3], [-2, 2]], K  = 1
// Output : [[-2, 2]]
// Square of Distance of origin from this point is
// (1, 3) = 10
// (-2, 2) = 8 
// So the closest point to origin is (-2, 2)

// Consider two points with coordinates as (x1, y1) and (x2, y2) respectively. The Euclidean distance between these two points will be: 

// √{(x2-x1)2 + (y2-y1)2}


const closest = (points, k) => {
    let n = points.length;
    let distance = new Map();

    for (let i = 0; i< n; i++) {
        const x = points[i][0];
        const y = points[i][1];
        distance.set(Math.pow(x,2) + Math.pow(y,2), [x, y]);
    }
    const res= [...distance.keys()].sort(function(a, b){return a-b});
    for (let i = 0; i < k; i++) {
        console.log(distance.get(res[i]));
    }
}
closest([[1, 3], [-2, 2]], 2)
console.log("---------------");
closest([[3, 3], [5, -1], [-2, 4]], 2)
