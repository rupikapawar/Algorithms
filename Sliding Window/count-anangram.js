// Count no. of anagram from subArray of a given String
const countAnagram = (pattern, str) => {
    let i =0;
    let j = 0;
    let output=0;
    const neededChar = pattern.split('').reduce((acc, curr) => {
        acc[curr] ? acc[curr]+=1: acc[curr] = 1;
        return acc;
    },{});
    let res = 0;
    let count = pattern.length; 
    while (j< str.length) {
        if(neededChar[str[j]]> 0){
            count--;
            neededChar[str[j]]--;
        }
        
        if(j-i+1 === pattern.length) {
            if(count === 0) output++;
            if(neededChar[str[i]]>=0) count++;
            // if(str[j] in neededChar) neededChar[str[j]]++;
            str[i] in neededChar  && neededChar[str[i]]++;
            i++;
        }
        console.log(str[j], neededChar, count);
        j++;
        
    }
    return output;
}







var findAnagrams = function (s, p) {
 // initialize output array to be returned at the end and neededChars object to store the chars in p.
 const output = [];
 const neededChars = {};

 // populate neededChars to contain every char in p as a key and how many times that char appears in p as its value.
 for (let char of p) neededChars[char] = (neededChars[char] || 0) + 1;
 console.log(neededChars);
  
 // initialize window pointers and the total number of chars needed to form an anagram.
  let windowStart = 0;
  let windowEnd = 0;
  let count = p.length;

 // start sliding the window
 while (windowEnd < s.length) {

  // if the current char is found in p and is currently needed (meaning that its value in neededChars is bigger than 0), 
  // then decrease the count which is the total number of chars that are needed and that still haven't been found.
  if (neededChars[s[windowEnd]] > 0) {
    count--;
  }

  // decrease the needed amount for the current char and move the window's right end one step forward.
    s[windowEnd] in neededChars && neededChars[s[windowEnd]]--;

  // at first, the window will increase its length by taking steps forward with its right end.
  // after the window length reaches p's length for the first time,
  // the window will start moving forward like a caterpillar with the left end moving first. 
  if (windowEnd - windowStart + 1 === p.length) {
     // if the count is 0, this means that there is an anagram starting at the left index so push left into the output           array.
    if (count === 0) output.push(windowStart);

     // if the char we need to remove from left is a needed char, increase the total number of chars currently needed to form an anagram.
     if (neededChars[s[windowStart]] >= 0) count++;
      // the lines below are the most important to understand: 
      // every time a needed char is left behind (outside the window) as the window moves forward to search the rest of the       string, 
      // increment that char's value in the neededChars object (restore the need for that char for the window's future           reference).
       
       s[windowStart] in neededChars  && neededChars[s[windowStart]]++;
      windowStart++;
     }
   windowEnd++;
 }
 return output;
};

const res = countAnagram('abaa','abscaaba');
console.log(res);