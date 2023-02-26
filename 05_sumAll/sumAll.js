//the official solution swaps the start and end values if start > end
const sumAll = function(start, end) {
    if (start<0 || end<0 || !Number.isInteger(start)|| !Number.isInteger(end)) {
        return "ERROR";
    }
    let sum=0;
    if (start<=end) {
        while (start<=end){
            sum=sum+start;
            start++
        } 
    } else if (start>=end){
        while (start>=end){
            sum=sum+start;
            start--;
            }
    }
    return sum;
}

sumAll(2.5, 4);
// Do not edit below this line
module.exports = sumAll;
