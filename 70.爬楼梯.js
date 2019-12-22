/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n === 1) {
        return 1;
    }
    if (n === 2) {
        return 2;
    }
    let first = 1;
    let second = 2;
    for (let i = 2; i < n; i++) {
        let temp = first;
        first = second;
        second = temp + first;
    }
    return second;
};