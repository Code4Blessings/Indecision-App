'use strict';

//Arguments object is no longer bound with arrow functions


var add = function add(a, b) {
    //console.log(arguments)
    return a + b;
};

console.log(add(55, 1));

//this keyword is no longer bound with the function keyword but it is bound to arrow functions but can arrow functions do not nind it's own this value. 

var user = {
    name: 'Hermione',
    cities: ['Coram', 'Richmond', 'Tamarac', 'Lawrenceville'],
    printPlacesLived: function printPlacesLived() {
        var _this = this;

        this.name;
        console.log(this.name);
        this.cities;
        console.log(this.cities);
        //the this keyword is not accessible in the below anonymous function. B
        this.cities.forEach(function (city) {
            console.log(_this.name + ' has lived in ' + city);
        });
    }
};

user.printPlacesLived();
