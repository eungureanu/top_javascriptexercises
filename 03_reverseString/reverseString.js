const reverseString = function(text) {
    let reversedText="";
    let textLength=text.length;
    for (i=textLength-1; i>=0; i--){
        reversedText=reversedText+text.charAt(i);
    }
    return reversedText;
};

reverseString("hello");
// Do not edit below this line
module.exports = reverseString;
