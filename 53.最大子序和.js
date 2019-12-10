/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if (nums.length === 1) {
        return nums[0];
    }
    return Math.max(sum(nums), maxSubArray(nums.slice(0, nums.length-1)), maxSubArray(nums.slice(1)));
};

function sum(nums) {
    let result = 0;
    for (let item of nums) {
        result += item;
    }
    return result;
}