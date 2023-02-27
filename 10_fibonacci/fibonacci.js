const fibonacci = function(item) {
    if (item<0) { 
        return "OOPS"
    };
    let x=0;
    let y=1;
    let z;
    let array=[1];
    for (i=1; i<item; i++){
        z=x+y;
        x=y;
        y=z;
        array.push(z);
    }
    console.log(i);
    console.log(array);
    console.log(typeof(array[i-1]));
    return array[i-1];
};

fibonacci(6);

// Do not edit below this line
module.exports = fibonacci;
