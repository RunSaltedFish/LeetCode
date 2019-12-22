/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let minLength = Math.min(a.length, b.length);
    let bigStr = a.length > minLength ? a: b;
    let smallStr = a.length > minLength ? b: a;
    let bigLength = bigStr.length;
    let smallLength = smallStr.length;
    let result = "";
    let biggerThan10 = 0;
    for (let i = 1; i <= minLength; i++) {
        let sumTemp = parseInt(bigStr.charAt(bigLength - i)) + parseInt(smallStr.charAt(smallLength-i)) + biggerThan10;
        if (sumTemp === 3) {
            result = "1" + result;
            biggerThan10 = 1;
        } else if (sumTemp === 2) {
            result = "0" + result;
            biggerThan10 = 1;
        } else {
            result = sumTemp + result;
            biggerThan10 = 0;
        }
    }
    if (biggerThan10 === 0) {
        return bigStr.slice(0, bigLength-minLength) + result;
    }
    let count1 = 0;
    for (let i = bigLength-minLength-1; i >= 0; i--) {
        if (bigStr.charAt(i) === "1") {
            count1++;
        } else {
            break;
        }
    }
    if (count1 === bigLength-minLength) {
        for (let i = 0; i < count1; i++) {
            result = "0"+result;
        }
        result = "1" + result;
        return result;
    }
    for (let i = 0; i < count1; i++) {
        result = "0"+result;
    }
    return bigStr.slice(0, bigLength-minLength-count1-1) + (parseInt(bigStr.charAt(bigLength-minLength-count1-1))+1) + result;
};