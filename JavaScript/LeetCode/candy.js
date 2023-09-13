/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    const n = ratings.length;
    var v = new Array(n).fill(1);
    let ans = 0;
    for(let i = 1; i < n; i++){
      if(ratings[i-1] < ratings[i]){
        v[i] = v[i-1]+1;
      }
    }
    for(let i = n-1; i > 0; i--){
      if(ratings[i] < ratings[i-1] && v[i] >= v[i-1]){
        v[i-1] = v[i] + 1;
      }
    }
    for(let i = 0; i < n; i++){
      ans += v[i];
    }
    return ans;
};