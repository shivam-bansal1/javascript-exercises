const removeFromArray = function(arr, ...elementsToBeRemoved) {
    // for(let index=0; index<arr.length; index++) {
    //     if(arr[index] === elementToBeRemoved) {
    //         arr.splice(index, 1);
    //     }
    // }

    // return arr;
    return arr.filter(element => !elementsToBeRemoved.includes(element));
};

// Do not edit below this line
module.exports = removeFromArray;
