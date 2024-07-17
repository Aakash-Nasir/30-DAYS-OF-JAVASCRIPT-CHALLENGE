// TASK 1

// let num = 10;
// if(num > 0) {
//     console.log("number is positive ");
// }
// else if(num < 0 ){
//     console.log("number is negative");
// }
// else {
//     console.log("number is zero");

// }


function checkNumber(num) {
    if(num > 0) {
            console.log("number is positive ");
        }
        else if(num < 0 ){
            console.log("number is negative");
        }
        else {
            console.log("number is zero");
        
        }
}
checkNumber(4);
checkNumber(-4);
checkNumber(0);


// TASK 2
// let age = 10;
// if(age > 18) {
//     console.log("Person is Eligible for voting ");
// }
// else {
//     console.log("Person is not Eligible for voting ");

// }

function checkVotingEligibility(age) {
if(age > 18) {
    console.log("Person is Eligible for voting ");
}
else {
    console.log("Person is not Eligible for voting ");

}
}

checkVotingEligibility(17);
checkVotingEligibility(19);

// TASK 3

function greaterAmongThree(a,b,c) {
    if(a>=b){
        if(a>=c){
            console.log("a is greater than b and c");
        }
        else{
            console.log("c is greatest than a and c");
        }
    }

    else{
        if(b>=c){
        console.log("b is greatest than a and c");
    }
    else{
        console.log("c is greatest than a and b");
    }
}
}
greaterAmongThree(3,4,5);
greaterAmongThree(5,6,4);
greaterAmongThree(7,3,5);

// TASK 4
function getDayOfWeek(dayNumber) {
    switch(dayNumber) {
        case 1: 
        console.log("Monday");
        break;
        case 2: 
        console.log("Tuesday");
        break;
        case 3: 
        console.log("Wednesday");
        break;
        case 4:
        console.log("Thrusday");
        break;
        case 5:
        console.log("Friday");
        break;
        case 6:
        console.log("Saturday");
        break;
        case 7:
        console.log("Sunday");
        break;
 
        default: 
        console.log("Invalid day number. Please Enter a number between 1 and 7")
}
}

getDayOfWeek(5);
getDayOfWeek(6);
getDayOfWeek(9);


// TASK 5
function getGrade(score){
    let grade;
    switch(true) {
        case score >= 90:
           grade = "A";
           break;
           case score>=80:
            grade = "B";
            case score>=70:
                grade = "C";
                case score >= 60:
                    grade = "D";
                    
                    default :
                    grade= "F"
    }
    console.log(`The grade is ${grade}`);
}
getGrade(97);
getGrade(58);

// TASK 6
function checkEvenOdd(nums){
    const result = nums %2 == 0 ? "Even" : "Odd" ;
    console.log(result);
}
checkEvenOdd(9);
checkEvenOdd(100);

// TASK 7

function checkLeapYear(year){
    if(year%4 ===0 && year % 100 !== 0 || year%400 === 0){
        console.log(`${year} is a leap year`);
    }
    else{
        console.log(`${year} is not a leap year`);
    }
}
checkLeapYear(2024);
checkLeapYear(2025);