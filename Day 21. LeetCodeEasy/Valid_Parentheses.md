Activity 5: Valid Parentheses

Task 5: Solve the "Valid Parentheses" problem on LeetCode.
Write a function that takes a string containing just the characters '(',')', '', '}', 'T' and ']', and determines if the input string is valid.
A string is valid if open brackets are closed in the correct order.
Log the result for a few test cases.

/**
 * @param {string} s
 * @return {boolean}
 */

var isValid = function (s) {
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    let bracket = s[i];

    if (bracket === "(" || bracket === "{" || bracket === "[") {
      stack.push(bracket);
    } else {
      if (stack.length > 0) {
        if (
          (bracket === ")" && stack[stack.length - 1] === "(") ||
          (bracket === "}" && stack[stack.length - 1] === "{") ||
          (bracket === "]" && stack[stack.length - 1] === "[")
        ) {
          // Stack is not empty, and we a a matched bracket of stack top so pop the top from stack
          stack.pop();
        } else {
          // Stack is not empty, but we have a not matched bracket of stack top so invalid parentheses
          return false;
        }
      } else {
        // Stack is empty, but we have a bracket so invalid parentheses
        return false;
      }
    }
  }

  // if stack is empty it means string have valid parentheses
  return stack.length === 0;
};
