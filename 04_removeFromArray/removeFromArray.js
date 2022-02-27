const removeFromArray = function (...args) {
    const array = args[0] 
    const newArray = [];
    array.forEach((item) => {
        if (!args.includes(item)) {
            newArray.push(item);
        }
    });
    return newArray;
};
  // and return that array
// Do not edit below this line
module.exports = removeFromArray;
