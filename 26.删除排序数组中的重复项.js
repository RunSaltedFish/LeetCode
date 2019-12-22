/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let result = [];
    let indexMap = {};
    for (let i = 0; i < nums.length; i++) {
        if (indexMap[nums[i]] === undefined) {
            result[result.length] = nums[i];
            indexMap[nums[i]] = true;
        }
    }
    for (let i = 0; i < result.length; i++) {
        nums[i] = result[i];
    }
    return result.length;
};