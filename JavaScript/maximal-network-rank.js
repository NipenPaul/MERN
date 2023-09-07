/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var maximalNetworkRank = function(n, roads) {
    const adj = {};

    for(let i = 0; i < n; i++){
        adj[i] = [];
    }

    const mp = {}

    for(let u of roads){
        adj[u[0]].push(u[1]);
        adj[u[1]].push(u[0]);
        mp[JSON.stringify([u[0], u[1]])] = 1;
        mp[JSON.stringify(u[1], u[0])] = 1;
    }

    var ans = 0;
    for(let i = 0; i < n; i++){
        for(let j = i+1; j < n; j++){
            var cal = adj[i].length + adj[j].length;
            if(JSON.stringify([i, j]) in mp || JSON.stringify([j, i]) in mp){
                cal -= 1;
            }
            ans = Math.max(ans, cal);
        }
    }
    return ans;
};
