const palindromes = function (str) {
    str = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    str = str.toLowerCase();
    str = str.replace(/\s/g,'');
    for (let i = 0; i <= Math.floor(str.length/ 2); i++) {
        let secondIndex = str.length - i - 1;
        if (str.charAt(i) !== str.charAt(secondIndex)) {
            return false;
        }
        console.log(str.charAt(i) + " " + str.charAt(secondIndex));
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
