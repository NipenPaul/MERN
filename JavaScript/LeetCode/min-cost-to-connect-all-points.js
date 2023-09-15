/**
 * @param {number[][]} points
 * @return {number}
 */
class Pair{
    constructor(u, v, cost){
        this.u = u;
        this.v = v;
        this.cost = cost;
    }
}
var minCostConnectPoints = function(points) {
   const n = points.length;
   const edge = [];
   for(let i = 0; i < n; i++){
       for(let j = i+1; j < n; j++){
           let dis = Math.abs(points[i][0] - points[j][0]) + Math.abs(points[i][1]-points[j][1]);
           edge.push(new Pair(i, j, dis));
       }
   }
   let ans = minimumSpanningTreeKruskal(n, edge);
   return ans;
};
function minimumSpanningTreeKruskal(n, edge){
   edge.sort((a, b)=>{
       return a.cost - b.cost;
   });
   // for(const s of edge){
   //     console.log("u = "+s.u+", v = "+s.v+" cost = " +s.cost+"\n");
   // }
   const parent = new Array(n);
   for(let i = 0; i < n; i++){
       parent[i] = i;
   }
   // Define find function (Disjoint Set Union)
   const find = (x) => {
       if (parent[x] === x) return x;
       return parent[x] = find(parent[x]);
   };
   let ans = 0;
   for(const s of edge){
       if(find(s.u) !== find(s.v)){
           ans += s.cost;
           parent[find(s.u)] = find(s.v);
       }
   }
   return ans;
};