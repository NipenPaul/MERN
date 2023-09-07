/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumReplacement = function(nums) {
    const n = nums.length;
    let ans = 0;
    let last = nums[n-1];
    for(let i = n-2; i >= 0; i--){
        if(last < nums[i]){
            let cal = nums[i] - last;
            let d = Math.ceil(cal/last);
            ans += d;
            if(cal % last != 0){
               last = Math.floor(nums[i] / (d+1));
            }
        }else{
            last = nums[i];
        }
    }
    return ans;
};
