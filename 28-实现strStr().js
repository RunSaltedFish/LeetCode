/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (needle === null || needle === undefined) {
        return -1;
    }
    if (needle === '') {
        return 0;
    }
    let needleBegin = 0;
    let needleEnd = needleBegin;
    let nextMatchIndex = -1;
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle[needleEnd]) {
            if (needleEnd === needle.length-1) {
                return needleBegin;
            }
            needleEnd += 1;
            if (needleEnd === 1) {
                nextMatchIndex++;
                continue;
            }
            if (nextMatchIndex === 0) {
                nextMatchIndex = i;
            }
        } else {
            if (nextMatchIndex === -1) {
                needleBegin = i+1;
            } else if (nextMatchIndex === 0) {
                needleBegin = i;
                i--;
            } else {
                needleBegin = nextMatchIndex;
                i = nextMatchIndex-1;
            }
            nextMatchIndex = -1;
            needleEnd = 0;
        }
    }
    return -1;
};
