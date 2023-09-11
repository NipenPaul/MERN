/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function(groupSizes) {
    const n = groupSizes.length;
    let adj = [];
    for(let i = 0; i <= n; i++){
        adj.push([]);
    }
    let ans = [];
    for(let i = 0; i < n; i++){
        adj[groupSizes[i]].push(i);
    }
    for(let i = 1; i <= n; i++){
        let v = [];
        for(let x of adj[i]){
            v.push(x);
            if(v.length == i){
                ans.push(v);
                v = [];
            }
        }
    }
    return ans;
};