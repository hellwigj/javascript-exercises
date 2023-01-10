const fibonacci = function(num) {
    num = parseInt(num);
    let sequence = [1, 1];
    let sum = 1;
    if (num === 2 || num === 1) {
        return 1;
    } else if (num <= 0) {
        return "OOPS";
    }
    for (let i = 2; i <= num - 1; i++ ) {
        sequence[i] = sequence[i-1] + sequence[i - 2];
    }
    return sequence[num-1];
};

// Do not edit below this line
module.exports = fibonacci;
