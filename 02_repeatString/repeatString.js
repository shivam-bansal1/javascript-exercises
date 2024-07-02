const repeatString = function(str, num) {
    if(num < 0) 
        return "ERROR";

    let resultString = '';
    for(let i=0;i<num;i++) {
        resultString += str;
    }

    return resultString;
};

// Do not edit below this line
module.exports = repeatString;
