Activity 1: Two Sum
Task 1: Solve the "Two Sum" problem on LeetCode.
Write a function that takes an array of numbers and a target number, and returns the indices of the two numbers that add up to the target.
Log the indices for a few test cases.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function (nums, target) {
  let numMap = new Map();
  let n = nums.length;
  /*
        This is a logic
        a + b = sum;
        b = sum - a;
    */

  for (let i = 0; i < n; i++) {
    let complement = target - nums[i];
    if (numMap.has(complement)) {
      return [numMap.get(complement), i];
    }
    numMap.set(nums[i], i);
  }

  return []; // No solution found
};
