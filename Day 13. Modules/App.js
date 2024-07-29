import { add } from './Module.js';
const result = add(5, 3);
console.log(`The sum is: ${result}`);

// Task 2
import { person } from './Module.js';
console.log(person.greet());
console.log(`Age : ${person.age}`);

//Task 3
import { product ,division } from './Module.js';
console.log(`Product is ${product(3,7)}`);
console.log(`Division is : ${division(3,9)}`);

// Task 4
import multiply from './Module.js';
console.log(`Multiply is ${multiply(7,9)}`);

// Task 5
import * as constants from './Module.js';

console.log(`PI: ${constants.PI}`);
console.log(`E: ${constants.E}`); 
console.log(`Square of 4: ${constants.square(4)}`); 

//Task 6 having one issue 
import _ from 'lodash';

const array = [1, 2, 3, 4, 5];
const reversedArray = _.reverse([...array]); // Using spread operator to create a copy

console.log(`Reversed array: ${reversedArray}`);

// Task 7 
import axios from 'axios';
const url = 'https://jsonplaceholder.typicode.com/todos/1';
axios.get(url)
.then(response => {
    console.log('Response data:',response.data);
})
.catch(error => {
    console.error('Error making the request:' , error);
})
