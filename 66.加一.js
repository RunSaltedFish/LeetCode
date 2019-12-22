/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let firstNumNot9Index = -1;
    for (let i = digits.length-1; i >= 0; i--) {
        if (digits[i] === 9) {
            digits[i] = 0;
        } else {
            firstNumNot9Index = i;
            break;
        }
    }
    if (firstNumNot9Index === -1) {
        digits.unshift(1);
    } else {
        digits[firstNumNot9Index] = digits[firstNumNot9Index]+1;
    }

    return digits;
};