Activity 3: Palindrome Number

Task 3: Solve the "Palindrome Number" problem on LeetCode.
Write a function that takes an integer and returns true if it is a palindrome, and false otherwise.
Log the result for a few test cases, including edge cases like negative numbers.

/**
 * @param {number} x
 * @return {boolean}
 */

var isPalindrome = function (x) {
  // Corner Case: for negative number is always non-palindrome
  if (x < 0) {
    return false;
  }

  let reversed = 0;
  let temp = x;

  while (temp !== 0) {
    let digit = temp % 10;
    reversed = reversed * 10 + digit;
    temp = Math.floor(temp / 10);
  }

  return reversed === x;
};
