const sumAll = function(x, y) {
    let total = 0;
    if (x < 0 || y < 0 || !Number.isInteger(x) || !Number.isInteger(y)) {
        return 'ERROR'
    }
    for (let i = Math.min(x, y); i <= Math.max(x, y); i++) {
        total += i;
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
