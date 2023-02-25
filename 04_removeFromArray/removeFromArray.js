/*The rest parameter (...) allows a function to treat 
an indefinite number of arguments as an array*/

const removeFromArray = function(originalArray, ...args) {
    let newArray=[];
    originalArray.forEach((item) => {
        if (!args.includes(item)) {
            newArray.push(item);
        }
    });
    return newArray;
}

removeFromArray([1,2,3,4], 2,3);

// Do not edit below this line
module.exports = removeFromArray;