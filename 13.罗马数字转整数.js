/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var romanChar2Int = {'I':1, 'V':5, 'X':10, 'L':50, 'C':100, 'D':500, 'M':1000};
    var result = 0;
    for (let i = 0; i < s.length; i++) {
        if (i == s.length-1) {
            result += romanChar2Int[s[i]];
        } else {
            if (romanChar2Int[s[i]] < romanChar2Int[s[i+1]]) {
                result += -1*romanChar2Int[s[i]];
            } else {
                result += romanChar2Int[s[i]]
            }
        }
    }
    return result;
};