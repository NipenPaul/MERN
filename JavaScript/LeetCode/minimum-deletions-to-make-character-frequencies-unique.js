/**
 * @param {string} s
 * @return {number}
 */
var minDeletions = function(s) {
    let mp = {};
    let ans = 0;
    for(let i = 0; i < s.length; i++){
        if(mp[s[i]] == undefined){
            mp[s[i]] = 1;
        }else{
            mp[s[i]] += 1;
        }
    }
    let vec = [];
    for(let x in mp){
        vec.push(mp[x]);
    }
    vec.sort();
    vec.reverse();
    let vis = new Array(s.length+1).fill(0);
    for(let x of vec){
        while(vis[x] != 0 && x > 0){
            x--;
            ans++;
        }
        vis[x] = 1;
    }
    return ans;
};