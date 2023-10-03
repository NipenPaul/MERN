function numIdenticalPairs(nums: number[]): number {
    const mp: Map<number, number> = new Map();
    let ans: number = 0;
    for(let x of nums){
        mp.set(x, (mp.get(x) || 0) + 1);
    }
    for(const [x, y] of mp){
        ans += (y * (y-1))/2;
    }
    return ans;
};