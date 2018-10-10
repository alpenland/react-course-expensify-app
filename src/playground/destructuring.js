console.log('destructuring');

const person = {
    name: 'Amber',
    age: 35,
    location: {
        city: 'Fairfield',
        temp: 90
    }
};

const {name = 'Anonymous', age} = person;

//set property = to a value to set the value as a default
//name = 'Anonymous' means if name vairable is empty, then
//anonymous will be used

console.log(`${person.name} is ${person.age}.`)


const { city, temp: temperature } = person.location;

//can give variable a new name using property: name
//temp: temperature will pull "temp" from person.location
//but can only be referenced now as "tempeature"

if (city && temperature) {
    console.log(`It's ${temperature} in ${city}.`);
}

//can combine renmaing and default by combining two methods above
//name: firstName = 'Anonymous'
//changes name property to firstname for future reference
//and sets default to Anonymous

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
       // name: 'Penguin'
    }
};

const { name: publisherName = 'Self Published' } = book.publisher;

console.log(publisherName);

//
// Array Destructuring
//

const address = ['123 Test Blvd','Fairfield',,'94533'];

const [ street, city2, state, zip ] = address;
//destructuring an array, names don't exist in object, so uses POSITION
//first vairable will be first item, second is second, etc.

const [ , city3, state3 ] = address;

//leave in comma, but remove item if you want to only grab some items

const [ , city4, state4 = 'New York' ] = address;
//set default same on array as with objct, use = and set equal to a string

console.log(`You are in ${city4}, ${state4}`);


const item = ['Coffee (hot)','$2.00','$2.50','$2.75'];

const [ beverage, , mediumPrice, largePrice] = item;

console.log(`A medium ${beverage} costs ${mediumPrice}.`);
console.log(`A large ${beverage} costs ${largePrice}.`);