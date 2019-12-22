/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) {
        return false;
    }
    if (x == 0) {
        return true;
    }
    if (x%10 == 0) {
        return false;
    }
    var reverseNum = 0;
    var tempX = x;
    while (x > 0) {
        reverseNum = reverseNum*10+x%10;
        x = parseInt(x/10);
        if (x == reverseNum || parseInt(x/10) == reverseNum) {
            return true;
        }
    }
    return reverseNum == tempX;
};