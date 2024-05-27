const longestSubString = (window, str) =>{
    let i = 0;
    let j = 0;
    let max = 0;
    let map = {};
    let uniqueKey  = 0
    while( j< str.length ){
        if(uniqueKey < window) {
            if(str[j] in map ){
                map[str[j]]++;
            }
            else {
                map[str[j]] = 1;
                uniqueKey++;
            }
            j++;
        }

        if(uniqueKey === window) {
            while(str[j] in map) {
                map[str[j]]++;
                j++;
            }
            max = Math.max(max, j-i);
            map[str[i]]--;
            if(map[str[i]] === 0) uniqueKey--;
            i++;
        }
        // j++;


        console.log(map, max, uniqueKey);
    }
    return max;
}

//  aabacbebebe
// abebebe -> 7

const res  = longestSubString(3, 'aabacb');
console.log(res);