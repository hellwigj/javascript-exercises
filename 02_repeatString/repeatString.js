const repeatString = function(str, num) {
    let strings = "";
    if (num < 0) {
        strings = "ERROR"
    } else {
        for (let i = 1; i <= num; i++) {
            strings = strings.concat(str);
        }
    }
    return strings;
};

// Do not edit below this line
module.exports = repeatString;
