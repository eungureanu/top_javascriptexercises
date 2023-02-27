const palindromes = function (originalString) {
    originalString=originalString.toLowerCase();
    const regexpLettersOnly=/[a-z]/;
    let lettersOnlyString="";
    for (i=0; i<originalString.length; i++){
        if (originalString[i].match(regexpLettersOnly)){
            lettersOnlyString+=(originalString[i]);
        }
    }
    let newString = "";
    for (i=originalString.length-1; i>=0; i--){
        if (originalString[i].match(regexpLettersOnly)){
            newString+=(originalString[i]);
        }
    }
    return (newString==lettersOnlyString);
};

// Do not edit below this line
module.exports = palindromes;


/* another variant using the same logic as a human: compare first characer with last until you reach the middle:
const palindromes = function (originalString) {
    originalString=originalString.toLowerCase();
    const regexpLettersOnly=/[a-z]/;
    let lettersOnlyString="";
    for (i=0; i<originalString.length; i++){
        if (originalString[i].match(regexpLettersOnly)){
            lettersOnlyString+=(originalString[i]);
        }
    }
    let length=lettersOnlyString.length;
    for (i=0; i<=(length-1)/2; i++) {
        if (!(lettersOnlyString[i]==lettersOnlyString[length-1-i])) {
            return false;
        }
    }
    return true;

}
*/