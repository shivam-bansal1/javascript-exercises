const fibonacci = function(num) {
    num = parseInt(num);
    
    if (num < 0)
        return "OOPS";
    if (num === 0 || num === 1)
        return num;


    let first = 0;
    let second = 1;

    for(let i=0; i<num-1; i++) {
        let temp = first + second;
        first = second;
        second = temp;
    }

    return second;
};

// Do not edit below this line
module.exports = fibonacci;
