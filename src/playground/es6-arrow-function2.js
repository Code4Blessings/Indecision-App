//Arguments object is no longer bound with arrow functions


const add = (a,b) => {
    //console.log(arguments)
    return a + b;
}

console.log(add(55,1))

//this keyword is no longer bound with the function keyword but it is bound to arrow functions but can arrow functions do not nind it's own this value. 
//You can however delete the function keyword in the parent method as shown below.

const user = {
    name: 'Hermione',
    cities: ['Coram', 'Richmond', 'Tamarac', 'Lawrenceville'],
    printPlacesLived() {
        const cityMessages = this.cities.map((city) => {
            return this.name + ' has lived in ' + city
        })
        return cityMessages
        //the this keyword is not accessible in the below anonymous function. B
        
    }
}

console.log(user.printPlacesLived())

const multiplier =  {
    // numbers - array of numbers
    numbers: [1,2,3,4,5],
    // multiplyBy -single number
    multiply(num) {
        const multiplied = this.numbers.map((number) => {
            return num * number
        })
        return multiplied
    }
    // muliply - return a new array where the number have been multiplied
}

console.log(multiplier.multiply(5));

