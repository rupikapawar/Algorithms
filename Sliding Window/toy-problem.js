const toyProblem = (type, str) =>{
    let i = 0;
    let j = 0;
    let max = 0;
    let map = {};
    while( j< str.length ){
        if(str[j] in map ){
            map[str[j]]++;
        }
        else {
            map[str[j]] = 1;
        }
        if(Object.keys(map).length <= type) {
            max = Math.max(max, j-i+1);
            j++;
        }
        else if(Object.keys(map).length > type) {
            while(Object.keys(map).length > type) {
                map[str[i]]--;
                if(map[str[i]] === 0) delete map[str[i]];
                i++;
            }
            j++;
        }

    }
    return max;
}

//  aabacbebebe
// abebebe -> 7

const res  = toyProblem(2, 'abaccab');
console.log(res);