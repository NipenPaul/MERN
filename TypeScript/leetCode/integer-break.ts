function integerBreak(n: number): number {
    if(n <= 3){
        return n-1;
    }
    const dp: number[] = new Array(n+1).fill(0);
    return rec(n, dp);
};

function rec(num: number, dp: number[]): number{
    if(num <= 3) return num;
    if(dp[num] != 0) return dp[num];
    let ans = num;
    for(let i = 2; i < num; i++){
        ans = Math.max(ans, i * rec(num - i, dp));
    }
    return dp[num] = ans;
}