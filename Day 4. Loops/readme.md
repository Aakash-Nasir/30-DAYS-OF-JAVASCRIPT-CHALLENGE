Loops 

Q 1: What are the different types of loops available in JavaScript?

JavaScript provides several types of loops:
for loop
while loop
do...while loop
for...in loop (for iterating over the properties of an object)
for...of loop (for iterating over iterable objects like arrays, strings, etc.)

Q 2 : Explain the difference between for, while, and do...while loops.

for loop: Used when the number of iterations is known. It includes initialization, condition, and increment/decrement in one line.

for (let i = 0; i < 5; i++) {
    console.log(i);
}

while loop: Used when the number of iterations is not known and depends on a condition.

let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}
do...while loop: Similar to the while loop but guarantees at least one iteration.

let i = 0;
do {
    console.log(i);
    i++;
} while (i < 5);

Q 3 : What is the purpose of the break statement in loops? Provide an example.

The break statement is used to exit a loop prematurely when a specific condition is met.

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break; // Exit the loop when i is 5
    }
    console.log(i);
}

Q 4 :What is the purpose of the continue statement in loops? Provide an example.

The continue statement skips the current iteration of the loop and moves to the next iteration.

for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        continue; // Skip even numbers
    }
    console.log(i);
}
Q 5 : How can you iterate over the properties of an object?

You can use the for...in loop to iterate over the properties of an object.

const obj = { a: 1, b: 2, c: 3 };
for (let key in obj) {
    console.log(key, obj[key]);
}

Q - 6 : What is the for...of loop and how is it different from the for...in loop?

The for...of loop is used to iterate over iterable objects like arrays, strings, maps, etc.

const arr = [1, 2, 3];
for (let value of arr) {
    console.log(value);
}
The for...in loop iterates over the properties of an object, whereas the for...of loop iterates over the values of an iterable object.

Q -7 : How can you avoid infinite loops in JavaScript?

Ensure that the loop condition eventually becomes false.
Make sure that the loop has a termination condition that is correctly updated within the loop.
Example of a potential infinite loop:

let i = 0;
while (true) { // Infinite loop
    console.log(i);
    if (i === 10) {
        break; // Proper termination condition
    }
    i++;
}
Q 8 :Can you nest loops in JavaScript? Provide an example.

Yes, loops can be nested within each other.

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        console.log(`i = ${i}, j = ${j}`);
    }
}
Q - 9th What is the time complexity of nested loops?

The time complexity of nested loops is typically the product of the complexities of the individual loops. For example, a loop nested within another loop each running n times has a time complexity of O(n^2).

Q  10: How can you optimize a loop to improve performance?

Reduce the number of iterations by using more efficient algorithms.
Avoid unnecessary calculations inside the loop.
Use proper data structures to minimize the time complexity.
Example of optimization by avoiding repeated calculations:

const arr = [1, 2, 3, 4, 5];
const len = arr.length; // Calculate length once
for (let i = 0; i < len; i++) {
    console.log(arr[i]);
}
