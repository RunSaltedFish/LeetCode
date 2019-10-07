/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    if (n === 1) {
        return "1";
    }
    let pendingNum = countAndSay(n-1);
    let result = "";
    let leftCount = 1;
    let rightNum = pendingNum[0];
    if (pendingNum.length === 1) {
        result += leftCount;
        result += rightNum;
    }
    for (let i = 1; i < pendingNum.length; i++) {
        if (Number(pendingNum[i]) !== Number(rightNum)) {
            result += leftCount;
            result += rightNum;
            rightNum = pendingNum[i];
            leftCount = 1;
        } else {
            leftCount += 1;
        }
        if ((i+1) === pendingNum.length) {
            result += leftCount;
            result += rightNum;
        }
    }
    return result;
};