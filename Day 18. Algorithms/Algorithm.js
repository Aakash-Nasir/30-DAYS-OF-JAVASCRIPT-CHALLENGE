// TASK 1 BUBBLE SORT
function bubbleSort(arr) {
 let n = arr.length;
 for(let i =0;i<n-1;i++){
    for(let j = 0; j<n-i-1; j++){
        if(arr[j] > arr[j+1]){
            let temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
        }
    }
}
return arr;
}

console.log(bubbleSort([23,45,25,9,11,90]));

// Task  2 SELECTION SORT
function selectionSort(arr) {
    let n = arr.length;
    for(let i =0 ;i<n-1;i++){
        let minIndex = i;
        for(let j =i+1;j<n;j++){
            if(arr[j]< arr[minIndex]){
                minIndex = j;

            }
        }
        let temp = arr[minIndex];
        arr[minIndex] = arr[i];
        arr[i] = temp;
    }
    return arr;
}

console.log(selectionSort([64,25,34,12,22,11,90]));

// Task 3 QUICK SORT

function QuickSort(arr) {
    if(arr.length <=1){
        return  arr;
    }
    let pivot = arr[Math.floor(arr.length/2)];
    let left = [];
    let right = [];
    for(let i=0;i<arr.length;i++){
        if(i !== Math.floor(arr.length/2)){
            arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);

        }
    }
    return QuickSort(left).concat(pivot,QuickSort(right));
}

console.log(QuickSort([64,34,25,12,22,11,90]));

// TASK 4 LINEAR SEARCH
function linearSearch(arr,target){
    for(let i=0;i<arr.length;i++){
        if(arr[i] === target){
            return i;
        }
    }
    return -1;
}

console.log(linearSearch([64, 34, 25, 12, 22, 11, 90], 22));

// TASK 5 BINARY SEARCH
function binarySearch(arr,target) {
    let leftt = 0;
    let rightt = arr.length - 1;
    while(leftt <= rightt) {
        let mid = Math.floor(leftt + (rightt - leftt)/2);
        if(arr[mid] === target) {
            return mid;
        } 
        else if(arr[mid] < target){
            leftt = mid +1;
        } 
        else{
             rightt = mid -1;
        }
    }
    return -1;
}
console.log(binarySearch([11, 12, 22, 25, 34, 64, 90], 22)); // Output: 2
console.log(binarySearch([11, 12, 22, 25, 34, 64, 90], 202)); // Output: -1

// Task 5 String Algorithms count characters

function charCount(str) {
    let count = {};
    for(let char of str) {
        count[char] = count[char]+1 || 1 ;
    }
    return count;
}

console.log(charCount("hello world")); 

// Task 7 String Algorithms Longest SubString without repeating characters

function longestSubstring(str) {
    let maxLength = 0;
    let start = 0;
    let seen = {};
    for( let end = 0; end < str.length; end++) {
        if(seen[str[end]] !== undefined) {
            start = Math.max(start,seen[str[end]] + 1);

        }
        seen[str[end]] = end;
        maxLength = Math.max(maxLength,end - start +1);
    }
    return maxLength;
}
console.log(longestSubstring("abcabcdbcdb"))

// Task 8 rotate an array by k position
/*
function rotateArray(arr, k) {
    let n = arr.length;
    k = k % n; // Ensure k is within the bounds of the array length
    if (k === 0) return arr;

    reverse(arr, 0, n - 1);
    reverse(arr, 0, k - 1);
    reverse(arr, k, n - 1);

    return arr;
}

function reverse(arr, start, end) {
    while (start < end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}

// Example usage:
let array = [1, 2, 3, 4, 5, 6, 7];
let k = 3;
let rotatedArray = rotateArray(array, k);
console.log(`Array rotated by ${k} positions:`, rotatedArray);

*/
// Task 8 rotate an array by k steps using methods
 function rotateArray(arr,k) {
    k = k%arr.length;
    return arr.slice(-k).concat(arr.slice(0,-k));

}
console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 3)); 

// Task 9 merge two sorted array into one sorted array
function mergeArrays(arr1,arr2){
    let merged = [];
    let i =0;
    let j =0;
    while(i<arr1.length && j<arr2.left){
        if(arr1[i] < arr2[j]){
            merged.push(arr1[i]);
            i++;
        }
        else{
            merged.push(arr2[j]);
            j++;
        }

    } 
    return merged.concat(arr1.slice(i)).concat(arr2.slice(j));
}

console.log(mergeArrays([1, 3, 5], [2, 4, 6]));

// Task 10 fibbonacci sequence using dp

function fibonacci(n) {
    let fib = [0,1];
    for(let i=2;i<=n;i++){
        fib[i] = fib[i-1] + fib[i-2];
    }
    return fib;
}
console.log(fibonacci(10));

// Task 11  knapsack problem using dynamic programming.
function knapsack(weights, values, capacity) {
    let n = weights.length;
    let dp = Array(n + 1)
      .fill()
      .map(() => Array(capacity + 1).fill(0));
    for (let i = 1; i <= n; i++) {
      for (let w = 0; w <= capacity; w++) {
        if (weights[i - 1] <= w) {
          dp[i][w] = Math.max(
            dp[i - 1][w],
            dp[i - 1][w - weights[i - 1]] + values[i - 1]
          );
        } else {
          dp[i][w] = dp[i - 1][w];
        }
      }
    }
    return dp[n][capacity];
  }
  
  console.log(knapsack([1, 2, 3], [10, 15, 40], 6)); // Output: 55