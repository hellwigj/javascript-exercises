const removeFromArray = function(arr, ...input) {
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] === value) {
    //         arr.splice(i,1)
    //     }
    // }
    // return arr;

    return arr.filter(x => !input.includes(x));
};

// Do not edit below this line
module.exports = removeFromArray;
