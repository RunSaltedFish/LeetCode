/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length == 0) {
        return '';
    }
    if (strs.length == 1) {
        return strs[0];
    }
    if (strs.length == 2) {
        return getCommonPrefixFromTwo(strs[0], strs[1]);
    }
    let middleIndex = strs.length/2;
    return getCommonPrefixFromTwo(longestCommonPrefix(strs.slice(0, middleIndex)), longestCommonPrefix(strs.slice(middleIndex, strs.length)));
};

function getCommonPrefixFromTwo(left, right) {
    let result = '';
    let min = left.length > right.length? right.length: left.length;
    for (let i = 0; i < min; i++) {
        if (left.charAt(i) == right.charAt(i)) {
            result += left.charAt(i);
        } else {
            break;
        }
    }
    return result;
}