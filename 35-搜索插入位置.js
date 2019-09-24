/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if (nums.length === 0) {
        nums[0] = target;
        return 0;
    }
    if (nums.length === 1) {
        if (nums[0] === target) {
            return 0;
        }
        if (nums[0] > target) {
            nums[1] = nums[0];
            nums[0] = target;
            return 0;
        }
        return 1;
    }
    let nextIndex = -1;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            return i;
        }
        if (nums[i] > target) {
            nextIndex = i;
            break;
        }
    }
    if (nextIndex === -1) {
        nums[nums.length] = target;
        return nums.length-1;
    }
    for (let i = nums.length; i > nextIndex; i--) {
        nums[i] = nums[i-1];
    }
    nums[nextIndex] = target;
    return nextIndex;
};