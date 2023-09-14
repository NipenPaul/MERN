/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function(tickets) {
    const adj = new Map();
    const ans = [];
    for(const [src, dst] of tickets){
        if(!adj.has(src)){
            adj.set(src, []);
        }
        adj.get(src).push(dst);
    }
    for(const dst of adj.values()){
        dst.sort();
        console.log(dst);
    }
    const st = ['JFK'];
    while(st.length > 0){
        const src = st[st.length -1];
        if(adj.has(src) && adj.get(src).length > 0){
            st.push(adj.get(src).shift());
        }else{
            ans.push(st.pop());
        }
    }
    return ans.reverse();
};