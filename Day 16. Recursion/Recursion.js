// Task 1 without recursion
function factorial(n) {
    let  fact= 1;
    for(let i =1;i<=n;i++){
        // fact = fact*i;  is similar to
        fact *= i;
    }
    return fact;
}
console.log(factorial(5));

// Task 1 With Recursion

function factoriall(f) {
    // Base Case 
    if(f == 0){
        return 1;
}
// Recursive Relation
let factoriallAns = f*factoriall(f-1);
return factoriallAns;
}
console.log(factoriall(6));
console.log(factoriall(7));

// Task 2 Without recursion
function fibonacci(n) {
    if(n<=1){
        return n;
    }
    let a = 0, b= 1;
    for(let i =2;i<=n;i++){
        let temp = a;
        a =b;
        b =  temp;
    }
    return b;

}
console.log(fibonacci(0)); // Output: 0
console.log(fibonacci(1)); // Output: 1
console.log(fibonacci(2)); // Output: 1
console.log(fibonacci(3)); // Output: 2
console.log(fibonacci(4)); // Output: 3
console.log(fibonacci(5)); // Output: 5
console.log(fibonacci(6)); // Output: 8
console.log(fibonacci(7)); // Output: 13
console.log(fibonacci(10)); // Output: 55

// Task 2 Using Recursion

function Fibonacci(n){
    // Base Case
    if(n<=1){
        return n;
    }
    // Recursive Relation
    let a = Fibonacci(n-1);
    let b = Fibonacci(n-2);
    let FibonacciAns = a+b;
    
    return FibonacciAns;
}
console.log(Fibonacci(5));
console.log(Fibonacci(6));

// Task 3 Without Recursion
function sumArr(n){
    let sum =0;
    for(let i =0;i<=n;i++){
        sum +=i;
    }
    return sum;
}
console.log(sumArr(5));

// Task 3 With Recursion

function sumArray(arr){
 // Base Case 
 if(arr===0){
    return 0;
     }
     // Recursive Relation
     let sumOfAllElements = arr[0]+sumArr(arr.slice(1));
     return sumOfAllElements;
}
console.log(sumArray([1, 2, 3, 4, 5])); // 15
console.log(sumArray([10, 20, 30])); // 60

// Task 4 Without recursion

function maxElement(n) {
    let arr = [1,2,4,5,3];
    let max = arr[0];
    for(let i=0;i<arr.length;i++){
        if(arr[i] > max){
          max = arr[i];
        }     
    }
    return max;
}
console.log(maxElement());

// Task 4 With Recursion
  
function maxArray(arr){
    // Base Case 
    if(arr.length === 1){
        return arr[0];
       }
       // Recursive Relation
let maximum = Math.max(arr[0], maxArray[arr.slice(1)]);
return maximum;

}
console.log(maxArray([1, 5, 3, 9, 2])); // 9
console.log(maxArray([10, 20, 30, 15])); // 30


// Task 5 Using a Loop

function reverseString(str) {
    let reversed = ' ';
    for(let i = str.length-1; i>=0;i--){
        reversed += str[i];
    }
return reversed;
}
console.log(reverseString("hello")); // Output: "olleh"
console.log(reverseString("world")); // Output: "dlrow"
console.log(reverseString("JavaScript")); // Output: "tpircSavaJ"
console.log(reverseString("a")); // Output: "a"
console.log(reverseString("")); // Output: ""

// Task 5 UsingBuilt in Methods

function reverseString(str) {
    return str.split(' ').reverse().join('');

}
// Test cases
console.log(reverseString("hello")); // Output: "olleh"
console.log(reverseString("world")); // Output: "dlrow"
console.log(reverseString("JavaScript")); // Output: "tpircSavaJ"
console.log(reverseString("a")); // Output: "a"
console.log(reverseString("")); // Output: ""

// Task 5 Using Recursion
 function reversedString(str) {
    //Base Case
    if(str === " "){
        return "";
    }
    // Recursive Relation
    let recursiveAnsw = reversedString(str.slice(1) + str[0]);
    return recursiveAnsw;
 }
 console.log(reverseString("hello")); // "olleh"
console.log(reverseString("world")); // "dlrow"

// Task 6 Palindrome Using loop

/*function isPalindrome(str) {
    let left = 0;
    let right = str.length - 1;

    while(left < right){
        if(str[left] !== str[right]) {
            return false;
        }
        left++;
        right--;
    }
}
return true;
console.log(isPalindrome("racecar")); // Output: true
console.log(isPalindrome("hello"));   // Output: false
console.log(isPalindrome("madam"));   // Output: true
console.log(isPalindrome("12321"));   // Output: true
console.log(isPalindrome("12345"));   // Output: false
*/

// Task 6 Using built in methods

// function isPalindrome(strngg){
//     let reversedd = strngg.split('').reverse().join('');
//     let strngg = reversedd;

// }
// console.log(isPalindrome("racecar")); // Output: true
// console.log(isPalindrome("hello"));   // Output: false
// console.log(isPalindrome("madam"));   // Output: true
// console.log(isPalindrome("12321"));   // Output: true
// console.log(isPalindrome("12345"));   // Output: false

// Task 6 USING RECURSION

function reverseStringg(str){
    // base case 
    if(str === ''){
        return '';

    }
     // Recursive Relation
     let recursiveAnswer = reverseStringg(str.slice(1) = str[0]);
     return recursiveAnswer;
}

console.log(reverseString("hello")); // "olleh"
console.log(reverseString("world")); // "dlrow"

// Task 7 Without recursion
function binarysearch(arr,target){
    let left =0;
    let right = arr.length -1;
    while(left<=right){
        let mid = Math.floor((left+right)/2);

        if(arr[mid] === target){
            return mid;
        }
        else if(arr[mid] < target){
            left = mid +1;
        }
        else {
            right = mid -1;
        }
    }
    return -1;
}

const testCases = [
    {
        array : [1,2,3,4,5] , target :3},
        {array : [10,20,30,40,50] , target :40},
        { array: [5, 15, 25, 35, 45, 55], target: 25 },
        { array: [2, 4, 6, 8, 10], target: 8 },
        { array: [1, 3, 5, 7, 9, 11], target: 6 }
];

testCases.forEach(test => {
    const index = binarysearch(test.array,test.target);
    console.log(`Target ${test.target} found at index: ${index}`);
});

// Task 7 With Recursion
function binarySearch(arr,target,low=0, high = arr.length-1){
    // Base Case
    if(low>high){
        return -1;
    }
    // Processing + Recursive Relation
    let recursionAns;
    let mid = Math.floor(low+(high-low)/2);
    
    // Target Found
    if(arr[mid] === target){
        return mid;
    }
    // Go to left side from mid-1 to low
    if(arr[mid] > target){
        recursionAns = binarySearch(arr,target,low,mid-1);
    }
    // Go to right side from mid+1 to high
    if(arr[mid] < target) {
        recursionAns = binarySearch(arr,target,mid+1,high);
    }
    return recursionAns;

}
console.log(binarySearch([1,2,3,4,5],3));
console.log(binarySearch([10,20,30,40,50],25));

// Task 8 Without Recursion
 
function countOfOccurence(arr,target) {
    let count = 0;
    for(let i =0;i<arr.length;i++){
        if(arr[i] === target){
            count++;
        }
    }
    return target;
}
const testCase = [
    { array: [1, 2, 3, 4, 5, 3, 3], target: 3 },
    { array: [10, 20, 30, 40, 50, 20, 20, 20], target: 20 },
    { array: [5, 15, 25, 35, 45, 55], target: 25 },
    { array: [2, 4, 6, 8, 10, 2, 2], target: 2 },
    { array: [1, 3, 5, 7, 9, 11, 1, 1], target: 1 }
];

testCase.forEach(test => {
    const count = countOfOccurence(test.array, test.target);
    console.log(`Target ${test.target} occurs ${count} times in the array.`);
});

// Task 8 With Recursion
function countOccurence(arrr , targett) {
    // Base Case
    if(arrr.length === 0) {
        return 0;
    }
    // Recursive Relation + Processing 
    let recCountAns = countOccurence(arrr.slice(1),targett);
    let isTargetFound = arrr[0] === targett ? 1: 0;
    let countt  = isTargetFound + recCountAns;
    return countt;
}
console.log(countOccurence([1,2,3,1,4,3],1));
console.log(countOccurence([10,23,34,23,45,10,23],23));

// Task 9
// Create the Binary Tree Node
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
// In Order Traversal of a Binary Tree(Left -Node - Right)
function inOrderTraversal(root) {
    // base case
    if(root == null) {
        return;
    }
     // Recursive Relation + Processing
  // Left
  inOrderTraversal(root.left);
  // Node
  console.log(root.value);
  // Right
  inOrderTraversal(root.right);
}

const root = new TreeNode(1); // Create the root of BT: 1
root.left = new TreeNode(2); // Create the left child 2 of root of BT 1
root.right = new TreeNode(3); // Create the right child 3 of root of BT 1
root.left.left = new TreeNode(4); // Create the left child 4 of node of BT 2
root.left.right = new TreeNode(5); // Create the right child 4 of node of BT 2

inOrderTraversal(root); // 4 2 5 1 3

// Task 10
function treeDepth(root) {
    // Base Case 
    if(root === null) {
        return 0;
    }
     // Recursive relation + Processing
     let leftSubTreeH = treeDepth(root.left);
     let rightSubTreeH = treeDepth(root.right);
    let heightOfBT = Math.max(leftSubTreeH+rightSubTreeH) +1;
    return heightOfBT;
    }
    console.log(treeDepth(root));