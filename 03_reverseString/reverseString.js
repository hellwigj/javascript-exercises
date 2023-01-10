const reverseString = function(str) {
    let outputString = "";
    for (let i = str.length; i>0; i--) {
        outputString = outputString.concat(str.charAt(i-1));
    }
    return outputString;
};

// Do not edit below this line
module.exports = reverseString;
