var leftSymbol = ['(', '{', '['];
var rightSymbol = {')':'(', '}':'{', ']':'['};

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = new Array();
    for (let i = 0; i < s.length; i++) {
        if (!leftSymbol.includes(s[i])) {
            if (stack[stack.length-1] === rightSymbol[s[i]]) {
                stack.pop();
            } else {
                return false;
            }
        } else {
            stack.push(s[i]);
        }
    }
    if (stack.length > 0) {
        return false;
    }
    return true;
};
