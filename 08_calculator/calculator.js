const add = function(...args) {
  let add=0;
  for (arg of args){
    add += arg;
  }
  return add;
};

const subtract = function(first, ...args) {
  let diff=first;
  for (arg of args){
    diff=diff-arg;
  }
  return diff;
};

const sum = function(array) {
	let sum=0;
  for(i=0; i<array.length; i++){
    sum += array[i];
  }
  return sum;
};

const multiply = function(...args) {
  let product=1;
  for (arg of args){
    product *= arg;
  }
  return product;
};

const power = function(base, exponent) {
	let power=1;
  for (i=0; i<exponent; i++){
    power=power*base; //can also be written power*=base
  }
  return power;
};

const factorial = function(number) {
  let factorial=1;
  for (i=1; i<=number; i++){
    factorial=factorial*i; //can also be written factorial*=i
  }
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
