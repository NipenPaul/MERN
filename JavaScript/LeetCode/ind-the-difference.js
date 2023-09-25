/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    s = s.split('').sort().join('');
    t = t.split('').sort().join('');
    let i = 0;
    for(let j = 0; j < t.length; j++){
        if(i < s.length && s[i] == t[j]){
            i++;
            continue;
        }
        return t[j];
    }
    return t[t.length-1];
};