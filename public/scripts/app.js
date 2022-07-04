'use strict';

//Arrow functions

var square = function square(x) {
  return x * x;
};

console.log(square(8));

var getFirstName = function getFirstName(fullName) {
  return fullName.split(' ')[0];
};

console.log(getFirstName('Harry Potter'));
