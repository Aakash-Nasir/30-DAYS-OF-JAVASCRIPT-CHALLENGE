// Task 1
const str = "Javascript is a programming language. Many Developer loves Javascript";
const regex = /Javascript/g;

const matches = str.match(regex);
console.log(matches);

// Task 2
const sttr = "There are 2379 software engineers and 456 data analyst.";
const regexx = /\d+/g;
 const matcch = str.match(regex);
 console.log(matcch);


// Task 3
const strr = "JavaScript is a programming language many Developers love it.";
const regexp = /\b[A-Z][a-z]*\b/g;
const matchess = strr.match(regex);
console.log(matchess);

// Task 4
const strrr = "The numbers are 123, 4567, and 89.";
const regexxx = /\d+/g;
const matchesss = str.match(regexxx);
console.log(matchesss); // Output: ["123", "4567", "89"]

// Task 5
const strrrr = "(123) 456-7890";
const regexxxx = /\((\d{3})\)\s(\d{3})-(\d{4})/;
const matchessss = strrrr.match(regex);
console.log(matchessss); // Output: ["(123) 456-7890", "123", "456", "7890"]

// Task 6
const stri = "example@domain.com";
const regexi = /(\w+)@([\w.]+)/;
const matchesi = str.match(regex);
console.log(matchesi); // Output: ["example@domain.com", "example", "domain.com"]

// Task 7

const strii = "JavaScript is great. JavaScript is fun.";
const regexii = /^\w+/;
const matchesii = strii.match(regex);
console.log(matchesii); // Output: ["JavaScript"]

// Task 8 

const striii = "I love JavaScript";
const regexiii = /\w+$/;
const matchesiii = striii.match(regex);
console.log(matchesiii); // Output: ["JavaScript"]

// Task 9
const password = "P@ssw0rd";
const regexpp =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const isValid = regexpp.test(password);
console.log(isValid); // Output: true

// Task 10
const url = "https://www.example.com";
const regexppp = /^(https?:\/\/)?([\w.-]+)+(:\d+)?(\/[\w.-]*)*\/?$/;
const isValidd = regexppp.test(url);
console.log(isValidd); // Output: true

