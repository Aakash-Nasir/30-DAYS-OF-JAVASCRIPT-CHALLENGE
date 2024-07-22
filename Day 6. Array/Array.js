//Task 1
const ary = [1,3,5,7,9,11];
console.log(ary);

//Task 2
console.log(ary[0]);
console.log(ary[ary.length-1]);

//Task3
ary.push(13);
console.log(ary[ary.length-1]);

//Task 4 
ary.pop();
console.log(ary);

//Task 5
ary.shift();
console.log(ary);

// Task 6
ary.unshift(1);
console.log(ary);

//Task 7
let arr = [1,2,3,4,5,6,7,8,9];
let newArrr = arr.map((nums) => nums*nums);
console.log(newArrr);

// const numbers = [65, 44, 12, 4];
// const newArr = numbers.map(myFunction)

// function myFunction(num) {
//   return num * num;
// }
//map() creates a new array from calling a function for every array element.

// map() does not execute the function for empty elements.

// map() does not change the original array.

//Task 8
const array = [1,2,3,4,5,6,7,8,9,11,12,13,14,15];
const evenArray = array.filter((num) => num%2 ===0);
console.log(evenArray);

// The filter() method creates a new array filled with elements that pass a test provided by a function.

// The filter() method does not execute the function for empty elements.

// The filter() method does not change the original array.

//Task 9
const aray = [11,12,13,14,15,16,17,18,19,20];
const sum = aray.reduce((accumlator,currentValue) => accumlator+currentValue,0);
console.log(sum);

// The reduce() method executes a reducer function for array element.

// The reduce() method returns a single value: the function's accumulated result.

// The reduce() method does not execute the function for empty array elements.

 // The reduce() method does not change the original array.


//Task 10

let arrayy = [1,3,5,7,9];
for(let i = 0;i<arrayy.length;i++){
    console.log(arrayy[i]);
}

// Task 11
let arrayyy = [1,3,5,7,9];
arrayyy.forEach(element => console.log(element));


// Task 12
let matrix =
[               [1,2,3],
                [4,5,6],
                [7,8,9],
];

console.log(matrix);

// Task 13
console.log(matrix[1][1]);
console.log(matrix[2][2]);
console.log(matrix[3][3]);