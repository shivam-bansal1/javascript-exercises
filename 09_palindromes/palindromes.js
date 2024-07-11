function removePunctuation(str) {
    return str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~() ]/g, "");
}

const palindromes = function (str) {
    str = removePunctuation(str);
    for(let i=0,j=str.length-1;i<str.length,j>=0;i++,j--) {
        if(str.charAt(i).toLowerCase() != str.charAt(j).toLowerCase()) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
