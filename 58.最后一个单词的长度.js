/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    if (s === "") {
        return 0;
    }
    let count = 0;
    let beginCount = false;
    for (let i = s.length-1; i >=0; i--) {
        if (s.charAt(i) === ' ') {
            if (beginCount === false) {
                continue;
            }
            return count;
        }
        if (s.charAt(i) !== ' ') {
            beginCount = true;
        }
        count += 1;
    }
    return count;
};

console.log(lengthOfLastWord("a "));