function majorityElement(nums: number[]): number[] {
    const need: number = Math.floor(nums.length / 3) + 1;
    console.log(need);
    const ans: number[] = [];
    const mp = new Map();
    for(let x of nums){
        mp.set(x, (mp.get(x) !== undefined? mp.get(x): 0) + 1);
    }
    for(const [x, y] of mp){
        if(y >= need){
            ans.push(x);
        }
    }
    return ans;
};