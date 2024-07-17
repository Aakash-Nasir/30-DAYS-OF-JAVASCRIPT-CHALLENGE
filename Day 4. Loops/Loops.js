//TASK 1

for(let i =1; i<=10; i++){
    console.log(i);
}

// TASK 2

// for(let j=5;j<=50;j+=5){
// console.log(j);
// }

const num = 5;
for(let i=1;i<=10;i++){
    console.log(`${num}*${i} = ${num*i}`);
}

// TASK 3

let i = 0;
var sum = 0;
while(i<10){
    sum +=i;
    i++;
}
console.log("Sum is",sum);

// TASK 4
 let j= 10;
 while(j >= 0){
    console.log(j);     
    j--;
 }
 // Task 5
 let k = 1;
 do{
console.log(k);
k++;
 }
 while(k<=5);
 //Task 6

 const number = 5;
let factorial = 1;
let f = number;

do {
  factorial *= f;
  f--;
} while (f > 0);

console.log(`Factorial of ${number} is ${factorial}`);

//Task 7

for(let row = 0; row < 5; row++) {
    let pattern = "";
    for(let col = 0 ;col < row+1; col++) {
        pattern += "* ";
    }
    console.log(pattern.trim());
}

// Task 8
for(let m = 0; m<=10; m++){
    if(m==5) 
        continue;
        console.log(m);
}

//Task 9
for(let n =0; n<10; n++){
    if(n===7)
        break;
    console.log(n);
}