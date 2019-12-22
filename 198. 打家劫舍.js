/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if (nums.length === 0) {
        return 0;
    }
    if (nums.length === 1) {
        return nums[0];
    }
    if (nums.length === 2) {
        return Math.max(nums[0], nums[1]);
    }
    // f(n) = max(f(n-1), f(n-2)+nums[n])
    let prev2 = nums[0];
    let prev1 = Math.max(nums[0], nums[1]);
    for (let i = 2; i < nums.length; i++) {
        let temp = prev2;
        prev2 = prev1;
        prev1 = Math.max(prev1, temp+nums[i]);
    }
    return prev1;
};

console.log(rob([2,1,1,2]));