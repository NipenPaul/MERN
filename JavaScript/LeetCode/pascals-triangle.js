/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const arr = [];
    var v = [];

    v.push(1);
    arr.push([1]);

    if(numRows == 1) return arr;

    v.push(1);
    arr.push(v);

    if(numRows == 2) return arr;

    for(let i = 3; i <= numRows; i++){
        const v2 = [];
        v2.push(1);
        for(let j = 0; j < i-2; j++){
            v2.push(v[j]+v[j+1]);
        }
        v2.push(1);
        arr.push(v2);
        v = [];
        v = [...v2];
    }
    return arr;
};