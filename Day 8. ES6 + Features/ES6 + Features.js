// Task 1
const name = 'Aakash';
const age = 20;
console.log(`Name is ${name} and age is ${age}`);

// Task 2

let multiLineString = `My name is Aakash\
 I am 20 years old\
  Currently I am learning MERN Stack Development`;
console.log(multiLineString);

// Task 3
const numbers = [1,2,3,4,5];
const [first , second] = numbers;
console.log(`First : ${first}, Second : ${second}`);

//Task 4
const book = {
    title: "chai aur code" ,
    author : "Hitesh Chaudhary",
    year : 2024,

};
const {title ,author} = book;
console.log(`Title : ${title} , Author : ${author}`);

// Task 5
const oldAry = [1,3,5,7];
const newAry = [...oldAry,2,4,6,8];
console.log(newAry);

// Task 6

function sum(...numbers) {
    return numbers.reduce((total,num) => total + num,0);
}
console.log(sum(1,2,3,4,5)); // output 15

// Task 7
const product = function(a,b=1){
    return a*b;
}
console.log(product(5));
console.log(product(5,3));

// Task8 
const fName = "Aakash";
const myAge = 20;
const person ={
    fName,myAge,
    greet() {
        console.log(`Hello, my name is ${this.fName} and I am ${this.myAge} years old.`
                   );
    },
};
console.log(person);
person.greet();

// Task 9

const key = "favouriteColor";
const value = "green";

const obj = {
    [key] : value,
};

console.log(obj);