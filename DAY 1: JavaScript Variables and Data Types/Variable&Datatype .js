// Variable & Data types
// Task 1
var num = 9;
console.log(`number  is  ${num}`);
console.log(typeof(num));

// Task 2
let greeting = "namaste , namaskaar , namaskaaram";
console.log(`greeting is ${greeting}`);
console.log(typeof(greeting));

// Task 3
const bool = true ;
console.log(`boolean is ${bool} `);
console.log(typeof(bool));

// Task 4
const arr  = ["js", "cpp" , "java" , "python"];
console.log(`Programming Language are ${arr}`);
console.log(typeof(arr));
//(Arrays are a type of object in JavaScript)

// Task 5 
const obj = {
type : "notebook",
pages : "400",
price : "150",
color : "white"
};

console.log(`Objects Properties are ${obj} `);
console.log(typeof(obj));


// Reassigning Variables 
let nums = 7;
console.log(nums);
 nums = 9; // reassign is allowed
console.log(nums);

var numss = 7;
console.log(numss);
numss = 9; // reassign is allowed
console.log(numss);

const numms =  7;
console.log(numms);
numms = 9; // Type Error not allowed to reassign the value
console.log(numms);

