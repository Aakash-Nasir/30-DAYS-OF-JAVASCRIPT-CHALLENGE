//Task 1

// const { formToJSON } = require("axios");

function isevenOrOdd(n){
    if(n%2==0){
        console.log("even")
    }
    else{
        console.log("odd")
    }
}
isevenOrOdd(6);
isevenOrOdd(5);

//Task 2
function square(num){
    return num*num;
    
}
console.log(square(60));
console.log(square(61));

// Task 3
// function findGreater(n1 , n2) {
//     if(n1>n2){
//         console.log(`n1 = ${n1} is greater than n2 = ${n2}`);
//     }
//     else{
//         console.log(`n1 = ${n2} is greater than n2 = ${n1}`);
//     }
// }
// findGreater(34,29);
// findGreater(43,90);

const findMax = function(num1 ,num2){
    let max = num1 > num2 ? num1 : num2;
    console.log(`The maximum of ${num1} and ${num2} is ${max}`);
}
findMax(34,45);
findMax(43,21)

//Task 4:

const concatenateString = function(str1 , str2) {
    return str1+str2;
}
console.log(concatenateString(12, 34));
console.log(concatenateString("hello" ,"world"));

// Task 5

const addTwoNumber = (a1,a2)  => a1 + a2;

console.log(addTwoNumber(3,4));
console.log(addTwoNumber(45,980));

//Task 6 
const containsChar = (str,char) => str.includes(char);

console.log(containsChar("Hello World !" , "o")); // true
console.log(containsChar("javascript", "z")); // false

//Task 7
function multiply(num1 , num2 = 1){
    return num1*num2;
}
console.log(multiply(5,3));
console.log(multiply(7));

//Task 8

function greet(name,age = 22){
    return `Hello,${name}! You are ${age} years old`;
}
console.log(greet("Aakash"));
console.log(greet("Aakash",20));

// Task 9

function repeatFunction(fn,times) {
    for(let i =0; i<times ; i++){
        fn();
    }
}
repeatFunction(() => console.log("Hello"),9);

// Task  10

function applyFunctions(fn1,fn2,value) {
    return fn2(fn1(value));
}
const addFive = (x) => x+5;
const squareOfX = (x) => x*x;

console.log(applyFunctions(addFive,squareOfX,3));
