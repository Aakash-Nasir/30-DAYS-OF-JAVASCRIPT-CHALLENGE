// ARITHEMATIC OPERATOR

// Task 1  Add
let a = 10;
let b = 14;
let sum = a+b;
console.log("Sum is :", sum);

//Task 2 Subtract
let sub = a - b ;
console.log("subtract :", sub);

// Task  3 Multiplication
let mul = a*b;
console.log("Multiplication is :", mul);

// Task 4 Divide

let divide = b/a;
console.log("Divide is :", divide);

// Task 5 : Remainder
let rem = b % a;
console.log("Remainder is :" , rem);

// ASSIGNMENT OPERATOR

// Task 6  Add 

let c = 10;
 c += 5;
 console.log("After += operator " , c );

 // Task 7 Subtract
 let d = 5;
 d -= 4;
 console.log("After -= operator", d);

 // COMPARISON OPERATOR
 //Comparing data of different types may give unexpected results.

// When comparing a string with a number, JavaScript will convert the string to a number when doing the comparison. An empty string converts to 0. A non-numeric string converts to NaN which is always false.


 // Task 8 : comparison operator give results in  true or false 
 console.log("a>b" , a>b); //false

 // Task 9: Comparison operators are used in logical statements to determine equality or difference between variables or values.
 console.log("a>= b" , a>= b); // false

 // Task 10 : It checks not only the value itself but also its type. This operator is known as the "strict equality" operator. In summary, the "==" operator compares values after performing type conversion, while the "===" operator compares values without type conversion.

 let e = 10;
let f = "10";
console.log("e == f:", e == f); // e == f: true -> because == does type coercion
console.log("e === f:",e === f); // e === f: false -> because === checks for strict equality

// LOGICAL  OPERATOR
// Task 11
let tru = true;
let fals = false;
console.log( "tru && fal" , tru && fals); //  false -> because both conditions are not true

// Task 12 
console.log("tru || fals" , tru || fals) //  true -> because at least one condition is true

// Task 13
console.log("a != b", a!=b);
console.log("tru != fals", tru != fals);
console.log("tru != tru" , tru != tru);

// Activity 5: Ternary Operator

// Task 14

let ternry = -4;
console.log( ternry > 0 ? "positive" : "negative");



