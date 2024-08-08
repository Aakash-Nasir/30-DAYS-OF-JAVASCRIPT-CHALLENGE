Activity 2: Reverse Integer

Task 2: Solve the "Reverse Integer" problem on LeetCode.
Write a function that takes an integer and returns it with its digits reversed.
Handle edge cases like negative numbers and numbers ending in zero.
Log the reversed integers for a few test cases.

/**
 * @param {number} x
 * @return {number}
 */

var reverse = function (x) {
  let reversed = 0;
  let temp = Math.abs(x);

  while (temp > 0) {
    let digit = temp % 10;
    reversed = reversed * 10 + digit;
    temp = Math.floor(temp / 10);
  }

  // Check if the reversed integer fits within the range of a 32-bit signed integer
  if (reversed >= -Math.pow(2, 31) && reversed <= Math.pow(2, 31) - 1) {
    // Return reversed integer if overflow does not occur
    return x < 0 ? -reversed : reversed;
  } else {
    // Return 0 if overflow occurs
    return 0;
  }
};
