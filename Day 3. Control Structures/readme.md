Control Structures in JS

Q : Explain the difference between if, else if, and else statements.

 Ans :The if statement evaluates a condition and executes the code block if the condition is true. The else if statement provides an additional condition to test if the previous if or else if condition(s) were false. The else statement executes a code block if none of the preceding conditions were true.

let x = 10;

if (x > 10) {
    console.log("x is greater than 10");
} else if (x === 10) {
    console.log("x is exactly 10");
} else {
    console.log("x is less than 10");
}
Q :2  How does the switch statement work, and when would you use it over an if...else chain?

The switch statement evaluates an expression and executes code blocks based on matching case labels. It is often used when there are multiple possible discrete values for an expression.

let fruit = "apple";

switch (fruit) {
    case "banana":
        console.log("Bananas are yellow.");
        break;
    case "apple":
        console.log("Apples are red or green.");
        break;
    case "grape":
        console.log("Grapes are purple or green.");
        break;
    default:
        console.log("Unknown fruit.");
}
Q :3 What is a ternary operator, and how is it used in JavaScript? Can you give an example?

The ternary operator is a shorthand for an if...else statement. It takes three operands: a condition, a value if the condition is true, and a value if the condition is false.

let age = 18;
let canVote = (age >= 18) ? "Yes, you can vote." : "No, you cannot vote.";
console.log(canVote);
